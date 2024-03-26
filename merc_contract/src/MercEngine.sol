// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/* Imports */

import {MercEUR} from "./MercEUR.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title MercEngine
 * @author yeahChibyke
 * The system is designed to be as minimal as possible, and maintain a 1 token == 1 EUR peg.
 *
 * MercEUR is similar to DAI if DAI had no governance, no fees, and was backed by only WETH and WBTC.
 *
 * Our M₤ system should always be "overcollateralized". At no point, should the value of
 * all collateral < the ₤ backed value of all the M₤.
 *
 * @notice This contract is the core of the MercEUR Stablecoin system. It handles all the logic
 * for minting and redeeming M₤, as well as depositing and withdrawing collateral.
 *
 * @notice This contract is VERY loosely based on the MakerDA DSS (DAI) system
 */
contract MercEngine is ReentrancyGuard {
    /* Errors */

    error MercEngine__MustBeMoreThanZero();
    error MercEngine__AddressesLengthMismatch();
    error MercEngine__TokenNotAllowed();
    error MercEngine__TransferFailed();

    /* State Variables */

    mapping(address token => address priceFeed) private s_priceFeeds;
    mapping(address user => mapping(address token => uint256 amount)) private s_collateralDeposited;
    mapping(address user => uint256 amountMEUMinted) private s_MEUMinted;

    MercEUR private immutable i_MercEUR;

    /* Events */

    event CollateralDeposited(address indexed user, address indexed token, uint256 indexed amount);

    /* Modifiers */

    modifier moreThanZero(uint256 value) {
        if (value == 0) {
            revert MercEngine__MustBeMoreThanZero();
        }
        _;
    }

    modifier isAllowedToken(address token) {
        if (s_priceFeeds[token] == address(0)) {
            revert MercEngine__TokenNotAllowed();
        }
        _;
    }

    /* Functions */

    constructor(address[] memory tokenAddresses, address[] memory priceFeedAddresses, address mercEURAddress) {
        if (tokenAddresses.length != priceFeedAddresses.length) {
            revert MercEngine__AddressesLengthMismatch();
        }
        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            s_priceFeeds[tokenAddresses[i]] = priceFeedAddresses[i];
        }
        i_MercEUR = MercEUR(mercEURAddress);
    }

    /* External Functions */

    function depositCollateralForMEU() external {}

    function redeemCollateralForMEU() external {}

    /**
     * @notice follows CEI pattern:
     *      modifiers perform checks
     *      state changes are done proper in the function
     * @notice IERC20 wraps collateral deposited by msg.sender
     * @dev Allows users to deposit collateral tokens into the contract.
     * @param tokenCollateralAddress The address of the token being deposited as collateral.
     * @param amountCollateral The amount of the token being deposited as collateral.
     */
    function depositCollateral(address tokenCollateralAddress, uint256 amountCollateral)
        external
        moreThanZero(amountCollateral)
        isAllowedToken(tokenCollateralAddress)
        nonReentrant
    {
        s_collateralDeposited[msg.sender][tokenCollateralAddress] += amountCollateral;
        emit CollateralDeposited(msg.sender, tokenCollateralAddress, amountCollateral);
        bool Success = IERC20(tokenCollateralAddress).transferFrom(msg.sender, address(this), amountCollateral);
        if (!Success) {
            revert MercEngine__TransferFailed();
        }
    }

    function redeemCollateral() external {}

    /**
     * @notice follows CEI pattern
     * @param amountMEUToMint amount of MEU to mint
     * @notice they must have more collateral than the minimum threshold
     */
    function mintMEU(uint256 amountMEUToMint) external moreThanZero(amountMEUToMint) nonReentrant {
        s_MEUMinted[msg.sender] += amountMEUToMint;
    }

    function burnMEU() external {}

    function liquidate() external {}

    function getHealthFactor() external view {}

    /* Private & Internal View Functions */

    function _getAccountInformation(address user)
        private
        view
        returns (uint256 totalMEUMinted, uint256 collateralValueInEUR)
    {
        totalMEUMinted = s_MEUMinted[user];
    }

    /**
     * @notice returns how close to liquidation a user is
     *      If a user goes below 1, they can get liquidated
     */
    function _healthFactor(address user) private view returns (uint256) {
        (uint256 totalMEUMinted, uint256 collateralValueInEUR) = _getAccountInformation(user);
    }

    function _revertIfHealthFactorIsBroken(address user) internal view {
        // 1. Check health factor; do they have enough collateral
        // 2. Revert if they don't
    }
}
