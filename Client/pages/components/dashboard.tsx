import { ethers } from 'ethers';
import EndCoinFlip from "./endCoinFlip";

type CoinFlip = {
    id: string;
    theCoinFlipID: number;
    theBetStarter: string;
    theStartingWager: string;
    isFinished: boolean;
};

type DashboardProps = {
    coinFlips: CoinFlip[] | undefined;
};

export default function Dashboard({ coinFlips }: DashboardProps) {
    const activeCoinFlips = coinFlips?.filter(coinFlip => !coinFlip.isFinished);

    return (
    <div>
        <h1>Dashboard</h1>
        <div>
        {activeCoinFlips && activeCoinFlips.length > 0 ? (
            <ul>
            {activeCoinFlips.map((coinFlip) => {
                const etherWager = ethers.utils.formatEther(coinFlip.theStartingWager);
                return (
                <li key={coinFlip.id}>
                    Coin flip ID: {coinFlip.theCoinFlipID}, Coin flip starter: {coinFlip.theBetStarter}, Wager: {etherWager} ether
                    <br />
                    <EndCoinFlip coinFlipID={coinFlip.theCoinFlipID} />
                </li>
                );
            })}
            </ul>
        ) : (
            <p>No active coin flips found.</p>
        )}
        </div>
    </div>
    );
}
