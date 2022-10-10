import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { utils } from 'ethers';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import React from 'react';
import { useDebounce } from 'use-debounce';
import { useAccount, useNetwork, usePrepareSendTransaction, useSendTransaction } from 'wagmi';

const SendTransactionDemo: NextPageWithLayout = () => {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const [to, setTo] = React.useState('');
  const [debouncedTo] = useDebounce(to, 500);

  const [amount, setAmount] = React.useState('');
  const [debouncedValue] = useDebounce(amount, 500);

  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedValue ? utils.parseEther(debouncedValue) : undefined,
    },
  });

  const { sendTransaction } = useSendTransaction(config);

  return (
    <div className='m-8 p-8 space-y-4 w-96 text-center border rounded-xl'>
      <Input onChange={(e) => setTo(e.target.value)} value={to} placeholder='0x41b8...082B' />
      <Input onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='0.01' />
      <Button
        onClick={() => {
          console.log('sendTransaction');
          console.log('to:', to);
          console.log('amount:', amount);
          sendTransaction?.();
        }}
        disabled={!sendTransaction || !to || !amount}
        className='w-32 h-9'
      >
        Send
      </Button>
      <div>from:{address}</div>
      <div>to:0x41b8CB5D1037a3A88cd308022Ff01db58a4e082B</div>
      <div>{JSON.stringify(chain)}</div>
    </div>
  );
};

SendTransactionDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SendTransactionDemo;
