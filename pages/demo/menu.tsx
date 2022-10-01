import { NextPage } from 'next';
import { Button } from 'components';
import { useToggle } from 'hooks/useToggle';
import { Menu, MenuItem } from 'components/pancake';

const MenuDemo: NextPage = () => {
  return (
    <div className='p-2'>
      <Menu>
        <MenuItem index='0'>active</MenuItem>
        <MenuItem index='1'>disabled</MenuItem>
      </Menu>

      <Menu className='h-14' mode='horizontal'>
        <MenuItem>active</MenuItem>
        <MenuItem>disabled</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuDemo;
