import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Dashboard from './components/dashboard';
import { useQuery } from 'urql';

const StartCoinFlipButton = dynamic(() => import("./components/startCoinFlipButton"), {
  ssr: false,
});

const exampleQuery = `{
  finishedCoinFlips(first: 5) {
    id
    winner
    loser
    blockNumber
  }
  startedCoinfFlips(first: 5) {
    id
    theCoinFlipID
    theBetStarter
    theStartingWager
  }
}`;

const Home: NextPage = () =>  {

  const [result] = useQuery({ query: exampleQuery });
  const { data, fetching, error } = result;

    console.log('Data:', data, 'Fetching:', fetching, 'Error:', error);


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
        <Dashboard coinFlips={result.data?.startedCoinFlips} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
