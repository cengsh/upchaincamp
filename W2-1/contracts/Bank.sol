// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Bank {

    address payable public owner;
    mapping(address => uint) public deposits;
    //uint called;

    constructor() payable {
        owner = payable(msg.sender);
    }
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }


    function deposit() public payable {
      deposits[msg.sender] += msg.value;
    }

    receive() external payable {
      deposits[msg.sender] += msg.value;
    }

    function balances()external view returns(uint256){
        return address(this).balance;
    }
    function withdrawAll() public {
        uint amount = address(this).balance;

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    function withdraw() public {
        (bool success, ) = msg.sender.call{value: deposits[msg.sender]}("");
        deposits[msg.sender] = 0;

        require(success, "Failed to send Ether");
    }



}


