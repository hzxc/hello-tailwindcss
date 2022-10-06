import { Menu, MenuItem, SubMenu } from 'components/pancake';
import { PanButton, PanIconButton, PanSvgrButton } from '../button';
import ArrowExitSvg from 'public/images/pancake/arrowExit.svg';
import SettingSvg from '/public/images/pancake/setting.svg';
import LanguageSvg from 'public/images/pancake/language.svg';

export const Header: React.FC = () => {
  return (
    <div className='flex shrink-0 grow-0 h-14 items-center justify-between border-b px-4'>
      <div className='flex items-center justify-start py-2 gap-3'>
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
        <Menu className='h-full' mode='horizontal' defaultIndex={'0-0'}>
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
                •••
              </PanIconButton>
            }
          >
            <MenuItem>Info</MenuItem>
            <MenuItem>Info</MenuItem>
            <MenuItem itemClass='border-b'>
              <div className='flex items-center justify-between'>
                <p>Voting</p>
                <button className='px-2 py-px text-sm font-normal rounded-full border-2 text-emerald-400 border-emerald-400 my-[-5px]'>
                  VOTE NOW
                </button>
              </div>
            </MenuItem>
            <MenuItem itemClass='border-b'>Leaderboard</MenuItem>
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
      <div className='flex gap-4'>
        <PanIconButton
          className='font-semibold'
          ring='ring-0'
          hover='[&>div>span:first-child]:hover:scale-125 [&>div>span:first-child]:transition-transform'
          leftSrc='/images/pancake/pancake.svg'
        >
          <span>$4.752</span>
        </PanIconButton>

        <PanSvgrButton
          hover='hover:opacity-70'
          ring
          rounded
          leftIcon={<LanguageSvg className='w-6 h-6' />}
        ></PanSvgrButton>

        <PanSvgrButton
          hover='hover:opacity-70'
          ring
          rounded
          leftIcon={<SettingSvg className='w-6 h-6' />}
        ></PanSvgrButton>
        <PanButton>Connect Wallet</PanButton>
      </div>
    </div>
  );
};
