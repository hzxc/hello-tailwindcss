import { Modal } from 'components/modal';
import { ModalOverlay } from './ModalOverlay';
import { PanIconButton } from '../button';
import { FixedSizeList as List } from 'react-window';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { IToken } from './types';
import { IconButton, SvgButton } from 'components';
import CloseSvg from 'public/images/pancake/close.svg';
import { useDebounce } from 'use-debounce';
import { useSearch } from 'hooks/pancake';
import { PanModal } from './PanModal';

export const TokenModal: React.FC<{ visible: boolean; close: () => void }> = ({
  visible,
  close,
}) => {
  const [searchParam, setSearchParam] = useState<string>('');
  const [debouncedSearchParam] = useDebounce(searchParam, 400);
  const { data } = useSearch(debouncedSearchParam);
  const tokens = data || [];

  const Row = ({ index, style }: { index: number; style: CSSProperties | undefined }) => (
    <div
      className='flex items-center cursor-pointer hover:bg-gray-100 px-5 py-1 space-x-2'
      style={style}
    >
      <PanIconButton
        ring='ring-0'
        hover='hover:opacity-70'
        leftSrc={tokens[index]?.logoURI}
      ></PanIconButton>
      <div className='flex-col'>
        <p className='font-semibold'>{tokens[index].symbol}</p>
        <p className='text-sm opacity-70'>{tokens[index].name}</p>
      </div>
    </div>
  );

  return (
    <PanModal visible={visible} close={close}>
      <div className=' overflow-hidden w-[420px] rounded-[32px] text-[#280d5f] bg-white'>
        <div className='flex py-5 border border-x-transparent border-t-transparent px-6 items-center justify-between'>
          <div className='text-xl font-semibold'>Select a Token</div>
          <SvgButton onClick={close}>
            <CloseSvg className='w-5 h-5 text-[#1fc7d4]' />
          </SvgButton>
        </div>
        <div className='overflow-y-auto max-h-[calc(100vh-56px)] scrollbar-thin scrollbar-thumb-violet-900/80 scrollbar-track-slate-100 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg'>
          <div className='p-5 space-y-3'>
            <input
              value={searchParam}
              onChange={(e) => {
                setSearchParam(e.target.value);
              }}
              placeholder='Search name or paste address'
              className='w-full border border-[#d7caec] bg-[#eeeaf4] rounded-2xl h-12 py-0 px-4 placeholder:text-[#7c70ab] focus:border-[#7645d9] focus:ring focus:outline-none focus:ring-[#ad8fe8]'
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
          {tokens.length === 0 ? (
            <div className='text-center text-[#7a6eaa]'>No results found.</div>
          ) : (
            <List
              className='scrollbar-thin scrollbar-thumb-violet-900/80 scrollbar-track-slate-100 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg'
              height={392}
              itemCount={tokens.length}
              itemSize={56}
              width={'100%'}
            >
              {Row}
            </List>
          )}

          <div className='p-5 text-center'>
            {/* <button className='text-[#1fc7d4] font-semibold hover:opacity-70 active:translate-y-px'>
              Manage Tokens
            </button> */}
          </div>
        </div>
      </div>
    </PanModal>
  );
};
