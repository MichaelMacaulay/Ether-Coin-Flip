import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { createClient as createUrqlClient, Provider, useQuery } from 'urql';
import { dedupExchange, cacheExchange, fetchExchange, ssrExchange } from '@urql/core';
import { graphExchange } from '@graphprotocol/client-urql';
import * as GraphClient from '../.graphclient';
import Home from './index';

const { chains, provider, webSocketProvider } = configureChains(
  [
    sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
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

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider value={client}>
          {Component === Home ? <Home /> : <Component {...pageProps} />}
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
