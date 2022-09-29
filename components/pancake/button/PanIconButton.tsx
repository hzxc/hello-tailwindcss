import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';
interface BaseProps {
  leftSrc?: string;
  rightSrc?: string;
  iconWidth?: string;
  iconHeight?: string;
  hover?: string;
  ring?: string;
  alt?: string;
}

const defaultInitialProps: BaseProps = {
  leftSrc: undefined,
  rightSrc: undefined,
  iconWidth: '24px',
  iconHeight: '24px',
  ring: 'ring-1 ring-gray-100 p-[6px]',
  hover: 'hover:bg-gray-100 hover:opacity-100',
  alt: '',
};

type NativeProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit rounded-xl align-middle`;
export const PanIconButton: React.FC<NativeProps> = (props) => {
  const {
    className,
    children,
    leftSrc,
    rightSrc,
    alt,
    iconHeight,
    iconWidth,
    ring,
    hover,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${ring ? ' ' + ring : ''}${
    hover ? ' ' + hover : ''
  }`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex items-center justify-center${children ? ' space-x-1' : ''}`}>
        {leftSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image className='rounded-full' alt={alt} src={leftSrc} layout='fill' />
          </span>
        ) : undefined}
        <span>{children}</span>
        {rightSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image className='rounded-full' alt={alt} src={rightSrc} layout='fill' />
          </span>
        ) : undefined}
      </div>
    </button>
  );
};
