import { NextPage } from 'next';
import { PanButton } from 'components/pancake';
import { Button, SimpleButton } from 'components';
import { PanIconButton } from 'components/pancake/button';
import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const ButtonDemo: NextPageWithLayout = () => {
  const changeTheme = (event: any) => {
    const clsList = document.documentElement.classList;
    if (clsList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <Layout>
      <div className='p-4 space-y-4 dark:bg-slate-800'>
        <div className='space-x-4'>
          <Button>Base Button</Button>
          <PanButton>Connect Wallet</PanButton>
          <PanButton className='w-72 h-12 rounded-2xl'>Connect Wallet</PanButton>
          <PanButton className='py-0 px-2'>scan risk</PanButton>
          <PanButton
            onClick={(e) => {
              changeTheme(e);
            }}
          >
            Change Theme
          </PanButton>
        </div>
        <div className='space-x-4'>
          <PanIconButton leftSrc='/images/pancake/bnb.svg'>BNB</PanIconButton>
          <PanIconButton rightSrc='https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png'>
            BUSD
          </PanIconButton>
          <PanIconButton
            leftSrc='https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'
            rightSrc='/images/pancake/bnb.svg'
          >
            BNB
          </PanIconButton>
          <PanIconButton>Base</PanIconButton>
          <PanIconButton rightSrc='/images/pancake/bnb.svg' />
          <PanIconButton leftSrc='/images/pancake/bnb.svg' />

          <PanIconButton ring='ring-0' rightSrc='/images/pancake/bnb.svg' />
          <PanIconButton ring='ring-0' hover='hover:opacity-70' leftSrc='/images/pancake/bnb.svg' />
        </div>
        <div className='space-x-4'>
          <PanIconButton
            className='text-cyan-500'
            ring='ring-0'
            hover='hover:opacity-70 hover:underline'
          >
            Convert ERC-20 to BEP-20
          </PanIconButton>
          <PanIconButton
            className='text-cyan-500'
            ring='ring-0'
            hover='hover:opacity-70 hover:underline'
            rightSrc='/images/pancake/arrowUpRight.svg'
          >
            Convert ERC-20 to BEP-20
          </PanIconButton>
          <PanIconButton
            className='text-black font-semibold	text-xl	'
            ring='ring-0'
            hover
            leftSrc='/images/pancake/pancakeSwapMobile.svg'
          >
            PancakeSwap
          </PanIconButton>
          <SimpleButton className='text-emerald-400 border-emerald-400'>VOTE NOW</SimpleButton>
        </div>
      </div>
    </Layout>
  );
};

ButtonDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ButtonDemo;
