import { Layout, PanIconButton } from 'components/pancake';
import { PanCard } from 'components/pancake/card';
import { NextPage } from 'next';
import { ReactNode } from 'react';

const Pancake: NextPage = () => {
  return (
    <Layout>
      <div className='pt-8 flex flex-col h-full items-center justify-between'>
        <PanCard className='w-80 h-[566px] rounded-3xl bg-white'>Pancake Home</PanCard>
        <div className='flex items-center justify-between px-4 h-32 w-full'>
          <div>
            <PanIconButton
              className='text-cyan-500/80 font-semibold'
              ring='ring-0'
              hover='hover:opacity-70 hover:underline'
              rightSrc='/images/pancake/arrowUpRight.svg'
            >
              Convert ERC-20 to BEP-20
            </PanIconButton>
          </div>
          <div>right</div>
        </div>
      </div>
    </Layout>
  );
};

export default Pancake;
