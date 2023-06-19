// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";

contract EtherCoinFlip is VRFV2WrapperConsumerBase, ConfirmedOwner {
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
    mapping(uint256 => uint256) public randomResults;

    event StartedCoinFlip(uint256 indexed theCoinFlipID, address indexed theBetStarter, uint256 theStartingWager);
    event FinishedCoinFlip(uint256 indexed theCoinFlipID, address indexed winner, address indexed loser);

    uint32 public callbackGasLimit = 100000;
    uint16 public requestConfirmations = 3;
    uint32 public numWords = 1;
    address public linkAddress = 0x779877A7B0D9E8603169DdbD7836e478b4624789;
    address public wrapperAddress = 0xab18414CD93297B0d12ac29E63Ca20f515b3DB46;

    constructor()
        ConfirmedOwner(msg.sender)
        VRFV2WrapperConsumerBase(linkAddress, wrapperAddress)
    {}

    function newCoinFlip() public payable returns (uint256 coinFlipID) {
        address payable player1 = payable(msg.sender);
        coinFlipID = numberOfCoinFlips;
        numberOfCoinFlips = numberOfCoinFlips + 1;
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
        emit StartedCoinFlip(coinFlipID, player1, msg.value);
    }

    function endCoinFlip(uint256 coinFlipID) public payable {
        EtherCoinFlipStruct storage currentCoinFlip = EtherCoinFlipStructs[coinFlipID];
        address payable player2 = payable(msg.sender);

        require(msg.value >= currentCoinFlip.startingWager * 99 / 100 && msg.value <= currentCoinFlip.startingWager * 101 / 100, "Ending wager must be within 1% of the starting wager");
        require(coinFlipID == currentCoinFlip.ID, "Invalid coin flip ID");

        currentCoinFlip.betEnder = player2;
        currentCoinFlip.endingWager = msg.value;
        currentCoinFlip.etherTotal = currentCoinFlip.startingWager + currentCoinFlip.endingWager;

        uint256 requestId = requestRandomness(callbackGasLimit, requestConfirmations, numWords);
        randomResults[requestId] = coinFlipID;
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
        uint256 coinFlipID = randomResults[requestId];
        EtherCoinFlipStruct storage currentCoinFlip = EtherCoinFlipStructs[coinFlipID];

        uint256 randomResult = randomWords[0];

       if ((randomResult % 2) == 0) {
            currentCoinFlip.winner = currentCoinFlip.betStarter;
            currentCoinFlip.loser = currentCoinFlip.betEnder;
        } else {
            currentCoinFlip.winner = currentCoinFlip.betEnder;
            currentCoinFlip.loser = currentCoinFlip.betStarter;
        }

        currentCoinFlip.winner.transfer(currentCoinFlip.etherTotal);
        emit FinishedCoinFlip(currentCoinFlip.ID, currentCoinFlip.winner, currentCoinFlip.loser);
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(linkAddress);
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
