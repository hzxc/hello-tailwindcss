import { Layout, PanButton, PanIconButton, PanModal, PanSvgrButton } from 'components/pancake';
import { NextPage } from 'next';
import ChartSvg from '/public/images/pancake/chart.svg';
import SettingSvg from '/public/images/pancake/setting.svg';
import HistorySvg from '/public/images/pancake/history.svg';
import ArrowLoaddingSvg from '/public/images/pancake/arrowLoading.svg';

import PanExDown from 'public/images/pancake/panExDown.svg';
import PanExUpDown from 'public/images/pancake/PanExUpDown.svg';
import PanCopy from 'public/images/pancake/panCopy.svg';
import PanQuestionMask from 'public/images/pancake/panQuestionMark.svg';
import { useToggle } from 'hooks/useToggle';

const Pancake: NextPage = () => {
  const { visible, close, open } = useToggle(false);

  return (
    <Layout>
      <PanModal visible={visible} close={close} />
      <div className='w-80 flex flex-col border rounded-3xl bg-white'>
        <div className='p-6 border-b'>
          <div className='flex justify-between'>
            <PanSvgrButton
              hover='hover:opacity-70'
              ring
              rounded
              leftIcon={<ChartSvg className='w-6 h-6' />}
            ></PanSvgrButton>
            <span className='text-xl font-semibold text-indigo-900 pl-14'>Swap</span>
            <div className='flex gap-2'>
              <PanSvgrButton
                hover='hover:opacity-70'
                ring
                rounded
                leftIcon={<SettingSvg className='w-6 h-6' />}
              ></PanSvgrButton>
              <PanSvgrButton
                hover='hover:opacity-70'
                ring
                rounded
                leftIcon={<HistorySvg className='w-6 h-6' />}
              ></PanSvgrButton>
              <PanSvgrButton
                className='text-[#D7CAEC]'
                hover='hover:opacity-70'
                ring
                rounded
                leftIcon={<ArrowLoaddingSvg className='w-6 h-6' />}
              ></PanSvgrButton>
            </div>
          </div>
          <div className='text-sm text-center'>Trade tokens in an instant</div>
        </div>
        <div className='flex flex-col items-start justify-start p-4 gap-2 text-indigo-900 font-semibold'>
          <div className='px-2 space-x-2'>
            <PanIconButton
              onClick={open}
              className='active:translate-y-px [&>div>span:last-child]:!ml-[-2px]'
              hover='hover:opacity-70'
              ring
              rounded
              leftSrc='/images/pancake/bnb.svg'
              rightSrc='/images/pancake/arrowDown.svg'
            >
              BNB
            </PanIconButton>
          </div>
          <input
            placeholder='0.0'
            className='h-14 px-4 w-full pb-4 font-normal bg-[#eeeaf4] ring ring-[#eeeaf4] focus-visible:outline-0 rounded-2xl text-right placeholder:text-[#7a6eaa] '
            type='text'
          />
          <div className='p-1 w-full text-center'>
            <PanSvgrButton
              className='active:translate-y-px align-middle text-cyan-500 [&>div>svg:first-child]:block [&>div>svg:last-child]:hidden shadow-sm shadow-gray-700 active:shadow-none bg-[#eeeaf4]'
              rounded='rounded-full'
              ring='p-[6px]'
              hover='[&>div>svg:last-child]:hover:block [&>div>svg:first-child]:hover:hidden hover:bg-[#6edbe3]'
              leftIcon={<PanExDown />}
              rightIcon={<PanExUpDown className='text-white' />}
            ></PanSvgrButton>
          </div>
          <div className='px-2 space-x-2'>
            <PanIconButton
              onClick={open}
              className='align-bottom active:translate-y-px [&>div>span:last-child]:!ml-[-2px]'
              hover='hover:opacity-70'
              ring
              rounded
              leftSrc='/images/pancake/pancake.svg'
              rightSrc='/images/pancake/arrowDown.svg'
            >
              CAKE
            </PanIconButton>
            <PanSvgrButton
              ring='py-1'
              rounded
              hover
              className='align-bottom text-[#7a6eaa]'
              leftIcon={<PanCopy />}
            ></PanSvgrButton>
          </div>

          <input
            placeholder='0.0'
            className='h-14 px-4 w-full pb-4 font-normal bg-[#eeeaf4] ring ring-[#eeeaf4] focus-visible:outline-0 rounded-2xl text-right placeholder:text-[#7a6eaa] '
            type='text'
          />
          <div className='w-full p-1 flex justify-end gap-1'>
            <PanButton className='py-[2px] px-2 text-xs'>SCAN RISK</PanButton>
            <PanQuestionMask className='text-[#7a6eaa]' />
          </div>
          <div className='w-full flex items-center justify-between px-4 pb-3'>
            <span className='text-xs font-normal text-violet-700'>Slippage Tolerance</span>
            <span className='text-[#1fc7d4]'>0.5%</span>
          </div>

          <PanButton className='w-72 h-12 rounded-2xl'>Connect Wallet</PanButton>
        </div>
      </div>
    </Layout>
  );
};

export default Pancake;
