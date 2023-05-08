import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function EndCoinFlip({ coinFlipID }) {
    const [etherInput, setEtherInput] = useState('0');

    const { config } = usePrepareContractWrite({
    address: '0x7D091888582c79F9296a04e996D390bF2eE98acB',
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
