import { Modal } from 'components/modal';
import { ModalOverlay } from './ModalOverlay';
import { FiSun, FiMoon } from 'react-icons/fi';
export const SettingsModal: React.FC<{ visible: boolean; close: () => void }> = ({
  visible,
  close,
}) => {
  return (
    <Modal visible={visible}>
      <ModalOverlay onClick={close} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden bg-white w-full min-w-[320px] max-w-[420px] rounded-[32px]'>
        <div className='flex p-4 items-center justify-between'>
          <p>Settings</p>
          <FiSun size={24} className='text-amber-400' />
        </div>
        <div>Body</div>
      </div>
    </Modal>
  );
};
