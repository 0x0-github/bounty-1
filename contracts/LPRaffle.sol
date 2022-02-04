// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./RandomUtils.sol";

contract LPRaffle is Ownable {
    IERC20 lpToken;
    IRandomUtils public randomUtils;
    mapping(address=>bool) addressRegistered;
    address[] public accounts;
    bytes32 public requestId;
    uint256 public roundId;

    mapping(address=>bool) public blacklist;

    struct Balances {
        address account;
        uint256 balance;
    }

    event Winner(address account);

    constructor(address _lpToken, address _randomUtils) {
        lpToken = IERC20(_lpToken);
        randomUtils = IRandomUtils(randomUtils);
    }

    function allAccounts() public view returns (address[] memory) {
        return accounts;
    }

    function registerAccount(address account) public {
        require(!addressRegistered[account], "Address already registered");
        uint256 balance = lpToken.balanceOf(account);
        require(balance > 0, "Must have token");
        addressRegistered[account] = true;
        accounts.push(account);
    }

    function gatherBalances()
        public
        view
        returns (Balances[] memory, uint256)
    {
        uint256 totalBalance = 0;
        Balances[] memory balances = new Balances[](accounts.length);
        for (uint16 i = 0; i < accounts.length; i++) {
            address account = accounts[i];
            uint256 balance = lpToken.balanceOf(account);
            totalBalance += balance;
            balances[i] = Balances(account, balance);
        }
        return (balances, totalBalance);
    }

    function raffle() public onlyOwner {
        if (randomUtils.randomKind() == IRandomUtils.RandomKind.Oracle) {
            (
                requestId,
                roundId
            ) = randomUtils.requestRandomness();
        } else if (randomUtils.randomKind() == IRandomUtils.RandomKind.OnChain) {
            performRaffle(randomUtils.getRandomNumber(0));
        }
    }

    function performRaffleFromOracle() public {
        performRaffle(randomUtils.getRandomNumber(requestId, roundId));
    }

    function performRaffle(uint256 randomness) internal {
        (Balances[] memory balances, uint256 totalBalance) = gatherBalances();
        uint256 winnerTicket = randomness % totalBalance;

        for (uint16 i = 0; i < balances.length; i++) {
            if (
                !blacklist[balances[i].account] &&
                winnerTicket < balances[i].balance
            ) {
                emit Winner(balances[i].account);
                return;
            }
            winnerTicket -= balances[i].balance;
        }
    }

    function addBlacklist(address account) public onlyOwner {
        blacklist[account] = true;
    }

    function removeBlacklist(address account) public onlyOwner {
        blacklist[account] = false;
    }

    function setRandomUtils(address _randomUtils) external onlyOwner {
        require(
            _randomUtils != address(0),
            "Cannot be zero"
        );
        randomUtils = IRandomUtils(_randomUtils);
    }
}
