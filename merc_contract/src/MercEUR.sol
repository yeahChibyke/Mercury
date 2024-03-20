// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MercEUR
 * @author yeahChibyke
 * Collateral: Crypto-collaterized
 * Minting: Algorithmic
 * Relative Stability: Anchored to the EUR
 * @notice This contract is just the ERC20 implementation of the mercEUR stablecoin. It will be governed by the MercEngine.
 */

contract MercEUR is ERC20, ERC20Burnable, Ownable {
    /* Errors */

    error MercEUR__MustBeMoreThanZero();
    error MercEUR__BurnAmountMoreThanBalance();
    error MercEUR__AddressNotValid();

    /* Constructor */

    constructor(address Mercury) ERC20("MercEUR", "MEU") Ownable(Mercury) {}

    /* Functions */

    function burn(uint256 _amount) public override onlyOwner {
        uint256 balance = balanceOf(msg.sender);
        if (_amount <= 0) {
            revert MercEUR__MustBeMoreThanZero();
        }
        if (_amount > balance) {
            revert MercEUR__BurnAmountMoreThanBalance();
        }
        super.burn(_amount);
    }

    function mint(
        address _to,
        uint256 _amount
    ) external onlyOwner returns (bool) {
        if (_to == address(0)) {
            revert MercEUR__AddressNotValid();
        }
        if (_amount <= 0) {
            revert MercEUR__MustBeMoreThanZero();
        }
        _mint(_to, _amount);
        return true;
    }
}
