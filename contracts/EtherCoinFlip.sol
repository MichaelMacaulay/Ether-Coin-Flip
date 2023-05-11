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
    }

    uint256 numberOfCoinFlips = 1;
    mapping(uint256 => EtherCoinFlipStruct) public activeCoinFlips;
    mapping(uint256 => EtherCoinFlipStruct) public finishedCoinFlips;

    event startedCoinFlip(uint256 indexed theCoinFlipID, address indexed theBetStarter, uint256 theStartingWager);
    event finishedCoinFlip(uint256 indexed theCoinFlipID, address indexed winner, address loser);

    function newCoinFlip() public payable returns (uint256 coinFlipID) {
        address payable player1 = payable(msg.sender);
        coinFlipID = numberOfCoinFlips;
        numberOfCoinFlips = numberOfCoinFlips.add(1);
        activeCoinFlips[coinFlipID] = EtherCoinFlipStruct(
            coinFlipID,
            player1,
            msg.value,
            payable(address(0)),
            0,
            0,
            payable(address(0)),
            payable(address(0))
        );
        emit startedCoinFlip(coinFlipID, player1, msg.value);
    }

    function endCoinFlip(uint256 coinFlipID) public payable {
        EtherCoinFlipStruct storage c = activeCoinFlips[coinFlipID];
        require(
            msg.value >= c.startingWager.mul(99).div(100) && 
            msg.value <= c.startingWager.mul(101).div(100),
            "Ending wager must be within 1% of the starting wager"
            );

        address payable player2 = payable(msg.sender);

        require(coinFlipID == c.ID, "Invalid coin flip ID");

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

        finishedCoinFlips[coinFlipID] = c;
        delete activeCoinFlips[coinFlipID];

        (bool success, ) = c.winner.call{value: c.etherTotal}("");
        require(success, "Transfer failed.");

        emit finishedCoinFlip(coinFlipID, c.winner, c.loser);
    }

}
