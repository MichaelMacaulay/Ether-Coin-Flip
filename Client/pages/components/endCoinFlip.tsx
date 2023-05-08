import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function EndCoinFlip({ coinFlipID }) {
    const [etherInput, setEtherInput] = useState('0');

    const { config } = usePrepareContractWrite({
    address: '0x077AABB3592F723E54ca0c8C0968A0C1e4DaD85C',
    abi: etherCoinFlipABI,
    functionName: 'endCoinFlip',
    args: [coinFlipID]
});

const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return (
        <div>
                <button disabled={!write || isLoading} onClick={() => write?.()}>End Coin Flip</button>
        </div>
    );
}
