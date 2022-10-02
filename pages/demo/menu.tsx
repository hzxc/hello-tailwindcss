import { NextPage } from 'next';
import { Menu, MenuItem, SubMenu } from 'components/menu';

const MenuDemo: NextPage = () => {
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

      <Menu className='h-14' mode='horizontal'>
        <MenuItem>Trade</MenuItem>
        <MenuItem>Earn</MenuItem>
        <MenuItem>Win</MenuItem>
        <MenuItem>NFT</MenuItem>
        <MenuItem>•••</MenuItem>
        <SubMenu title='opened'>
          <MenuItem>opened1</MenuItem>
          <MenuItem>opened1</MenuItem>
          <MenuItem>opened1</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuDemo;
