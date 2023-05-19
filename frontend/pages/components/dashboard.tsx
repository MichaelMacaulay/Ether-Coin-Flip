import { ethers } from "ethers";
import EndCoinFlip from "./endCoinFlip";

type StartedCoinFlip = {
  id: string;
  theCoinFlipID: number;
  theBetStarter: string;
  theStartingWager: string;
};

type FinishedCoinFlip = {
  id: string;
  theCoinFlipID: number;
  winner: string;
  loser: string;
};

type DashboardProps = {
  activeCoinFlips: StartedCoinFlip[] | undefined;
  finishedCoinFlips: FinishedCoinFlip[] | undefined;
};

export default function Dashboard({
  activeCoinFlips,
  finishedCoinFlips,
}: DashboardProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {activeCoinFlips && activeCoinFlips.length > 0 ? (
          <ul>
            {activeCoinFlips.map((coinFlip) => {
              const etherWager = ethers.utils.formatEther(
                coinFlip.theStartingWager
              );
              return (
                <li key={coinFlip.id}>
                  Active coin flip ID: {coinFlip.theCoinFlipID}, Coin flip
                  starter: {coinFlip.theBetStarter}, Wager: {etherWager} ether.
                  <br />
                  <EndCoinFlip
                    coinFlipID={coinFlip.theCoinFlipID}
                    etherWager={coinFlip.theStartingWager}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No active coin flips found.</p>
        )}
      </div>
      <div>
        <h2>Finished Coin Flips</h2>
        {finishedCoinFlips && finishedCoinFlips.length > 0 ? (
          <ul>
            {finishedCoinFlips.map((coinFlip) => (
              <li key={coinFlip.id}>
                Finished coin flip ID: {coinFlip.theCoinFlipID}, Winner:{" "}
                {coinFlip.winner}, Loser: {coinFlip.loser}.
              </li>
            ))}
          </ul>
        ) : (
          <p>No finished coin flips found.</p>
        )}
      </div>
    </div>
  );
}
