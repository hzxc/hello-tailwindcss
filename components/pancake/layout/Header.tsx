import { Menu, MenuItem, SubMenu } from 'components/pancake';
import { PanButton, PanIconButton, PanSvgrButton } from '../button';
import ArrowExitSvg from 'public/images/pancake/arrowExit.svg';
import SettingSvg from '/public/images/pancake/setting.svg';
import LanguageSvg from 'public/images/pancake/language.svg';
import { ConnectWalletModal } from '../modal/ConnectWalletModal';
import { useToggle } from 'hooks';
import { SvgButton } from 'components/SvgButton';
import { useContractRead, useNetwork } from 'wagmi';
import { SwitchNetworkModal } from '../modal/SwitchNetworkModal';
import { useInitConnect } from 'hooks/useInitConnect';
import { MenuButton, MenuButtonItem } from 'components/menu-button';
import { IconButton } from 'components';
import ArrowDownSvg from 'public/images/pancake/arrowDown.svg';
import WalletSvg from 'public/images/pancake/wallet.svg';
import { PancakeRouterABI, IBEP20ABI } from 'abi/bsc';
import { BigNumber, utils } from 'ethers';
import { useEffect } from 'react';
import { erc20ABI } from 'wagmi';

export const Header: React.FC = () => {
  const { visible, close, open } = useToggle(false);
  const { chain } = useNetwork();

  const [isConnected, address] = useInitConnect();

  // const { data, isError, isLoading } = useContractRead({
  //   // address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  //   address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  //   abi: [
  //     {
  //       inputs: [],
  //       name: 'decimals',
  //       outputs: [
  //         {
  //           internalType: 'uint8',
  //           name: '',
  //           type: 'uint8',
  //         },
  //       ],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //   ],
  //   functionName: 'decimals',
  //   args: [],
  // });

  // const { data, isError, isLoading, isSuccess } = useContractRead({
  //   addressOrName: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  //   contractInterface: PancakeRouterABI,
  //   functionName: 'getAmountsOut',
  //   chainId: 56,
  //   args: [
  //     utils.parseEther('1'),
  //     ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'],
  //   ],
  // });

  const { data, isError, isLoading, isSuccess } = useContractRead<
    typeof PancakeRouterABI,
    'getAmountsOut'
  >({
    address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    abi: PancakeRouterABI,
    functionName: 'getAmountsOut',
    chainId: 56,
    args: [
      utils.parseEther('1'),
      ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'],
    ],
  });

  // const { data, isError, isLoading, isSuccess } = useContractRead({
  //   address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  //   abi: IBEP20ABI,
  //   functionName: 'symbol',
  //   chainId: 56,
  // });

  useEffect(() => {
    const wei = utils.parseEther('1');
    // console.log('wei:', wei.toString());

    console.log('data', data);
  }, [data]);

  return (
    <>
      <ConnectWalletModal visible={visible} close={close} />
      <SwitchNetworkModal visible={chain ? chain.id !== 56 : false} close={() => {}} />
      <div className='flex h-14 items-center justify-between border-b px-4 z-40'>
        <div className='flex items-center justify-start gap-3'>
          <PanIconButton
            iconWidth='28px'
            iconHeight='28px'
            className='text-black font-semibold	text-xl'
            ring='ring-0'
            leftSrc='/images/pancake/pancakeSwapMobile.svg'
            hover
            rounded
          >
            PancakeSwap
          </PanIconButton>
          <Menu mode='horizontal' defaultIndex={'0-0'}>
            <SubMenu subTitle='Trade'>
              <MenuItem>Swap</MenuItem>
              <MenuItem>Limit</MenuItem>
              <MenuItem>Liquidity</MenuItem>
              <MenuItem>
                <PanSvgrButton
                  className='w-full my-[-2px]'
                  ring
                  hover
                  rounded
                  rightIcon={<ArrowExitSvg className='w-5 h-5 text-violet-900/80' />}
                >
                  Perpetual
                </PanSvgrButton>
              </MenuItem>
              <MenuItem>
                <PanSvgrButton
                  className='w-full my-[-2px]'
                  ring
                  hover
                  rounded
                  rightIcon={<ArrowExitSvg className='w-5 h-5 text-violet-900/80' />}
                >
                  Bridge
                </PanSvgrButton>
              </MenuItem>
            </SubMenu>
            <SubMenu subTitle='Earn'>
              <MenuItem>Farms</MenuItem>
              <MenuItem>Pools</MenuItem>
            </SubMenu>
            <SubMenu subTitle='Win'>
              <MenuItem>Trading Competition</MenuItem>
              <MenuItem>Prediction (BETA)</MenuItem>
              <MenuItem>Lottery</MenuItem>
              <MenuItem>Pottery (BETA)</MenuItem>
            </SubMenu>
            <SubMenu subTitle='NFT'>
              <MenuItem>Overview</MenuItem>
              <MenuItem>Collections</MenuItem>
              <MenuItem>Activity</MenuItem>
            </SubMenu>
            <SubMenu
              subTitle={
                <PanIconButton
                  iconWidth='16px'
                  iconHeight='16px'
                  ring='ring-0'
                  rightSrc='/images/pancake/dot.svg'
                >
                  ?????????
                </PanIconButton>
              }
            >
              <MenuItem>Info</MenuItem>
              <MenuItem>Info</MenuItem>
              <MenuItem className='border-b'>
                <div className='flex items-center justify-between'>
                  <p>Voting</p>
                  <button className='px-2 py-px text-sm font-normal rounded-full border-2 text-emerald-400 border-emerald-400 my-[-5px]'>
                    VOTE NOW
                  </button>
                </div>
              </MenuItem>
              <MenuItem className='border-b'>Leaderboard</MenuItem>
              <MenuItem>
                <PanSvgrButton
                  className='w-full my-[-2px]'
                  ring
                  hover
                  rounded
                  rightIcon={<ArrowExitSvg className='w-5 h-5 text-violet-900/80' />}
                >
                  Blog
                </PanSvgrButton>
              </MenuItem>
              <MenuItem>
                <PanSvgrButton
                  className='w-full my-[-2px]'
                  ring
                  hover
                  rounded
                  rightIcon={<ArrowExitSvg className='w-5 h-5 text-violet-900/80' />}
                >
                  Doc
                </PanSvgrButton>
              </MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div className='flex items-center gap-4 justify-start'>
          <PanIconButton
            className='font-semibold'
            ring='ring-0'
            hover='[&>div>span:first-child]:hover:scale-125 [&>div>span:first-child]:transition-transform'
            leftSrc='/images/pancake/pancake.svg'
          >
            <span></span>
          </PanIconButton>
          <SvgButton>
            <LanguageSvg className='w-6 h-6' />
          </SvgButton>
          <SvgButton>
            <SettingSvg className='w-6 h-6' />
          </SvgButton>
          <MenuButton
            pos='left-[-38px]'
            title='Select a Network'
            navBtn={
              <IconButton
                className='my-3'
                tailClass='panMb'
                leftSize='32px'
                leftSrc='/images/pancake/56.png'
                rightIcon={<ArrowDownSvg />}
                customStyle={{ boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 0px inset' }}
              >
                BNB Smart Chain
              </IconButton>
            }
          >
            <MenuButtonItem>
              <IconButton className='my-[-2px]' gap='gap-3' leftSrc='/images/pancake/56.png'>
                BNB Smart Chain
              </IconButton>
            </MenuButtonItem>
            <MenuButtonItem>
              <IconButton className='my-[-2px]' gap='gap-3' leftSrc='/images/pancake/1.png'>
                Ethereum
              </IconButton>
            </MenuButtonItem>
          </MenuButton>

          {isConnected && address ? (
            <MenuButton
              pos='right-0'
              navBtn={
                <IconButton
                  className='my-3 [&>div>span:first-child]:rounded-full [&>div>span:first-child]:outline [&>div>span:first-child]:outline-[#1fc7d4]'
                  tailClass='panMb'
                  leftIcon={<WalletSvg className='text-[#1fc7d4]' />}
                  rightIcon={<ArrowDownSvg />}
                  customStyle={{ boxShadow: 'rgb(0 0 0 / 10%) 0px -2px 0px inset' }}
                >
                  {'0x...'.concat(address.slice(-4))}
                </IconButton>
              }
            >
              <MenuButtonItem>
                <IconButton className='my-[-2px]' gap='gap-3' leftSrc='/images/pancake/56.png'>
                  BNB Smart Chain
                </IconButton>
              </MenuButtonItem>
              <MenuButtonItem>
                <IconButton className='my-[-2px]' gap='gap-3' leftSrc='/images/pancake/1.png'>
                  Ethereum
                </IconButton>
              </MenuButtonItem>
            </MenuButton>
          ) : (
            <PanButton onClick={open}>Connect Wallet</PanButton>
          )}
          {/* <span>{chain?.id}</span> */}
        </div>
      </div>
    </>
  );
};
