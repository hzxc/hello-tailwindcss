import { PanIconButton } from '../button';

export const Header: React.FC = () => {
  return (
    <div className='flex shrink-0 grow-0 justify-between items-center h-14 border-b p-4'>
      <div>
        <PanIconButton
          iconWidth='28px'
          iconHeight='28px'
          className='text-black font-semibold	text-xl'
          ring='ring-0'
          leftSrc='/images/pancake/pancakeSwapMobile.svg'
          hover=''
          rounded=''
        >
          PancakeSwap
        </PanIconButton>
      </div>
      <div></div>
    </div>
  );
};
