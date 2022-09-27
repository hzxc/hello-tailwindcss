import { Modal } from 'components/modal';
import { ModalOverlay } from './ModalOverlay';

export const PanModal: React.FC<{ visible: boolean; close: () => void }> = ({ visible, close }) => {
  return (
    <Modal visible={visible}>
      <ModalOverlay onClick={close} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden bg-white w-full min-w-[320px] max-w-[420px]'>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
        <p>This is a pancake modal</p>
      </div>
    </Modal>
  );
};
