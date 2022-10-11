import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
// import { InjectedConnector } from 'wagmi/connectors/injected';

import { useInitConnect } from 'hooks/useInitConnect';
import { useAccount, useConnect, useNetwork } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from 'components';

const WagmiDemo: NextPageWithLayout = () => {
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  const { address, isConnected } = useAccount();

  const { chain } = useNetwork();
  // const { mutate } = useMutation(connectAsync);
  // useEffect(() => {
  //   console.log('detect connect');
  //   console.log(window.ethereum?._state?.isUnlocked);
  //   if (window.ethereum?._state?.isUnlocked && !isConnected) {
  //     console.log('start connect');
  //     mutate({});
  //   }
  // }, [isConnected, mutate]);

  // const [isConnected, address] = useInitConnect();

  return (
    <div className='p-8'>
      <Button
        onClick={() => {
          connect();
        }}
      >
        Connect Wallet
      </Button>
      {/* {isConnected ? <p>Connected to {ensName ?? address}</p> : undefined} */}
      {/* {isConnected ? <p>chain:{JSON.stringify(chain)}</p> : undefined} */}
      {/* <hr /> */}
      {/* {isConnected ? <p>provider:{JSON.stringify(provider)}</p> : undefined} */}
      {/* <p>activeConnector:{activeConnector ? JSON.stringify(activeConnector.id) : ''}</p> */}
      {/* <p>provider:{JSON.stringify(provider)}</p> */}
      <p>chain.id:{chain?.id}</p>
      <p>address:{address}</p>
      <p>isConnected:{isConnected ? 'yes' : 'no'}</p>
    </div>
  );
};

WagmiDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WagmiDemo;
