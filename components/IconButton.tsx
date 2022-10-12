import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
interface IconButtonProps {
  leftSrc?: string;
  rightSrc?: string;
  iconWidth?: string;
  iconHeight?: string;
  // hover?: string | boolean;
  // ring?: string | boolean;
  // rounded?: string | boolean;
  alt?: string;
  col?: boolean;
}

const defaultInitialProps: IconButtonProps = {
  leftSrc: undefined,
  rightSrc: undefined,
  iconWidth: '24px',
  iconHeight: '24px',
  // ring: 'ring-1 ring-gray-100 p-[6px]',
  // hover: 'hover:bg-gray-100 hover:opacity-100',
  // rounded: 'rounded-xl',
  alt: '',
  col: false,
};

type Props = IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit`;
export const IconButton: React.FC<Props> = (props) => {
  const {
    className,
    children,
    leftSrc,
    rightSrc,
    alt,
    iconHeight,
    iconWidth,
    // ring,
    // hover,
    // rounded,
    col,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  // const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${ring ? ' ' + ring : ''}${
  //   hover ? ' ' + hover : ''
  // }${rounded ? ' ' + rounded : ''}`;

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex ${col ? 'flex-col' : ''} gap-1 items-center justify-between`}>
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
