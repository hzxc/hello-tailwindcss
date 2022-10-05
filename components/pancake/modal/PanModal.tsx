import { Modal } from 'components/modal';
import { ModalOverlay } from './ModalOverlay';
import { RiCloseFill } from 'react-icons/Ri';
import { PanButton, PanIconButton } from '../button';
import { FixedSizeList as List } from 'react-window';
import { CSSProperties, useRef } from 'react';
import { BaseTokenList } from './tokens';
import { Transition } from 'components/Transition';

export const PanModal: React.FC<{ visible: boolean; close: () => void }> = ({ visible, close }) => {
  const baseTokens = BaseTokenList.tokens;
  const Row = ({ index, style }: { index: number; style: CSSProperties | undefined }) => (
    <div
      className='flex items-center cursor-pointer hover:bg-gray-100 px-5 py-1 space-x-2'
      style={style}
    >
      <PanIconButton
        ring='ring-0'
        hover='hover:opacity-70'
        leftSrc={baseTokens[index]?.logoURI}
      ></PanIconButton>
      <div className='flex-col'>
        <p className='font-semibold'>{baseTokens[index].symbol}</p>
        <p className='text-sm opacity-70'>{baseTokens[index].name}</p>
      </div>
    </div>
  );
  return (
    <Modal visible={visible}>
      <ModalOverlay onClick={close} />

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden bg-white w-full min-w-[320px] max-w-[420px] rounded-[32px] font-kanit text-base text-indigo-800/80'>
        <div className='flex py-5 border border-x-0 px-6 items-center justify-between'>
          <div className='text-xl font-semibold'>Select a Token</div>
          <RiCloseFill size={24} className='text-cyan-400' />
        </div>
        <div className='p-5 space-y-3'>
          <input
            placeholder='Search name or paste address'
            className='w-full bg-violet-900/10 rounded-2xl h-12 py-0 px-4 border border-violet-200 focus:ring-4 focus:outline-none focus:ring-purple-700/60'
            type='text'
          />
          <p className='text-sm'>Common tokens</p>
          <div className='flex items-center justify-around'>
            <PanIconButton leftSrc='/images/pancake/bnb.svg'>BNB</PanIconButton>
            <PanIconButton leftSrc='/images/pancake/busd.png'>BUSD</PanIconButton>
            <PanIconButton leftSrc='https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'>
              CAKE
            </PanIconButton>
            <PanIconButton leftSrc='/images/pancake/btc.png'>BTCB</PanIconButton>
          </div>
        </div>
        <List
          className='scrollbar-thin scrollbar-thumb-violet-900/60 scrollbar-track-slate-100 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg'
          height={392}
          itemCount={baseTokens.length}
          itemSize={56}
          width={'100%'}
        >
          {Row}
        </List>
        <div className='p-5 text-center'>
          <PanIconButton
            className='text-cyan-400 font-semibold'
            ring='ring-0'
            hover='hover:opacity-70'
          >
            Manage Tokens
          </PanIconButton>
        </div>
      </div>
    </Modal>
  );
};
