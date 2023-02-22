import { Inter } from '@next/font/google';
import { useQuery } from 'urql';
import Button from '../components/buttons.js';

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

  return (
    <div>
          <div>
      <Button text="Click me" handleClick={() => alert('Button clicked!')} />
    </div>
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
