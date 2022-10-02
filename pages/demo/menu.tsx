import { NextPage } from 'next';
import { Button } from 'components';
import { useToggle } from 'hooks/useToggle';
import { Menu, MenuItem, SubMenu } from 'components/pancake';

const MenuDemo: NextPage = () => {
  return (
    <div className='p-2'>
      <Menu>
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
