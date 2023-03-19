import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Dashboard from './components/dashboard';

const Home: NextPage = () => {
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
        <Dashboard />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
