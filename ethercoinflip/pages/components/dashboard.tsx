import EndCoinFlip from "./endCoinFlip";
    
    type CoinFlip = {
    coinFlipID: number;
    value: number;
    flippedBy: string;
    txHash: string;
    };

    type DashboardProps = {
    coinFlips: CoinFlip[] | undefined;
    };

    export default function Dashboard({ coinFlips }: DashboardProps) {
    return (
        <div>
        <h1>Dashboard</h1>
        <div>
            {coinFlips ? (
            <ul>
                {coinFlips.map((coinFlip) => (
                <li key={coinFlip.txHash}>
                    Coin flip value: {coinFlip.value}, flipped by: {coinFlip.flippedBy}
                    <br />
                    The coin flip ID is {coinFlip.coinFlipID}
                    Etherscan transaction: <a href={`https://etherscan.io/tx/${coinFlip.txHash}`} target="_blank" rel="noopener noreferrer">{coinFlip.txHash}</a>
                    <EndCoinFlip coinFlipID={coinFlip.coinFlipID}/> 
                </li>
                ))}
            </ul>
            ) : (
            <p>No coin flips found.</p>
            )}
        </div>
        </div>
    );
    }
