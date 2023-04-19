import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Dashboard from './components/dashboard';

const StartCoinFlipButton = dynamic(() => import("./components/startCoinFlipButton"), {
  ssr: false,
});

const EndCoinFlip = dynamic(() => import("./components/endCoinFlip"), {
  ssr: false,
});

const coinFlips = [
  { value: 0.1, flippedBy: '0xabc123', txHash: '0xdef456', coinFlipID: 1 },
  { value: 0.2, flippedBy: '0x123abc', txHash: '0x456def', coinFlipID: 1  },
  { value: 0.3, flippedBy: '0xcba321', txHash: '0xfed654', coinFlipID: 1  },
];

const Home: NextPage = ({ coinFlips }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ether Coin Flip</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header>
    <ConnectButton />
      </header>

      <main className={styles.main}>
        <StartCoinFlipButton />
        <br />
        <Dashboard coinFlips={coinFlips}/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
