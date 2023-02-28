import { createClient as createUrqlClient, Provider } from 'urql';
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../styles/dashboard.css';
import '../styles/button.css';

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
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider value={client}>
          <div className="flex justify-center mt-20" >  {/* styled with Tailwind (will add tailwind) */}
            <ConnectButton />
          </div>
        <Component {...pageProps} />
      </Provider>
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default MyApp;