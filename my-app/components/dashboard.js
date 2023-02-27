import { useQuery } from 'urql';
import { createClient, Provider } from 'urql';
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'

const client = createClient({
    url: 'graphclient://dummy',
    requestPolicy: 'cache-and-network',
    exchanges: [graphExchange(GraphClient)],
});

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
    }`;

const Dashboard = () => {
    const [result, reexecuteQuery] = useQuery({
        query,
    });
    const { data, fetching, error } = result;

    return (
        <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        {fetching && <div className="dashboard-loading">Loading...</div>}
        {error && <div className="dashboard-error">{error.message}</div>}
        {data && (
            <div className="dashboard">
            <div className="coin-flips">
                <h2>Finished Coin Flips</h2>
                <div className="coin-flips-list">
                {data.finishedCoinFlips.map((coinFlip) => (
                    <div key={coinFlip.id} className="coin-flip">
                    <p>ID: {coinFlip.id}</p>
                    <p>Winner: {coinFlip.winner}</p>
                    <p>Block Number: {coinFlip.blockNumber}</p>
                    <p>Block Timestamp: {coinFlip.blockTimestamp}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="coin-flips">
                <h2>Started Coin Flips</h2>
                <div className="coin-flips-list">
                {data.startedCoinfFlips.map((coinFlip) => (
                    <div key={coinFlip.id} className="coin-flip">
                    <p>ID: {coinFlip.id}</p>
                    <p>Coin Flip ID: {coinFlip.theCoinFlipID}</p>
                    <p>Block Number: {coinFlip.blockNumber}</p>
                    <p>Block Timestamp: {coinFlip.blockTimestamp}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        )}
        </div>
    );
    };

export default Dashboard;
