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
        address: '0x93CecC7C4Bb9F40106CE5CE5748E9e9b1b4DdED9',
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
