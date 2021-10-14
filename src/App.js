import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import EtherCoinFlip from './artifacts/contracts/EtherCoinFlip.sol/EtherCoinFlip.json'


const ECFAddress = "0x20dfA0b80882951574ea1335B25730961302bd6f"

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
      const event = contract.on('EtherCoinFlipped', (coinFlipId, coinFlipWager, coinFlipResult) => {
        alert(`CoinFlipID ${coinFlipId} was flipped with ${updatedWager} ETH`);
      });
    }
  }


  async function endCoinFlip() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
    let updatedWager = ethers.utils.parseEther(wager.toString());
    const tx = await contract.endCoinFlip(coinFlipId, {value: updatedWager});
    tx.wait();
    console.log(tx);
    alert('You successfully ended the coin flip. Check your wallet to see if you won. Congrats or condolences.');
  }

  return (
    <div className="App">

    <header className="App-header">
      <h1>Ether Coin Flip</h1>
      <h3>Send your ETH to this contract with a 50/50 shot to double it!</h3>
      <button value={wager} onClick={startCoinFlip}>Start the coin flip!</button>
      <input onChange={e => setWager(e.target.value)} placeholder="Send your ETH"/>
      <br />
            <h2>End a wager</h2>
      <h3>Send ETH to a coin flip that has already begun</h3>
      <p>Make sure to send an equal amount of ETH as the person who started the Coin Flip</p>
      <button value={wager} onClick={endCoinFlip}>End a coin flip!</button>
      <input onChange={e => setWager(e.target.value)} placeholder="Send your ETH"/>
      <input value={coinFlipId} onChange={e => setCoinFlipId(e.target.value)} placeholder="Coin Flip ID"/>
    </header>
    </div>
  );
}

export default App;
