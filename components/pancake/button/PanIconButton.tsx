import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';
interface PanIconButtonProps {
  leftSrc?: string;
  rightSrc?: string;
  iconWidth?: string;
  iconHeight?: string;
  hover?: string | boolean;
  ring?: string;
  alt?: string;
  rounded?: string | boolean;
}

const defaultInitialProps: PanIconButtonProps = {
  leftSrc: undefined,
  rightSrc: undefined,
  iconWidth: '24px',
  iconHeight: '24px',
  ring: 'ring-1 ring-gray-100 p-[6px]',
  hover: 'hover:bg-gray-100 hover:opacity-100',
  alt: '',
  rounded: 'rounded-xl',
};

type Props = PanIconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit`;
export const PanIconButton: React.FC<Props> = (props) => {
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
    rounded,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${ring ? ' ' + ring : ''}${
    hover ? ' ' + hover : ''
  }${rounded ? ' ' + rounded : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex items-center justify-between${children ? ' space-x-1' : ''}`}>
        {leftSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image alt={alt} src={leftSrc} layout='fill' />
          </span>
        ) : undefined}
        <span>{children}</span>
        {rightSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image alt={alt} src={rightSrc} layout='fill' />
          </span>
        ) : undefined}
      </div>
    </button>
  );
};
