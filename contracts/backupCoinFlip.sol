// SPDX-License-Identifier: MIT

// pragma solidity ^0.7.6;

// contract EtherCoinFlip {
//     struct Bet {
//         address player;
//         uint256 amount;
//     }

//     mapping(address => Bet) public bets;

//     event BetPlaced(address player, uint256 amount);

//     function placeBet(uint256 amount) public payable {
//         require(amount > 0);

//         Bet storage bet = Bet({player: msg.sender, amount: amount});

//         bets[msg.sender] = bet;

//         emit BetPlaced(msg.sender, amount);
//     }

//     function flip() public {
//         uint256 randomResult = block.timestamp + block.difficulty + tx.gasprice;

//         Bet storage bet = bets[msg.sender];

//         if ((randomResult % 2) == 0) {
//             msg.sender.transfer(bet.amount);
//         }
//     }
// }
