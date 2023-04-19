import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function EndCoinFlip({ coinFlipID }) {
    const [etherInput, setEtherInput] = useState('0');

    const { config } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: etherCoinFlipABI,
    functionName: 'endCoinFlip',
    args: [coinFlipID]
});

const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return (
        <div>
                <button disabled={!write} onClick={() => write?.()}>End Coin Flip</button>
        </div>
    );
}
