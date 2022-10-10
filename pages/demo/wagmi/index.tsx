import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { useAccount, useEnsName, useConnect, useNetwork, useProvider } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from 'components/Button';

const WagmiDemo: NextPageWithLayout = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { chains, chain } = useNetwork();
  const provider = useProvider();

  return (
    <div className='p-8'>
      <Button onClick={() => connect()}>Connect Wallet</Button>
      {isConnected ? <p>Connected to {ensName ?? address}</p> : undefined}
      {isConnected ? <p>chain:{JSON.stringify(chain)}</p> : undefined}
      {/* {isConnected ? <p>chains:{JSON.stringify(provider)}</p> : undefined} */}
    </div>
  );
};

WagmiDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WagmiDemo;
