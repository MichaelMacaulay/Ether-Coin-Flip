import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import etherCoinFlipABI from '../utils/etherCoinFlipABI.json';
import { BigNumber } from 'ethers';

type EndCoinFlipProps = {
    coinFlipID: number;
    etherWager: string;
};

export default function EndCoinFlip({ coinFlipID, etherWager }: EndCoinFlipProps) {

    const etherWagerAsBigNumber = BigNumber.from(etherWager);

    const { config } = usePrepareContractWrite({
        address: '0x345e39cd71f2b2F39d6dc0ce40381e420c38f845',
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
