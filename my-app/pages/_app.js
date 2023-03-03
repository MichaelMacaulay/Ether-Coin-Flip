import { createClient as createUrqlClient, Provider } from 'urql';
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../styles/dashboard.css';
import '../styles/button.css';
import ethercoinflip from '../utils/ethercoinflip.json';
import { ethers } from "ethers";

export const YourApp = () => {
  return <ConnectButton />;
};

const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { config } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: ethercoinflip,
    functionName: 'newCoinFlip',
})

    const { data, isLoading, isSuccess, write } = useContractWrite(config)


const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const client = createUrqlClient({
  url: 'graphclient://dummy',
  requestPolicy: 'cache-and-network',
  exchanges: [graphExchange(GraphClient)],
});

function MyApp({ Component, pageProps }) {

    const { state: transactionState, send } = useContractFunction(EtherCoinFlipContract, "newCoinFlip");

    const [wager, setWager] = useState();
  
  async function handleFlipCoin(wager) {
    const value = ethers.utils.parseEther(wager.toString());
    await send({ value });
  }



  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider value={client}>
          <div>
            <ConnectButton />
          </div>
          <div>
            <button value={wager} onClick={() => handleFlipCoin(wager)}>Flip ether</button>
            <input onChange={e => setWager(e.target.value)} placeholder="Eth to wager" />
      {transactionState && (
        <div>
          <p>Transaction Hash: {transactionState.transactionHash}</p>
          <p>Status: {transactionState.status}</p>
        </div>
      )}
    </div>
        <Component {...pageProps} />
      </Provider>
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default MyApp;