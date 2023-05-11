// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract EtherCoinFlip {
    using SafeMath for uint256;

    struct EtherCoinFlipStruct {
        uint256 ID;
        address payable betStarter;
        uint256 startingWager;
        address payable betEnder;
        uint256 endingWager;
        uint256 etherTotal;
        address payable winner;
        address payable loser;
        bool isFinished;
    }

    uint256 numberOfCoinFlips = 1;
    mapping(uint256 => EtherCoinFlipStruct) public EtherCoinFlipStructs;

    event startedCoinFlip(uint256 indexed theCoinFlipID, address indexed theBetStarter, uint256 theStartingWager, bool indexed isFinished);
    event finishedCoinFlip(uint256 indexed theCoinFlipID, address indexed winner, address loser, bool indexed isFinished);

    function newCoinFlip() public payable returns (uint256 coinFlipID) {
        address payable player1 = payable(msg.sender);
        coinFlipID = numberOfCoinFlips;
        numberOfCoinFlips = numberOfCoinFlips.add(1);
        EtherCoinFlipStructs[coinFlipID] = EtherCoinFlipStruct(
            coinFlipID,
            player1,
            msg.value,
            payable(address(0)),
            0,
            0,
            payable(address(0)),
            payable(address(0)),
            false
        );
        emit startedCoinFlip(coinFlipID, player1, msg.value, EtherCoinFlipStructs[coinFlipID].isFinished);
    }

    function endCoinFlip(uint256 coinFlipID) public payable {
        EtherCoinFlipStruct storage c = EtherCoinFlipStructs[coinFlipID];
        address payable player2 = payable(msg.sender);

        require(coinFlipID == c.ID, "Invalid coin flip ID");
        require(!c.isFinished, "Coin flip has already been finished");

        c.betEnder = player2;
        c.endingWager = msg.value;
        c.etherTotal = c.startingWager.add(c.endingWager);

        bytes32 randomHash = keccak256(abi.encodePacked(block.chainid, block.gaslimit, block.number, block.timestamp, msg.sender));
        uint256 randomResult = uint256(randomHash);

        if ((randomResult % 2) == 0) {
            c.winner = c.betStarter;
            c.loser = c.betEnder;
        } else {
            c.winner = c.betEnder;
            c.loser = c.betStarter;
        }

        c.winner.transfer(c.etherTotal);
        c.isFinished = true;
        emit finishedCoinFlip(coinFlipID, c.winner, c.loser, EtherCoinFlipStructs[coinFlipID].isFinished);
    }
}
