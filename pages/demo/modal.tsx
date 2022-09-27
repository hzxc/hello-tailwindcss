import { NextPage } from 'next';
import { Button } from 'components';
import { useToggle } from 'hooks/useToggle';
import { PanModal } from 'components/pancake';

const Modal: NextPage = () => {
  const { visible, close, open } = useToggle(false);
  // const { open, close, RenderModal } = useModal();
  return (
    <div className='m-auto py-2 space-x-2'>
      <Button onClick={open}>open modal</Button>
      <PanModal visible={visible} close={close} />
    </div>
  );
};

export default Modal;
