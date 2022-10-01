import { ReactNode } from 'react';
import { Header } from './Header';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen font-kanit font-normal text-base text-indigo-900/90'>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};
