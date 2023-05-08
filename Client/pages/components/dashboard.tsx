import EndCoinFlip from "./endCoinFlip";

    type CoinFlip = {
    id: string;
    theCoinFlipID: number;
    theBetStarter: string;
    theStartingWager: string;
    };


    type DashboardProps = {
    coinFlips: CoinFlip[] | undefined;
    };


    export default function Dashboard({ coinFlips }: DashboardProps) {
            console.log('coinFlips:', coinFlips);
    return (
        <div>
        <h1>Dashboard</h1>
        <div>
            {coinFlips ? (
            <ul>
                {coinFlips.map((coinFlip) => (
            <li key={coinFlip.id}>
                Coin flip ID: {coinFlip.theCoinFlipID}, block number: {coinFlip.theBetStarter}, block timestamp: {coinFlip.theStartingWager}
                <br />
                <EndCoinFlip coinFlipID={coinFlip.theCoinFlipID} />
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
