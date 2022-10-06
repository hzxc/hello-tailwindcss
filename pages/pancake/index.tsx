import { Layout, PanIconButton, PanSvgrButton } from 'components/pancake';
import { PanCard } from 'components/pancake/card';
import ArrowUpRight from 'public/images/pancake/arrowUpRight.svg';

import { NextPage } from 'next';
import { ToggleButton } from 'components';
import TailSvg from 'public/images/pancake/tail.svg';
import Image from 'next/image';

const Pancake: NextPage = () => {
  return (
    <Layout>
      <PanCard className='w-80 h-[566px] rounded-3xl bg-white'>Pancake Home</PanCard>
    </Layout>
  );
};

export default Pancake;
