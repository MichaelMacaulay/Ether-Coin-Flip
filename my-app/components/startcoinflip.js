import * as React from 'react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

export function StartCoinFlip() {
    const { config } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: [
    {
        name: 'newCoinFlip',
        type: 'function',
        stateMutability: 'payable',
        inputs: [],
        outputs: [],
    },
    ],
    functionName: 'newCoinFlip',
})
const { data, write } = useContractWrite(config)

const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
})

    return (
    <div>
    <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? 'Flipping your coin...' : 'Start Coin Flip'}
    </button>
        {isSuccess && (
    <div>
        Successfully flipped your coin!
    <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>Start coin flip</a>
        </div>
        </div>
    )}
    </div>
    );
}

export default StartCoinFlip;