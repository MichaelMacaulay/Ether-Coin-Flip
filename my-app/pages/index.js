import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { gql, useMutation, useQuery } from 'urql';

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

  const result = useQuery({ query });

  console.log(result);

  return (
    <>
      
    </>
  )
}
