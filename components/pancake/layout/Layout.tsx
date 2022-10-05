import { Tab, TabItem } from 'components/tab';
import { ReactNode } from 'react';
import { PanIconButton } from '../button';
import { Header } from './Header';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen font-kanit font-normal text-base text-violet-900/80 scrollbar-thin scrollbar-thumb-violet-900/80 scrollbar-track-slate-100 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg'>
      <Header></Header>
      <div className='flex shrink-0 grow-0 justify-center items-center h-[42px]'>
        <Tab>
          <TabItem>Swap</TabItem>
          <TabItem>Limit</TabItem>
          <TabItem>Liquidity</TabItem>
          <TabItem>
            <PanIconButton
              className='align-baseline my-[-2px]'
              iconWidth='20px'
              iconHeight='20px'
              ring='ring-0'
              hover
              rightSrc='/images/pancake/arrowUpRight.svg'
            >
              Perpetual
            </PanIconButton>
          </TabItem>
          <TabItem>
            <PanIconButton
              className='align-baseline my-[-2px]'
              iconWidth='20px'
              iconHeight='20px'
              ring='ring-0'
              hover
              rightSrc='/images/pancake/arrowUpRight.svg'
            >
              Bridge
            </PanIconButton>
          </TabItem>
        </Tab>
      </div>
      <main className='shrink grow bg-zinc-200'>{children}</main>
    </div>
  );
};
