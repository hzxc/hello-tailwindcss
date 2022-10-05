import { Menu, MenuItem, SubMenu } from 'components/pancake';
import { PanIconButton } from '../button';
import { GoPrimitiveDot } from 'react-icons/go';

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
            <MenuItem>Perpetual</MenuItem>
            <MenuItem>Bridge</MenuItem>
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
            <MenuItem>Voting</MenuItem>
            <MenuItem>Leaderboard</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Docs</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <div>tool</div>
    </div>
  );
};
