import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { ethers, BigNumber } from 'ethers';

type EndCoinFlipProps = {
    coinFlipID: number;
    etherWager: string;
};

export default function EndCoinFlip({ coinFlipID, etherWager }: EndCoinFlipProps) {


    const etherWagerAsBigNumber = BigNumber.from(etherWager);
    console.log('Sending ether value:', etherWagerAsBigNumber.toString());

    const { config } = usePrepareContractWrite({
        address: '0x077AABB3592F723E54ca0c8C0968A0C1e4DaD85C',
        abi: etherCoinFlipABI,
        functionName: 'endCoinFlip',
        args: [coinFlipID],
        overrides: { value: etherWagerAsBigNumber }
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    const handleClick = () => {
        write?.();
    };

    return (
        <div>
            <button disabled={!write || isLoading} onClick={handleClick}>End Coin Flip</button>
        </div>
    );
}
