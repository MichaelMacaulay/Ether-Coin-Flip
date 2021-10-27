// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract EtherCoinFlip is VRFConsumerBase {
    // testing with hard-coded values
    constructor()
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088 // LINK Token
        )
    {
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10**18; // 0.1 LINK (Varies by network)
    }

    function getRandomNumber() public returns (bytes32 requestId) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK - fill contract with faucet"
        );
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness)
        internal
        override
    {
        randomResult = randomness;
    }

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

    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;

    uint256 numCoinFlips = 300;
    mapping(uint256 => EtherCoinFlipStruct) EtherCoinFlipStructs;

    event EtherCoinFlipped(uint256 indexed theCoinFlipID);

    // Start the Ether coin flip
    function newCoinFlip() public payable returns (uint256 coinFlipID) {
        address theBetStarter = msg.sender;
        address payable player1 = payable(theBetStarter);
        coinFlipID = numCoinFlips++;
        EtherCoinFlipStructs[coinFlipID] = EtherCoinFlipStruct(
            coinFlipID,
            player1,
            msg.value,
            player1,
            msg.value,
            0,
            player1,
            player1
        );
        emit EtherCoinFlipped(coinFlipID);
    }

    event EtherCoinFinishedFlip(address indexed winner);

    // End the Ether coin flip
    function endCoinFlip(uint256 coinFlipID) public payable {
        EtherCoinFlipStruct memory c = EtherCoinFlipStructs[coinFlipID];

        address theBetender = msg.sender;
        address payable player2 = payable(theBetender);

        require(coinFlipID == c.ID);
        require(msg.value == c.startingWager);

        c.betEnder = player2;
        c.endingWager = msg.value;
        c.etherTotal = c.startingWager + c.endingWager;

        fulfillRandomness(getRandomNumber(), coinFlipID);

        if ((randomResult % 2) == 0) {
            c.winner = c.betStarter;
        } else {
            c.winner = c.betEnder;
        }

        c.winner.transfer(c.etherTotal);
        emit EtherCoinFinishedFlip(c.winner);
    }
}
