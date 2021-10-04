// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

contract EtherCoinFlip {
    uint256 etherWinnings;

    struct EtherCoinFlipStruct {
        address payable betStarter;
        uint256 startingWager;
        address payable betEnder;
        uint256 endingWager;
        uint256 etherTotal;
        address payable winner;
        address payable loser;
    }

    uint256 numCoinFlips = 300;
    mapping(uint256 => EtherCoinFlipStruct) EtherCoinFlipStructs;

    // Emit the event
    event EtherCoinFlipped(uint256 indexed theCoinFlipID);

    // Start the Ether coin flip
    function newPureCoinFlip(uint256 startingETHWager) public payable returns (uint256 coinFlipID) {
        coinFlipID = numCoinFlips++;
        EtherCoinFlipStructs[coinFlipID] = EtherCoinFlipStruct(
            msg.sender, //address payable betStarter;
            startingETHWager, // uint256 startingWager;
            msg.sender, // address payable betEnder;
            msg.value, // uint256 endingWager;
            0, // uint256 etherTotal;
            msg.sender, // address payable winner;
            msg.sender // address payable loser;
        );
        emit EtherCoinFlipped(coinFlipID);
    }

    // End the Ether coin flip

    function endPureCoinFlip(uint256 coinFlipID) public payable {
        require(coinFlipID == coinFlipID);
        EtherCoinFlipStruct memory c = EtherCoinFlipStructs[coinFlipID];
        require(msg.value == c.startingWager);
        c.betEnder = msg.sender;
        c.endingWager = msg.value;
        c.etherTotal = c.startingWager + c.endingWager;

        uint256 finalVerdict = block.number +
            block.timestamp +
            msg.value +
            block.difficulty +
            block.gaslimit +
            tx.gasprice +
            1;

        if ((finalVerdict % 2) == 0) {
            c.winner = c.betStarter;
        } else {
            c.winner = c.betEnder;
        }

        c.winner.transfer(c.etherTotal);

        emit EtherCoinFinishedFlip(c.winner);
    }

    // Unequal coin EtherCoinFlips
    // Start the Ether coin flip
    function newCoinFlip(uint256 startingETHWager) public payable returns (uint256 coinFlipID) {
        coinFlipID = numCoinFlips++;
        EtherCoinFlipStructs[coinFlipID] = EtherCoinFlipStruct(
            msg.sender, //address payable betStarter;
            startingETHWager, // uint256 startingWager;
            msg.sender, // address payable betEnder;
            msg.value, // uint256 endingWager;
            0, // uint256 etherTotal;
            msg.sender, // address payable winner;
            msg.sender // address payable loser;
        );
        emit EtherCoinFlipped(coinFlipID);
    }

    event EtherCoinFinishedFlip(address indexed winner);

    // End the Ether coin flip

    function endCoinFlip(uint256 coinFlipID) public payable {
        require(coinFlipID == coinFlipID);
        EtherCoinFlipStruct memory c = EtherCoinFlipStructs[coinFlipID];
        c.betEnder = msg.sender;
        c.endingWager = msg.value;
        c.etherTotal = c.startingWager + c.endingWager;

        uint256 finalVerdict = block.number +
            block.timestamp +
            msg.value +
            block.difficulty +
            block.gaslimit +
            tx.gasprice +
            1;

        if ((finalVerdict % 2) == 0) {
            c.winner = c.betStarter;
        } else {
            c.winner = c.betEnder;
        }

        c.winner.transfer(c.etherTotal);

        emit EtherCoinFinishedFlip(c.winner);
    }
}
