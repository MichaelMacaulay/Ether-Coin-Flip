import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useQuery } from 'urql';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const query = `{
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

export default function Home() {
  // Common pattern with subgraph devs: reexecuteQuery
    const [result, reexecuteQuery] = useQuery({
    query: query
  });
  const { data } = result;

  console.log("render", result);

  // Only runs first time when component is mounted
  // useEffect(() => {
  //   console.log("setting interval");
  //   const timer = setInterval(() => {
  //     console.log("do query");
  //     reexecuteQuery();
  //     // setSeconds(seconds + 1);
  //   }, 12000);
  //              // clearing interval
  //   return () => { clearInterval(timer); console.log("clear interval") }
  // });

  // Bad example
  // setInterval(() => { console.log("do query"); reexecuteQuery() }, 1000);

  return (
    <div>
      {result.fetching ? (
        <p>Loading...</p>
      ) : result.error ? (
        <p>Error: {result.error.message}</p>
      ) : (
        <div>
          <h2>Finished Coin Flips</h2>
          {data.finishedCoinFlips.map(coinFlip => (
            <div key={coinFlip.id}>
              <p>ID: {coinFlip.id}</p>
              <p>Winner: {coinFlip.winner}</p>
              <p>Block Number: {coinFlip.blockNumber}</p>
              <p>Block Timestamp: {coinFlip.blockTimestamp}</p>
            </div>
          ))}
          <h2>Started Coin Flips</h2>
          {data.startedCoinfFlips.map(coinFlip => (
            <div key={coinFlip.id}>
              <p>ID: {coinFlip.id}</p>
              <p>Coin Flip ID: {coinFlip.theCoinFlipID}</p>
              <p>Block Number: {coinFlip.blockNumber}</p>
              <p>Block Timestamp: {coinFlip.blockTimestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
