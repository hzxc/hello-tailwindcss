import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';
import { Spin } from 'components/svg';
interface BaseProps {
  leftSrc?: string;
  rightSrc?: string;
  iconWidth?: string;
  iconHeight?: string;
  alt?: string;
}

const defaultInitialProps: BaseProps = {
  leftSrc: undefined,
  rightSrc: undefined,
  iconWidth: '24px',
  iconHeight: '24px',
  alt: '',
};

type NativeProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string =
  'font-kanit text-purple-900 p-[6px] ring-1 ring-slate-200 rounded-xl align-middle hover:bg-gray-100';
export const PanIconButton: React.FC<NativeProps> = (props) => {
  const { className, children, leftSrc, rightSrc, alt, iconHeight, iconWidth, ...restProps } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className='flex items-center justify-center space-x-1'>
        {leftSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image className='rounded-full bg-gray-200' alt={alt} src={leftSrc} layout='fill' />
          </span>
        ) : undefined}
        <span>{children}</span>
        {rightSrc ? (
          <span className='relative ' style={{ width: iconWidth, height: iconHeight }}>
            <Image className='rounded-full bg-gray-200' alt={alt} src={rightSrc} layout='fill' />
          </span>
        ) : undefined}
      </div>
    </button>
  );
};
