import { createClient as createUrqlClient, Provider } from 'urql';
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { goerli } from '@wagmi/core/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../styles/dashboard.css';
import '../styles/button.css';
import ethercoinflip from '../utils/ethercoinflip.json';
import { ethers } from "ethers";
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {

  const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

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

  const { config, error } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: ethercoinflip,
    functionName: 'newCoinFlip',
  })

const { data, isLoading, isSuccess, write } = useContractWrite(config)

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider value={client}>
            <ConnectButton />
            <input type="number" placeholder="eth wager" />
            <button className="button">flip coin</button>
        <Component {...pageProps} />
      </Provider>
      </RainbowKitProvider>
    </WagmiConfig>


  );
}

export default MyApp;