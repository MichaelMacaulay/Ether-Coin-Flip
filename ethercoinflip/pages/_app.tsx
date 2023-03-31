import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { createClient as createUrqlClient, Provider, useQuery } from 'urql';
import { dedupExchange, cacheExchange, fetchExchange, ssrExchange } from '@urql/core';
import { graphExchange } from '@graphprotocol/client-urql';
import * as GraphClient from '../.graphclient';
import etherCoinFlipABI from './utils/etherCoinFlipABI.json';
import { ethers } from "ethers";

const { chains, provider, webSocketProvider } = configureChains(
  [
    goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const exampleQuery = `{
finishedCoinFlips(first: 5) {
    id
    winner
    blockNumber
    blockTimestamp
}
startedCoinfFlips(first: 5) {
    id
    theCoinFlipID
    blockNumber
    blockTimestamp
}
}`

const isServerSide = typeof window === 'undefined';

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssr = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
});

const client = createUrqlClient({
    url: 'https://api.studio.thegraph.com/query/25902/goerlie-ether-coin-flip/v0.0.1',
    requestPolicy: 'cache-and-network',
    exchanges: [
      graphExchange(GraphClient),
        dedupExchange,
        cacheExchange,
        ssr, // Add `ssr` in front of the `fetchExchange`
        fetchExchange,
    ],
});



function MyApp({ Component, pageProps }: AppProps) {
  
  const result = useQuery({
    query: exampleQuery,
  });

  const { data, fetching, error } = result;

  console.log(result);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
