import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
// import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
// import Token from './artifacts/contracts/Token.sol/Token.json'
import EtherCoinFlip from './artifacts/contracts/EtherCoinFlip.sol/EtherCoinFlip.json' // import the contract artifact file

// const greeterAddress = "0x0a337D5f4E3ba3f9eb413884d803dA8F1C8a9981"
// const tokenAddress = "0x0a337D5f4E3ba3f9eb413884d803dA8F1C8a9981"
const ECFAddress = "0x215a1970Ad76aCc6664977181aC0b9fFD87507D8"

function App() {
  // const [greeting, setGreetingValue] = useState()
  // const [userAccount, setUserAccount] = useState()
  const [wager, setWager] = useState() // amount of ether to send to Eth coin flip
  // const [coinFlipId, setCoinFlipId] = useState() // id of the coin flip

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }


  async function startCoinFlip() {

    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
      const coinFlippeth = await contract.newPureCoinFlip(wager);


      
      // const coinFlippeth = await contract.newPureCoinFlip(wager);
      await coinFlippeth.wait();
      console.log(`You started the wager with ${wager} ETH`);
    }



    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
    // const tx = await contract.startCoinFlip(wager);
    // console.log(tx);
  }


  // async function getCoinFlipID() {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
  //   const tx = await contract.getCoinFlipID();
  //   console.log(tx);
  // }

  async function endCoinFlip() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(ECFAddress, EtherCoinFlip.abi, signer);
    const tx = await contract.endCoinFlip();
    console.log(tx);
  }

  // async function fetchGreeting() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     console.log({ provider })
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
  //     try {
  //       const data = await contract.greet()
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log("Error: ", err)
  //     }
  //   }    
  // }

  // async function getBalance() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
  //     const balance = await contract.balanceOf(account);
  //     console.log("Balance: ", balance.toString());
  //   }
  // }

  // async function setGreeting() {
  //   if (!greeting) return
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     console.log({ provider })
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
  //     const transaction = await contract.setGreeting(greeting)
  //     await transaction.wait()
  //     fetchGreeting()
  //   }
  // }

  // async function sendCoins() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
  //     const transation = await contract.transfer(userAccount, amount);
  //     await transation.wait();
  //     console.log(`${amount} Coins successfully sent to ${userAccount}`);
  //   }
  // }

  return (
    <div className="App">

    <header className="App-header">
      <h1>Ether Coin Flip</h1>
      <h3>Send your ETH to this contract with a 50/50 shot to double it!</h3>
      <button onClick={startCoinFlip}>Start the coin flip!</button>
      <input onChange={e => setWager(e.target.value)} placeholder="Send your ETH"/>
      <br />
            <h2>End a wager</h2>
      <h3>Send ETH to a coin flip that has already begun</h3>
      <p>Make sure to send an equal amount of ETH as the person who started the Coin Flip</p>
      <button onClick={endCoinFlip} >End the coin flip!</button>
      <input  placeholder="End the wager" />
      <input  placeholder="Eth Coin Flip ID" /> 
    </header>

    

    

      {/* <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
        


        <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendCoins}>Send Coins</button>
        <input onChange={e => setUserAccount(e.target.value)} placeholder="Account ID" />
        <input onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      </header> */}
    </div>
  );
}

export default App;