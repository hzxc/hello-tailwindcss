import { Layout } from 'components/layout';
import { MenuButton, MenuButtonItem } from 'components/menu-button';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import ArrowDownSvg from 'public/images/pancake/arrowDown.svg';
import { SubMenu, Menu, MenuItem } from 'components/menu';
import { IconButton } from 'components';
import { Header } from 'components/pancake/layout/Header';

const ButtonMenuDemo: NextPageWithLayout = () => {
  return (
    <div className='flex p-8'>
      <MenuButton
        navBtn={
          <IconButton
            className='my-1'
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
        <MenuButtonItem>BNB Smart Chain</MenuButtonItem>
        <MenuButtonItem>Ethereum</MenuButtonItem>
        <MenuButtonItem>BNB Smart Chain</MenuButtonItem>
        <MenuButtonItem>Ethereum</MenuButtonItem>
      </MenuButton>
    </div>
  );
};

ButtonMenuDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ButtonMenuDemo;
