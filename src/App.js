import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import EtherCoinFlip from './artifacts/contracts/EtherCoinFlip.sol/EtherCoinFlip.json'


const ECFAddress = "0x54C782e222e4920BA8c9F3b02F28823E156e8b8d"

function App() {
  const [wager, setWager] = useState() 
  const [coinFlipId, setCoinFlipId] = useState() 

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }


  async function startCoinFlip() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
      let updatedWager = ethers.utils.parseEther(wager.toString());
      const tx = await contract.newCoinFlip({ value: updatedWager });
      tx.wait();
      console.log(`You started the wager with ${ethers.utils.formatEther(updatedWager)} ETH`);
      let event = contract.on('EtherCoinFlipped', (coinFlipId) => {
        alert(`CoinFlipID ${coinFlipId} was flipped`);
      });
      event.wait();
    }
  }


  async function endCoinFlip() {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
    let updatedWager = ethers.utils.parseEther(wager.toString());
    const tx = await contract.endCoinFlip(coinFlipId, {value: updatedWager});
    tx.wait();
    console.log(tx);
    let event = contract.on('EtherCoinFinishedFlip', (winner) => {
        alert(`${winner} won the coin flip.`);
      });
      event.wait();
  }

  return (
    <div className="App">

    <header className="App-header">
      <h1>Ether Coin Flip</h1>
      <h4>Send your ETH to this contract with a 50/50 shot to double it! Send Your Coin Flip ID to a friend or enemy!</h4>
    <p> Please note this uses the Rinkeby test network. Using any other network will result in lost funds. </p>
      <button value={wager} onClick={startCoinFlip}>Start the coin flip!</button>
      <input onChange={e => setWager(e.target.value)} placeholder="Send your ETH"/>
      <br />
            <h2>End a wager</h2>
      <h4>Send ETH to a coin flip that has already begun</h4>
      <p>Make sure to send an equal amount of ETH as the person who started the Coin Flip. Otherwise the transaction will fail.</p>
      <button value={wager} onClick={endCoinFlip}>End a coin flip!</button>
      <input onChange={e => setWager(e.target.value)} placeholder="Send your ETH"/>
      <input value={coinFlipId} onChange={e => setCoinFlipId(e.target.value)} placeholder="Coin Flip ID"/>
    </header>
    </div>
  );
}

export default App;
