// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.0;

interface IRandomUtils {
    enum RandomKind { OnChain, Oracle }

    function randomKind() external pure returns (RandomKind);

    function requestRandomness()
        external
        returns (bytes32 seed, uint256 roundId);

    function getRandomNumber(
        bytes32 seed,
        uint256 round
    )
        external
        view
        returns (uint256 random);

    function getRandomNumber(uint256 seed) external view returns (uint256);
}