// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

contract EtherCoinFlip {
    struct EtherCoinFlipStruct {
        uint256 ID;
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

    event EtherCoinFlipped(uint256 indexed theCoinFlipID);

    // Start the Ether coin flip
    function newCoinFlip() public payable returns (uint256 coinFlipID) {
        coinFlipID = numCoinFlips++;
        EtherCoinFlipStructs[coinFlipID] = EtherCoinFlipStruct(
            coinFlipID,
            msg.sender,
            msg.value,
            msg.sender,
            msg.value,
            0,
            msg.sender,
            msg.sender
        );
        emit EtherCoinFlipped(coinFlipID);
    }

    event EtherCoinFinishedFlip(address indexed winner);

    // End the Ether coin flip
    function endCoinFlip(uint256 coinFlipID) public payable {
        EtherCoinFlipStruct memory c = EtherCoinFlipStructs[coinFlipID];

        require(coinFlipID == c.ID);

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
