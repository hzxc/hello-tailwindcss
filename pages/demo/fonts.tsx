import { Layout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const ImageDemo: NextPageWithLayout = () => {
  return (
    <div className='p-4'>
      <p className=''>Normal:Todos os seres humanos nascem livres e iguais em dignidade</p>
      <p className='font-kanit'>
        kanit: Todos os seres humanos nascem livres e iguais em dignidade
      </p>
    </div>
  );
};

ImageDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ImageDemo;
