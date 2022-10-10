import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { useAccount, useEnsName, useConnect, useDisconnect, useEnsAvatar, useNetwork } from 'wagmi';
import { Button } from 'components/Button';

const ConnectWallet: NextPageWithLayout = () => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { address, connector, isConnected } = useAccount();
  // const { data: ensAvatar } = useEnsAvatar({ addressOrName: 'awkweb.eth' });
  // const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  if (isConnected) {
    return (
      <div className='p-8 space-x-4 space-y-4'>
        {/* <Image src={ensAvatar ? ensAvatar : ''} width='48px' height={'48px'} alt='ENS Avatar' /> */}
        {/* <div>{ensName ? `${ensName} (${address})` : address}</div> */}
        <div>Connected to {connector?.name}</div>
        <Button
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </Button>
        <div className=''>{address}</div>
        <div>{JSON.stringify(chain)}</div>
        {/* <div>{ensAvatar}</div>
        <div>{ensName}</div> */}
      </div>
    );
  }

  return (
    <div className='p-8 space-x-2'>
      {connectors.map((connector) => (
        <Button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
        </Button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
};

ConnectWallet.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ConnectWallet;
