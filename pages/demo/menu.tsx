import { NextPage } from 'next';
import { Button } from 'components';
import { useToggle } from 'hooks/useToggle';
import { Menu, MenuItem } from 'components/pancake';

const MenuDemo: NextPage = () => {
  return (
    <div className='p-2'>
      <Menu>
        <MenuItem>Trade</MenuItem>
        <MenuItem>Earn</MenuItem>
        <MenuItem>Win</MenuItem>
        <MenuItem>NFT</MenuItem>
        <MenuItem>•••</MenuItem>
      </Menu>

      <Menu className='h-14' mode='horizontal'>
        <MenuItem>Trade</MenuItem>
        <MenuItem>Earn</MenuItem>
        <MenuItem>Win</MenuItem>
        <MenuItem>NFT</MenuItem>
        <MenuItem>•••</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuDemo;
