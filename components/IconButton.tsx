import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

interface IconButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftSrc?: string;
  rightSrc?: string;
  gap?: string;
  col?: boolean;
  leftSize?: string;
  rightSize?: string;
  tailClass?: 'default' | 'panEx' | 'panMb';
  customStyle?: React.CSSProperties;
}

const defaultInitialProps: IconButtonProps = {
  tailClass: 'default',
  leftIcon: undefined,
  rightIcon: undefined,
  leftSrc: undefined,
  rightSrc: undefined,
  gap: 'gap-1',
  col: false,
  leftSize: '24px',
  rightSize: '24px',
};

type Props = IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
const defaultClass: string = 'align-baseline';
const PanExClass: string =
  'font-kanit align-middle active:translate-y-px align-middle rounded-full p-[6px] text-cyan-500 [&>div>span:first-child]:block [&>div>span:last-child]:hidden shadow-sm shadow-gray-700 active:shadow-none bg-[#eeeaf4] [&>div>span:last-child]:hover:block [&>div>span:first-child]:hover:hidden hover:bg-[#6edbe3]';
const PanMenuButtonClass: string =
  'font-kanit align-middle rounded-full font-semibold hover:opacity-70 h-8 text-[#280d5f] bg-[#eff4f5]';
export const IconButton: React.FC<Props> = (props) => {
  const {
    className,
    children,
    gap,
    leftIcon,
    rightIcon,
    leftSrc,
    rightSrc,
    leftSize,
    rightSize,
    col,
    tailClass,
    customStyle,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${tailClass === 'default' ? defaultClass : ''} ${
    tailClass === 'panEx' ? PanExClass : ''
  } ${tailClass === 'panMb' ? PanMenuButtonClass : ''} ${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps} style={customStyle ? customStyle : {}}>
      <div
        className={`flex flex-nowrap ${col ? 'flex-col' : ''} ${
          gap ? gap : ''
        } items-center justify-between`}
      >
        {leftSrc ? (
          <span className='relative' style={{ width: leftSize, height: leftSize }}>
            <Image alt='' src={leftSrc} layout='fill' />
          </span>
        ) : undefined}
        {leftIcon ? (
          <span
            className='relative [&>svg]:w-full [&>svg]:h-full'
            style={{ width: leftSize, height: leftSize }}
          >
            {leftIcon}
          </span>
        ) : undefined}
        {children ? <span>{children}</span> : undefined}
        {rightIcon ? (
          <span
            className='relative [&>svg]:w-full [&>svg]'
            style={{ width: rightSize, height: rightSize }}
          >
            {rightIcon}
          </span>
        ) : undefined}

        {rightSrc ? (
          <span className='relative' style={{ width: rightSize, height: rightSize }}>
            <Image alt='' src={rightSrc} layout='fill' />
          </span>
        ) : undefined}
      </div>
    </button>
  );
};
