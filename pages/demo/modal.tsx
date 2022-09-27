import { NextPage } from 'next';
import { Button } from 'components';
import { Modal as ModalContainer, ModalContent, ModalOverlay } from 'components/modal';
import { useToggle } from 'hooks/useToggle';

const Modal: NextPage = () => {
  const [isOpen, open, close] = useToggle(false);
  // const { open, close, RenderModal } = useModal();
  return (
    <div className='m-auto py-2 space-x-2'>
      <Button onClick={open}>open modal</Button>
      {/* <RenderModal>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
      </RenderModal> */}
      {isOpen && (
        <ModalContainer>
          <ModalOverlay onClick={close} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden	 bg-white'>
            <div style={{ padding: '1rem' }}>This is a simple modal</div>
            <div style={{ padding: '1rem' }}>This is a simple modal</div>
            <div style={{ padding: '1rem' }}>This is a simple modal</div>
            <div style={{ padding: '1rem' }}>This is a simple modal</div>
            <div style={{ padding: '1rem' }}>This is a simple modal</div>
            <div style={{ padding: '1rem' }}>This is a simple modal</div>
          </div>
        </ModalContainer>
      )}
      {/* <ModalContainer>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
        <div style={{ padding: '1rem' }}>This is a simple modal</div>
      </ModalContainer> */}
    </div>
  );
};

export default Modal;
