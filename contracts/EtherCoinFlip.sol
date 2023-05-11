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
    }

    uint256 numberOfCoinFlips = 0;
    mapping(uint256 => EtherCoinFlipStruct) public activeCoinFlips;
    mapping(uint256 => EtherCoinFlipStruct) public finishedCoinFlips;

    event startedCoinFlips(uint256 indexed theCoinFlipID, address indexed theBetStarter, uint256 theStartingWager);
    event endedCoinFlips(uint256 indexed theCoinFlipID, address indexed betStarter, address indexed betEnder, uint256 etherTotal);

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
            0
        );
        emit startedCoinFlips(coinFlipID, player1, msg.value);
    }

    function endCoinFlip(uint256 coinFlipID) public payable {
        EtherCoinFlipStruct storage c = activeCoinFlips[coinFlipID];

        require(msg.value >= c.startingWager.mul(99).div(100) && msg.value <= c.startingWager.mul(101).div(100), "Ending wager must be within 1% of the starting wager");
        address payable player2 = payable(msg.sender);
        require(coinFlipID == c.ID, "Invalid coin flip ID");

        c.betEnder = player2;
        c.endingWager = msg.value;
        c.etherTotal = c.startingWager.add(c.endingWager);

        bytes32 randomHash = keccak256(abi.encodePacked(block.chainid, block.gaslimit, block.number, block.timestamp, msg.sender));
        uint256 randomResult = uint256(randomHash);

        address payable winner;
        address payable loser;

        if ((randomResult % 2) == 0) {
            winner = c.betStarter;
            loser = c.betEnder;
        } else {
            winner = c.betEnder;
            loser = c.betStarter;
        }

        winner.transfer(c.etherTotal);

        emit endedCoinFlips(coinFlipID, c.betStarter, c.betEnder, c.etherTotal);

        finishedCoinFlips[coinFlipID] = EtherCoinFlipStruct(
            coinFlipID,
            c.betStarter,
            c.startingWager,
            c.betEnder,
            c.endingWager,
            c.etherTotal
        );

        delete activeCoinFlips[coinFlipID];

    }
}
