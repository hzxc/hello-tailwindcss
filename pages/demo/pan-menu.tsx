import { Layout } from 'components/layout';
import { Menu, MenuItem, PanIconButton, SubMenu } from 'components/pancake';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const MenuDemo: NextPageWithLayout = () => {
  return (
    <div className='p-2'>
      <Menu>
        <MenuItem>Getting Started</MenuItem>
        <MenuItem>Add React to a Website</MenuItem>
        <MenuItem>Create a New React App</MenuItem>
        <SubMenu subTitle='Opend'>
          <MenuItem>Hello World</MenuItem>
          <MenuItem>Introducing JSX</MenuItem>
          <MenuItem>Rendering Elements</MenuItem>
        </SubMenu>
        <MenuItem>CDN Links</MenuItem>
        <MenuItem>Release Channels</MenuItem>
      </Menu>

      <hr />

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
  );
};

MenuDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MenuDemo;
