import { ethers } from 'ethers';
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
    return (
    <div>
        <h1>Dashboard</h1>
        <div>
        {coinFlips ? (
            <ul>
            {coinFlips.map((coinFlip) => {
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
            <p>No coin flips found.</p>
        )}
        </div>
    </div>
    );
}
