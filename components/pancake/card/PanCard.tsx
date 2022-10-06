import React, { HTMLAttributes } from 'react';
import ChartSvg from '/public/images/pancake/chart.svg';
import SettingSvg from '/public/images/pancake/setting.svg';
import HistorySvg from '/public/images/pancake/history.svg';
import ArrowLoaddingSvg from '/public/images/pancake/arrowLoading.svg';
import BnbSvg from '/public/images/pancake/bnb.svg';
import PancakeSvg from '/public/images/pancake/pancake.svg';
import ArrowDownSvg from '/public/images/pancake/arrowDown.svg';
import { PanIconButton, PanSvgrButton } from '../button';
import PanExDown from 'public/images/pancake/panExDown.svg';
import PanExUpDown from 'public/images/pancake/PanExUpDown.svg';

const defaultClass: string = 'flex flex-col border';

export const PanCard: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <div className={mergeClass} {...restProps}>
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
        <span className='flex justify-center w-full text-sm text-center'>
          Trade tokens in an instant
        </span>
      </div>
      <div className='flex flex-col items-start justify-start p-4 gap-2 text-indigo-900 font-semibold'>
        <PanIconButton
          className='active:translate-y-px [&>div>span:last-child]:!ml-[-2px]'
          hover='hover:opacity-70'
          ring
          rounded
          leftSrc='/images/pancake/bnb.svg'
          rightSrc='/images/pancake/arrowDown.svg'
        >
          BNB
        </PanIconButton>
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

        <PanIconButton
          className='active:translate-y-px [&>div>span:last-child]:!ml-[-2px]'
          hover='hover:opacity-70'
          ring
          rounded
          leftSrc='/images/pancake/pancake.svg'
          rightSrc='/images/pancake/arrowDown.svg'
        >
          CAKE
        </PanIconButton>
        <input
          placeholder='0.0'
          className='h-14 px-4 w-full pb-4 font-normal bg-[#eeeaf4] ring ring-[#eeeaf4] focus-visible:outline-0 rounded-2xl text-right placeholder:text-[#7a6eaa] '
          type='text'
        />
      </div>
    </div>
  );
};
