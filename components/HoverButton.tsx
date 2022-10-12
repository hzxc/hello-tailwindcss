import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

interface HoverButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftSrc?: string;
  rightSrc?: string;
  gap?: string;
  col?: boolean;
  width?: string;
  height?: string;
}

const defaultInitialProps: HoverButtonProps = {
  leftIcon: undefined,
  rightIcon: undefined,
  leftSrc: undefined,
  rightSrc: undefined,
  gap: 'gap-1',
  col: false,
  width: '24px',
  height: '24px',
};

type Props = HoverButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
const defaultClass: string = '';

export const HoverButton: React.FC<Props> = (props) => {
  const {
    className,
    children,
    gap,
    leftIcon,
    rightIcon,
    leftSrc,
    rightSrc,
    width,
    height,
    col,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div
        className={`flex ${col ? 'flex-col' : ''} ${gap ? gap : ''} items-center justify-between`}
      >
        {leftSrc ? (
          <span className='relative' style={{ width: width, height: height }}>
            <Image alt='' src={leftSrc} layout='fill' />
          </span>
        ) : undefined}
        {leftIcon ? leftIcon : undefined}
        {children ? <span>{children}</span> : undefined}
        {rightIcon ? rightIcon : undefined}
        {rightSrc ? (
          <span className='relative' style={{ width: width, height: height }}>
            <Image alt='' src={rightSrc} layout='fill' />
          </span>
        ) : undefined}
      </div>
    </button>
  );
};
