// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MercEUR {
    string public name = "MercEUR";
    uint256 public totalSupply = 100000000000000000000;
    uint8 public decimals = 18;

    mapping(address => uint256) mercEURBalance;

    // function for holders to check their mercEUR balance
    function checkMercEURBalance(address user) public view returns (uint256) {
        return mercEURBalance[user];
    }

    // function to transfer MercEUR
    function sendMercEUR(
        address payable receiver,
        uint256 amount
    ) public payable {
        uint256 userMercEURBalance = mercEURBalance[msg.sender];
        require(userMercEURBalance >= amount, "You don't have enough MercEUR!");

        (bool success, ) = receiver.call{value: amount}("");
        require(success, "Failed to send MercEUR!");

        mercEURBalance[msg.sender] = userMercEURBalance - amount;
        mercEURBalance[receiver] += amount;
    }
}
