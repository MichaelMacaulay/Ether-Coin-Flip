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
    mapping(uint256 => EtherCoinFlipStruct) public EtherCoinFlipStructs;

    event startedCoinfFlip(uint256 indexed theCoinFlipID, address indexed theBetStarter, uint256 theStartingWager);
    event finishedCoinFlip(uint256 indexed theCoinFlipID, address indexed winner, address indexed loser);

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
            payable(address(0))
        );
        emit startedCoinfFlip(coinFlipID, player1, msg.value);
    }

    function endCoinFlip(uint256 coinFlipID) public payable {
    EtherCoinFlipStruct storage c = EtherCoinFlipStructs[coinFlipID];
    address payable player2 = payable(msg.sender);

    require(msg.value >= c.startingWager.mul(99).div(100) && msg.value <= c.startingWager.mul(101).div(100), "Ending wager must be within 1% of the starting wager");
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

    c.winner.transfer(c.etherTotal);
    emit finishedCoinFlip(c.ID, c.winner, c.loser);
}
}