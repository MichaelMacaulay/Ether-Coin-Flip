import { configureChains, createClient, WagmiConfig, usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers } from 'ethers';

export default function StartCoinFlipButton() {

const { config } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: etherCoinFlipABI,
    functionName: 'newCoinFlip',
    overrides: {value: ethers.utils.parseEther('0.01')}
});

const { data, isLoading, isSuccess, write } = useContractWrite(config)

console.log(data, isLoading, isSuccess, write);

    return(
        <div>
            <input type="text" />
                <button disabled={!write} onClick={() => write?.()}>
        Feed
    </button>
        </div>
    )

}


