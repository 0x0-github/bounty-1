// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.0;

import "./IRandomUtils.sol";
import "./DIARandomOracle.sol";

contract RandomUtilsDia is IRandomUtils {
    uint256 public constant DELAY = 5;
    address public randomOracle;
    uint256 nonce;

    event RequestRandomness(address caller, bytes32 requestId, uint256 roundId);

    constructor(address oracle) {
        randomOracle = oracle;
    }

    function randomKind() external override pure returns (RandomKind) {
        return RandomKind.Oracle;
    }

    function getRandomValue(
        uint256 _round
    )
        public
        view
        returns (string memory)
    {
        return DIARandomOracle(randomOracle).getRandomValueFromRound(_round);
    }

    function requestRandomness()
        external
        override
        returns (bytes32 requestId, uint256 roundId)
    {
        roundId = DIARandomOracle(randomOracle).getLastRound();

        requestId = keccak256(
            abi.encodePacked(
                block.timestamp,
                tx.origin,
                roundId,
                nonce++
            )
        );

        emit RequestRandomness(tx.origin, requestId, roundId);
    }

    function getRandomNumber(
        bytes32 requestId,
        uint256 round
    )
        external
        view
        override
        returns (uint256 random)
    {
        require(
            DIARandomOracle(randomOracle).getLastRound() >= round + DELAY,
            "Wait for the randomness round."
        );

        string memory rand = getRandomValue(round);
        random = uint256(keccak256(abi.encodePacked(rand, requestId)));
    }

    function getRandomNumber(uint256)
        external
        pure
        override
        returns (uint256)
    {
        return 0;
    }
}
