// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Oracle {
    uint256 round;

    function getLastRound() public view returns (uint256) {
        return round;
    }

    function incrementRound(uint256 newRound) public {
        round = newRound;
    }
}

contract ChainLinkETHUSDPriceFeed {
    constructor() {
    }

    function latestRoundData()
        external
        pure
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        roundId = 36893488147420553287;
        answer = 259806329701;
        startedAt = 1643892483;
        updatedAt = 1643892483;
        answeredInRound = 36893488147420553287;
    }

    function latestAnswer()
        external
        pure
        returns (int256 answer)
    {
        answer = 259806329701;
    }
}