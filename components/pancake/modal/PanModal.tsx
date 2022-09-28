import { Modal } from 'components/modal';
import { ModalOverlay } from './ModalOverlay';
import { RiCloseFill } from 'react-icons/Ri';
import { PanIconButton } from '../button';
import dayjs from 'dayjs';

export const PanModal: React.FC<{ visible: boolean; close: () => void }> = ({ visible, close }) => {
  return (
    <Modal visible={visible}>
      <ModalOverlay onClick={close} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden bg-white w-full min-w-[320px] max-w-[420px] rounded-[32px] font-kanit text-purple-900'>
        <div className='flex py-5 border border-x-0 px-6 items-center justify-between'>
          <div className='text-xl font-semibold '>Select a Token</div>
          <RiCloseFill size={24} className='text-cyan-400' />
        </div>
        <div className='p-6 space-y-3'>
          <input
            placeholder='Search name or paste address'
            className='w-full bg-violet-900/10 rounded-2xl text-base h-12 py-0 px-4 border border-violet-200 focus:ring-4 focus:outline-none focus:ring-purple-700/60'
            type='text'
          />
          <p className='text-sm'>Common tokens</p>
          <div className='flex items-center justify-around'>
            <PanIconButton leftSrc='/images/pancake/bnb.svg'>BNB</PanIconButton>
            <PanIconButton leftSrc='/images/pancake/busd.png'>BUSD</PanIconButton>
            <PanIconButton leftSrc='/images/pancake/cake.png'>CAKE</PanIconButton>
            <PanIconButton leftSrc='/images/pancake/btc.png'>BTCB</PanIconButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};
