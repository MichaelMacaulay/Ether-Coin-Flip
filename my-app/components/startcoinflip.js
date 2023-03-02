import * as React from 'react';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi';

export function StartCoinFlip() {
  const { config } = usePrepareContractWrite({
    address: '0x575fE957730F8Db4635A405daEad4B89544A5907',
    abi: [
      {
        name: 'newCoinFlip',
        type: 'function',
        stateMutability: 'payable',
        inputs: [{ type: 'uint256', name: 'amount' }]
      },
    ],
    functionName: 'newCoinFlip',
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const [amount, setAmount] = React.useState('');

  const handleClick = () => {
    const valueInWei = Number(amount) * 10 ** 18; // Convert to wei
    write({ amount: valueInWei });
  };

  return (
    <div>
      <h1>Start a coin flip</h1>
      <button onClick={handleClick}>Send flip</button>
      <input type="number" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />

      {isSuccess && (
        <div>
          Successfully flipped your coin!
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>View transaction on Etherscan</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartCoinFlip;
