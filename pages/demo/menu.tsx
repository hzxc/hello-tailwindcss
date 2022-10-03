import { Layout } from 'components/layout';
import { Menu, MenuItem, SubMenu } from 'components/menu';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const MenuDemo: NextPageWithLayout = () => {
  return (
    <div className='p-2'>
      <Menu>
        <MenuItem>Getting Started</MenuItem>
        <MenuItem>Add React to a Website</MenuItem>
        <MenuItem>Create a New React App</MenuItem>
        <SubMenu title='Opend'>
          <MenuItem>Hello World</MenuItem>
          <MenuItem>Introducing JSX</MenuItem>
          <MenuItem>Rendering Elements</MenuItem>
        </SubMenu>
        <MenuItem>CDN Links</MenuItem>
        <MenuItem>Release Channels</MenuItem>
      </Menu>

      <hr />

      <Menu className='h-14' mode='horizontal'>
        <MenuItem>Trade</MenuItem>
        <MenuItem>Earn</MenuItem>
        <MenuItem>Win</MenuItem>
        <MenuItem>NFT</MenuItem>
        <MenuItem>•••</MenuItem>
        <SubMenu title='Open'>
          <MenuItem>opened1</MenuItem>
          <MenuItem>opened1</MenuItem>
          <MenuItem>opened1</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

MenuDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MenuDemo;
