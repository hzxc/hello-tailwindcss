import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { useAccount, useEnsName, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from 'components/Button';

const ConnectWallet: NextPageWithLayout = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div className='p-8'>
      <Button onClick={() => connect()}>Connect Wallet</Button>
      {isConnected ? <p>Connected to {ensName ?? address}</p> : undefined}
    </div>
  );
};

ConnectWallet.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ConnectWallet;
