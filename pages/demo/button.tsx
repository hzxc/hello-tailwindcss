import { PanButton } from 'components/pancake';
import { Button, IconButton, SimpleButton } from 'components';
import { PanIconButton, PanSvgrButton } from 'components/pancake/button';
import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import ArrowUpRight from 'public/images/pancake/arrowUpRight.svg';
import BnbSvg from 'public/images/pancake/bnb.svg';
import PancakeSvg from 'public/images/pancake/pancake.svg';
import PanExDown from 'public/images/pancake/panExDown.svg';
import BinanceWalletSvg from 'public/images/pancake/binanceWallet.svg';

import PanExUpDown from 'public/images/pancake/PanExUpDown.svg';
import { SvgrButton } from 'components/SvgrButton';
import ArrowDownSvg from 'public/images/pancake/arrowDown.svg';
import { MenuButton } from 'components/menu-button';

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
          <span>Pan Icon Button:</span>

          <PanIconButton leftSrc='/images/pancake/bnb.svg'>BNB</PanIconButton>
          <IconButton leftSrc='/images/pancake/bnb.svg' col>
            BNB
          </IconButton>
          <IconButton leftSrc='/images/pancake/bnb.svg'>BNB</IconButton>
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
          <SvgrButton
            leftIcon={<ArrowUpRight className='border w-6 h-6 text-cyan-500' />}
          ></SvgrButton>

          <SvgrButton
            className='hover:opacity-70 border'
            leftIcon={<ArrowUpRight className='w-6 h-6' />}
          ></SvgrButton>
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

          <PanSvgrButton
            className='text-cyan-500/80'
            ring
            hover='hover:opacity-70 hover:underline'
            rightIcon={<ArrowUpRight className='w-6 h-6 text-cyan-500' />}
          >
            Convert ERC-20 to BEP-20
          </PanSvgrButton>

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
        <div className='space-x-4'>
          <span>Icon Button:</span>
          <PanIconButton
            className='text-cyan-500'
            ring='ring-0'
            hover
            leftSrc='/images/pancake/panExDown.svg'
          ></PanIconButton>
          <PanIconButton
            ring='ring-0'
            hover
            leftSrc='/images/pancake/panExUpDown.svg'
          ></PanIconButton>

          <PanIconButton
            className='active:translate-y-px text-cyan-500'
            hover='hover:opacity-70'
            ring
            rounded
            rightSrc='/images/pancake/arrowDown.svg'
          >
            CAKE
          </PanIconButton>

          <IconButton>Hover Button</IconButton>
          <PanIconButton leftSrc='/images/pancake/bnb.svg'>BNB</PanIconButton>
          <IconButton
            className='hover:bg-gray-100 hover:opacity-80 p-1 ring-1 ring-gray-100 rounded-xl active:translate-y-px'
            leftSrc='/images/pancake/bnb.svg'
          >
            BNB
          </IconButton>
          <IconButton leftSrc='/images/pancake/bnb.svg'></IconButton>
          <IconButton
            className='ring-1 p-1 rounded'
            leftSrc='https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'
            rightSrc='/images/pancake/bnb.svg'
          >
            BNB
          </IconButton>

          <IconButton
            className='ring-1 p-1 rounded'
            leftSrc='https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'
            rightSrc='/images/pancake/bnb.svg'
          >
            ETH
          </IconButton>

          <IconButton
            className='ring-1 p-1 rounded'
            leftIcon={<PanExDown className='text-purple-500' />}
            rightIcon={<BinanceWalletSvg />}
          >
            BTC
          </IconButton>
          <IconButton
            tailClass='panEx'
            leftIcon={<PanExDown />}
            rightIcon={<PanExUpDown className='text-white' />}
            leftSize='20px'
            rightSize='20px'
          ></IconButton>

          <IconButton
            className='hover:opacity-80 active:translate-y-px'
            leftIcon={<BinanceWalletSvg />}
            rightIcon={<BinanceWalletSvg />}
          ></IconButton>

          <IconButton
            className='font-kanit h-8 text-[#280d5f] rounded-xl font-semibold hover:opacity-75 bg-[#eff4f5]'
            leftSrc='/images/pancake/56.png'
            rightIcon={<ArrowDownSvg />}
          >
            BNB Smart Chain
          </IconButton>

          <IconButton
            tailClass='panMb'
            leftSize='32px'
            leftSrc='/images/pancake/56.png'
            rightIcon={<ArrowDownSvg />}
            customStyle={{ boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 0px inset' }}
          >
            BNB Smart Chain
          </IconButton>
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
