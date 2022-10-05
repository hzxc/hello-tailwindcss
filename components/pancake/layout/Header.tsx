import { Menu, MenuItem, SubMenu } from 'components/pancake';
import { PanButton, PanIconButton } from '../button';

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
        <Menu className='h-full' mode='horizontal'>
          <SubMenu subTitle='Trade'>
            <MenuItem>Swap</MenuItem>
            <MenuItem>Limit</MenuItem>
            <MenuItem>Liquidity</MenuItem>
            <MenuItem>
              <PanIconButton
                className='w-full align-baseline my-[-2px]'
                iconWidth='20px'
                iconHeight='20px'
                ring='ring-0'
                hover
                rightSrc='/images/pancake/arrowExit.svg'
              >
                Perpetual
              </PanIconButton>
            </MenuItem>
            <MenuItem>
              <PanIconButton
                className='w-full align-baseline my-[-2px]'
                iconWidth='20px'
                iconHeight='20px'
                ring='ring-0'
                hover
                rightSrc='/images/pancake/arrowExit.svg'
              >
                Bridge
              </PanIconButton>
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
                className='align-baseline'
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
              <PanIconButton
                className='w-full align-baseline my-[-2px]'
                iconWidth='20px'
                iconHeight='20px'
                ring='ring-0'
                hover
                rightSrc='/images/pancake/arrowExit.svg'
              >
                Blog
              </PanIconButton>
            </MenuItem>
            <MenuItem>
              <PanIconButton
                className='w-full align-baseline my-[-2px]'
                iconWidth='20px'
                iconHeight='20px'
                ring='ring-0'
                hover
                rightSrc='/images/pancake/arrowExit.svg'
              >
                Docs
              </PanIconButton>
            </MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <div className='flex gap-4'>
        <PanIconButton
          className='align-text-top font-semibold'
          ring='ring-0'
          hover='[&>div>span:first-child]:hover:scale-125 [&>div>span:first-child]:transition-transform'
          leftSrc='/images/pancake/pancake.svg'
        >
          <span>$4.752</span>
        </PanIconButton>
        <PanIconButton
          ring='ring-0'
          className='align-text-top'
          hover='hover:opacity-70'
          leftSrc='/images/pancake/language.svg'
        />
        <PanIconButton
          ring='ring-0'
          className='align-text-top'
          hover='hover:opacity-70'
          leftSrc='/images/pancake/setting.svg'
        />
        <PanButton>Connect Wallet</PanButton>
      </div>
    </div>
  );
};
