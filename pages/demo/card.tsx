import { Layout } from 'components/layout';
import { PanCard } from 'components/pancake/card';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const CardDemo: NextPageWithLayout = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <PanCard>Pancake Card</PanCard>
    </div>
  );
};

CardDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CardDemo;
