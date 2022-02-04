// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.0;

import "./IRandomUtils.sol";

contract RandomUtils is IRandomUtils {
    function randomKind() external pure override returns (RandomKind) {
        return RandomKind.OnChain;
    }

    function getRandomNumber(uint256 seed)
        external
        view
        override
        returns (uint256)
    {
        return uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    block.difficulty,
                    tx.origin,
                    tx.origin.balance,
                    gasleft(),
                    seed
                )
            )
        );
    }

    function requestRandomness()
        external
        pure
        override
        returns (bytes32 seed, uint256 roundId)
    {
        seed = bytes32(0);
        roundId = 0;
    }

    function getRandomNumber(
        bytes32 seed,
        uint256 round
    )
        external
        pure
        override
        returns (uint256 random)
    {
        random = 0;
    }
}
