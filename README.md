# Ether Coin Flip

Ether Coin Flip allows 2 players to gamble Ethereum. You can find the full tutorial for this Dapp [here](https://levelup.gitconnected.com/the-complete-guide-to-building-an-ethereum-dapp-1692976ec4a5).

Working example is running on the Rinkeby testnet and can be found [here](https://ethercoinflipchainlinkrvf.netlify.app/).

The game works like this.

-Player 1 sends Ethereum to the new coin flip function

-Smart contract generates a coin flip ID

-Player 2 sends Ethereum to the end coin flip function & passes in the coin flip ID

-Smart contract randomly generates a winner

-Smart contract sends all the Ethereum to the winner

This smart contract using [chainlink's RVF](https://docs.chain.link/docs/get-a-random-number/) to secure randomness.
