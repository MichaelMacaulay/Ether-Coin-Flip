import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function StartCoinFlipButton() {

const [etherInput, setEtherInput] = useState('0');

const { config } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: etherCoinFlipABI,
    functionName: 'newCoinFlip',
    overrides: {value: ethers.utils.parseEther(etherInput.toString())}
});

const { data, isLoading, isSuccess, write } = useContractWrite(config);

console.log(etherInput);

    return(
        <div>
            <input type="number" placeholder='ETH to wager' onChange={e => setEtherInput(e.target.value)} />
            <button disabled={!write} onClick={() => write?.()} value={etherInput}>
        Feed
    </button>
        </div>
    )

}


