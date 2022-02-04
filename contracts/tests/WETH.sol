// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WETH is Ownable, ERC20 {
    uint256 public constant SUPPLY = 335559271 * 10e18;

    constructor() ERC20("Wrapped Ethereum", "WETH") {
        _mint(msg.sender, SUPPLY);
    }

    function burn(uint256 amount_) external {
        _burn(msg.sender, amount_);
    }
}
