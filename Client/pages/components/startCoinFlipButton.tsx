import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function StartCoinFlipButton() {
const [etherInput, setEtherInput] = useState('0');

const value = isNaN(parseFloat(etherInput)) ? undefined : ethers.utils.parseEther(etherInput.toString());

const { config } = usePrepareContractWrite({
    address: '0x7D091888582c79F9296a04e996D390bF2eE98acB',
    abi: etherCoinFlipABI,
    functionName: 'newCoinFlip',
    overrides: { value }
});

const { data, isLoading, isSuccess, write } = useContractWrite(config);

return (
    <div>
        <input type="number" step="any" placeholder='ETH to wager' onChange={e => {
        const value = e.target.value;
        if (!isNaN(parseFloat(value))) {
            setEtherInput(value);
        }
    }} />
    <button disabled={!write} onClick={() => write?.()} value={etherInput}>
        Flip coin
    </button>
    </div>
)
}