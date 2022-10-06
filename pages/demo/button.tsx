import { NextPage } from 'next';
import { PanButton } from 'components/pancake';
import { Button, SimpleButton } from 'components';
import { PanIconButton, PanSvgrButton } from 'components/pancake/button';
import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import ArrowExit from 'public/images/pancake/arrowExit.svg';
import ArrowUpRight from 'public/images/pancake/arrowUpRight.svg';
import BnbSvg from 'public/images/pancake/bnb.svg';
import PancakeSvg from 'public/images/pancake/pancake.svg';

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
        <div className='space-x-4 space-y-4'>
          <span>Base Button:</span>
          <SimpleButton className='text-emerald-400 border-emerald-400'>VOTE NOW</SimpleButton>
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
        <hr />

        <div className='space-x-4 space-y-4'>
          <span>Icon Button:</span>

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
        <hr />

        <div className='space-x-4 space-y-4'>
          <span>Svgr Button:</span>
          <PanSvgrButton>No Svg</PanSvgrButton>
          <PanSvgrButton className='align-baseline' leftIcon={<BnbSvg className='w-6 h-6' />}>
            BNB
          </PanSvgrButton>
          <PanSvgrButton rightIcon={<PancakeSvg className='w-6 h-6' />}>Pancake</PanSvgrButton>
          <PanSvgrButton
            leftIcon={<BnbSvg className='w-6 h-6' />}
            rightIcon={<PancakeSvg className='w-6 h-6' />}
          >
            BNB & Pancake
          </PanSvgrButton>
          <PanSvgrButton
            leftIcon={<ArrowUpRight className='w-6 h-6 text-cyan-500' />}
          ></PanSvgrButton>

          <PanSvgrButton
            ring
            hover='hover:opacity-70'
            leftIcon={<ArrowUpRight className='w-6 h-6' />}
          ></PanSvgrButton>
        </div>
        <hr />

        <div className='space-x-4 space-y-4'>
          <span>Link Button:</span>
          <PanIconButton
            className='text-cyan-500/80'
            ring='ring-0'
            hover='hover:opacity-70 hover:underline'
          >
            Convert ERC-20 to BEP-20
          </PanIconButton>
          <PanIconButton
            className='text-cyan-500/80'
            ring='ring-0'
            hover='hover:opacity-70 hover:underline'
            rightSrc='/images/pancake/arrowUpRight.svg'
          >
            Convert ERC-20 to BEP-20
          </PanIconButton>
          <PanIconButton leftSrc='/images/pancake/arrowUpRight.svg'></PanIconButton>

          <PanIconButton
            className='text-black font-semibold	text-xl	'
            ring='ring-0'
            hover
            leftSrc='/images/pancake/pancakeSwapMobile.svg'
          >
            PancakeSwap
          </PanIconButton>
        </div>
        <hr />
      </div>
    </Layout>
  );
};

ButtonDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ButtonDemo;
