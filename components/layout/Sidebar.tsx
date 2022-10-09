import { Menu, MenuItem, SubMenu } from 'components/menu';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className='fixed top-0 right-0 w-64 h-screen p-4 bg-zinc-100 border-l overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600/60 scrollbar-track-slate-300 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg'>
      <Menu defaultOpenSubMenus={['5']}>
        <MenuItem>
          <Link href='/'>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href='/pancake'>Pancake</Link>
        </MenuItem>
        <SubMenu title='Tailwindcss'>
          <MenuItem>
            <Link style={{ display: 'block' }} href='/demo/business-card'>
              Business Card
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/chit-chat'>Chit Chat</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/counter'>Counter</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/fonts'>Fonts</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/image'>Image</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/button'>Button</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/modal'>Modal</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/menu'>Menu</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/pan-menu'>Pan Menu</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/transition'>Transition</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/toggle'>Toggle</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/tab'>Tab</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/card'>Card</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title='ETH'>
          <MenuItem>
            <Link href='/demo/wagmi'>Wagmi Start</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </nav>
  );
}
