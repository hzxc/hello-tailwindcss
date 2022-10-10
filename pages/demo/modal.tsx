import { NextPage } from 'next';
import { Button } from 'components';
import { useToggle } from 'hooks/useToggle';
import { PanModal } from 'components/pancake';
import { Layout } from 'components/layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'pages/_app';
import { baseTokens } from 'data/pancake';

const Modal: NextPageWithLayout = () => {
  const { visible, close, open } = useToggle(false);
  // const { open, close, RenderModal } = useModal();
  return (
    <Layout>
      <div className='m-auto p-8 space-x-2'>
        <Button onClick={open}>open modal</Button>
        <PanModal visible={visible} close={close} data={baseTokens} />
      </div>
    </Layout>
  );
};

Modal.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Modal;
