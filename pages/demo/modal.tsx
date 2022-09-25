import { NextPage } from 'next';
import { Button } from 'components';
import { Modal as ModalComponent, ModalContent, ModalOverlay } from 'components/modal';
import { useToggle } from 'hooks/useToggle';

const Modal: NextPage = () => {
  const [isOpen, open, close, toggle] = useToggle(false);
  return (
    <div className='m-auto py-2 space-x-2'>
      <Button onClick={toggle}>open modal</Button>
      {isOpen && (
        <ModalComponent>
          {/* <div>This is a simple modal</div> */}
          {/* <ModalOverlay onClick={close} /> */}
          <ModalContent>
            <Button onClick={close}>close modal</Button>
            <div className='h-48 overflow-auto'>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
              <p>This is a simple modal</p>
            </div>
          </ModalContent>
        </ModalComponent>
      )}
    </div>
  );
};

export default Modal;
