import { Menu, MenuItem, SubMenu } from 'components/menu';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className='fixed top-0 right-0 w-64 h-screen p-4 bg-zinc-100 border-l overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600/60 scrollbar-track-slate-300 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg'>
      <Menu>
        <MenuItem>
          <Link href='/'>Getting Started</Link>
        </MenuItem>
        <MenuItem>Add React to a Website</MenuItem>
        <MenuItem>Create a New React App</MenuItem>
        <MenuItem>CDN Links</MenuItem>
        <MenuItem>Release Channels</MenuItem>
        <SubMenu title='Demo'>
          <MenuItem>
            <Link href='/demo/button'>Button</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/demo/modal'>Modal</Link>
          </MenuItem>
          <MenuItem>Rendering Elements</MenuItem>
        </SubMenu>
      </Menu>
    </nav>
  );
}
