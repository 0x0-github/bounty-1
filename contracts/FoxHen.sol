// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Metadata.sol";
import "./IRandomUtils.sol";

contract FoxHen is ERC721Enumerable, Ownable {
    uint256 public constant MAX_TOKENS = 10000;
    uint256 public constant DISCOUNTED_TOKENS = 3000;
    // Discount is at 0.0038 = around $10
    uint256 public constant DISCOUNT_PRICE = 3800000000000000;
    uint16 public purchased = 0;
    IRandomUtils public randomUtils;

    struct OracleMinting {
        address minter;
        uint256 tokenId;
        bool fulfilled;
    }
    mapping(bytes32=>OracleMinting) oracleMintings;
    mapping(bytes32=>uint256) oracleMintingsRoundIds;

    struct TokenWithMetadata {
        uint256 tokenId;
        bool isFox;
        string metadata;
    }

    mapping(uint256=>bool) public isFox;
    uint256[] public foxes;
    uint16 public stolenMints;
    mapping(uint256=>uint256) public traitsOfToken;
    mapping(uint256=>bool) public traitsTaken;
    bool public mainSaleStarted;
    mapping(bytes=>bool) public signatureUsed;
    mapping(address=>uint8) public discountMintsUsed;
    uint256 extrasCount;

    IERC20 eggs;
    Metadata metadata;

    modifier notContract() {
        require(
            msg.sender == tx.origin,
            "Only EOA"
        );
        _;
    }

    constructor(
        address _eggs,
        address _metadata,
        address _randomUtils
    )
        ERC721("FoxHen", 'FH')
    {
        eggs = IERC20(_eggs);
        metadata = Metadata(_metadata);
        randomUtils = IRandomUtils(_randomUtils);
    }

    // Internal
    function setTraits(
        uint256 tokenId,
        uint256 seed
    )
        internal
        returns (uint256)
    {
        uint256 maxTraits = 16 ** 4;
        uint256 nextRandom = uint256(keccak256(abi.encode(seed, 1)));
        uint256 traitsID = nextRandom % maxTraits;
        while(traitsTaken[traitsID]) {
            nextRandom = uint256(keccak256(abi.encode(nextRandom, 1)));
            traitsID = nextRandom % maxTraits;
        }
        traitsTaken[traitsID] = true;
        traitsOfToken[tokenId] = traitsID;
        return traitsID;
    }

    function setSpecies(
        uint256 tokenId,
        uint256 seed
    )
        internal
        returns (bool)
    {
        uint256 random = uint256(keccak256(abi.encode(seed, 2))) % 10;
        if (random == 0) {
            isFox[tokenId] = true;
            foxes.push(tokenId);
            return true;
        }
        return false;
    }

    function getRecipient(
        uint256 tokenId,
        address minter,
        uint256 seed
    )
        internal
        view
        returns (address)
    {
        if (
            tokenId > DISCOUNTED_TOKENS &&
            tokenId <= MAX_TOKENS &&
            (uint256(keccak256(abi.encode(seed, 3))) % 10) == 0
        ) {
            uint256 fox
                = foxes[uint256(keccak256(abi.encode(seed, 4))) % foxes.length];
            address owner = ownerOf(fox);
            if (owner != address(0)) {
                return owner;
            }
        }
        return minter;
    }

    function fulfillRandomnessFromOracle(
        bytes32 requestId,
        uint256 roundId
    )
        external
    {
        OracleMinting storage minting = oracleMintings[requestId];
        require(!minting.fulfilled);
        require(minting.minter != address(0));
        minting.fulfilled = true;
        uint256 randomness = randomUtils.getRandomNumber(requestId, roundId);
        fulfillRandomness(minting.minter, minting.tokenId, randomness);
    }

    function fulfillRandomness(
        address minter,
        uint256 tokenId,
        uint256 randomness
    )
        internal
        returns (uint256)
    {
        setSpecies(tokenId, randomness);
        setTraits(tokenId, randomness);

        address recipient = getRecipient(tokenId, minter, randomness);
        if (recipient != minter) {
            stolenMints++;
        }
        _mint(recipient, tokenId);

        return randomness;
    }

    // Reads
    function eggsPrice(uint16 amount) public view returns (uint256) {
        require(purchased + amount >= DISCOUNTED_TOKENS);
        uint16 secondGen = purchased + amount - uint16(DISCOUNTED_TOKENS);
        return (secondGen / 500 + 1) * 40 ether;
    }

    function foxCount() public view returns (uint256) {
        return foxes.length;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        return metadata.tokenMetadata(
            isFox[tokenId],
            traitsOfToken[tokenId],
            tokenId
        );
    }

    function allTokensOfOwner(address owner)
        public
        view
        returns (TokenWithMetadata[] memory)
    {
        uint256 balance = balanceOf(owner);
        TokenWithMetadata[] memory tokens = new TokenWithMetadata[](balance);
        for (uint256 i = 0; i < balance; i++) {
            uint256 tokenId = tokenOfOwnerByIndex(owner, i);
            string memory data = tokenURI(tokenId);
            tokens[i] = TokenWithMetadata(tokenId, isFox[tokenId], data);
        }
        return tokens;
    }

    // Public
    function discountMint(uint8 amount) public payable notContract {
        address minter = _msgSender();
        require(mainSaleStarted, "Main Sale hasn't started yet");
        require(
            discountMintsUsed[minter] + amount <= 5,
            "You can't free mint any more"
        );
        require(purchased + amount <= DISCOUNTED_TOKENS, "Sold out");

        uint256 totalPrice = amount * DISCOUNT_PRICE;

        require(
            msg.value >= totalPrice,
            "Not enough ETH transferred"
        );

        uint256 seed;

        for (uint8 i = 0; i < amount; i++) {
            discountMintsUsed[minter]++;
            purchased++;
            if (randomUtils.randomKind() == IRandomUtils.RandomKind.Oracle) {
                (
                    bytes32 requestId,
                    uint256 roundId
                ) = randomUtils.requestRandomness();
                oracleMintings[requestId] = OracleMinting(minter, purchased, false);
                oracleMintingsRoundIds[requestId] = roundId;
            } else if (randomUtils.randomKind() == IRandomUtils.RandomKind.OnChain) {
                uint256 randomness = randomUtils.getRandomNumber(seed);

                seed = fulfillRandomness(minter, purchased, randomness);
            }
        }

        uint256 refundAmount = totalPrice - msg.value;

        if (refundAmount > 0) {
            payable(msg.sender).transfer(refundAmount);
        }
    }

    function buyWithEggs(uint16 amount) public notContract {
        address minter = _msgSender();
        require(mainSaleStarted, "Main Sale hasn't started yet");
        require(amount > 0 && amount <= 20, "Max 20 mints per tx");
        require(purchased >= DISCOUNTED_TOKENS, "Eggs sale not active");
        require(purchased + amount <= MAX_TOKENS, "Sold out");

        uint256 price = amount * eggsPrice(amount);
        require(
            price <= eggs.allowance(
                minter,
                address(this)
            ) && price <= eggs.balanceOf(minter),
            "Not enough eggs or allowance"
        );

        uint256 initialPurchased = purchased;
        purchased += amount;
        require(eggs.transferFrom(minter, address(this), price));

        uint256 seed = 0;

        for (uint16 i = 1; i <= amount; i++) {
            if (randomUtils.randomKind() == IRandomUtils.RandomKind.Oracle) {
                (
                    bytes32 requestId,
                    uint256 roundId
                ) = randomUtils.requestRandomness();
                oracleMintings[requestId] = OracleMinting(minter, purchased, false);
                oracleMintingsRoundIds[requestId] = roundId;
            } else if (randomUtils.randomKind() == IRandomUtils.RandomKind.OnChain) {
                uint256 randomness = randomUtils.getRandomNumber(seed);

                seed = fulfillRandomness(minter, initialPurchased + i, randomness);
            }
        }
    }

    function mintExtra(address recipient) public onlyOwner {
        require(extrasCount + 1 <= 30, "Max extras minted");
        extrasCount++;
        uint256 tokenId = MAX_TOKENS + extrasCount;
        if (randomUtils.randomKind() == IRandomUtils.RandomKind.Oracle) {
            (
                bytes32 requestId,
                uint256 roundId
            ) = randomUtils.requestRandomness();
            oracleMintings[requestId] = OracleMinting(recipient, purchased, false);
            oracleMintingsRoundIds[requestId] = roundId;
        } else if (randomUtils.randomKind() == IRandomUtils.RandomKind.OnChain) {
            uint256 randomness = randomUtils.getRandomNumber(0);

            fulfillRandomness(recipient, tokenId, randomness);
        }
    }

    // Admin
    function mintL1Token(
        address recipient,
        uint256 tokenId,
        uint256 traitsID,
        bool fox
    )
        external
        onlyOwner
    {
        require(!mainSaleStarted, "Main Sale has already begun");
        require(purchased + 1 == tokenId, "Incorrect tokenId");
        require(!traitsTaken[traitsID], "Traits already in use");

        purchased++;
        if (fox) {
            isFox[tokenId] = true;
            foxes.push(tokenId);
        }
        traitsTaken[traitsID] = true;
        traitsOfToken[tokenId] = traitsID;
        _mint(recipient, tokenId);
    }

    function toggleMainSale() public onlyOwner {
        mainSaleStarted = !mainSaleStarted;
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function setRandomUtils(address _randomUtils) external onlyOwner {
        require(
            _randomUtils != address(0),
            "Cannot be zero"
        );
        randomUtils = IRandomUtils(_randomUtils);
    }
}
