import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
interface IconButtonProps {
  leftSrc?: string;
  rightSrc?: string;
  iconWidth?: string;
  iconHeight?: string;
  alt?: string;
  col?: boolean;
}

const defaultInitialProps: IconButtonProps = {
  leftSrc: undefined,
  rightSrc: undefined,
  iconWidth: '24px',
  iconHeight: '24px',
  alt: '',
  col: false,
};

type Props = IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit`;
export const IconButton: React.FC<Props> = (props) => {
  const { className, children, leftSrc, rightSrc, alt, iconHeight, iconWidth, col, ...restProps } =
    {
      ...defaultInitialProps,
      ...props,
    };

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex ${col ? 'flex-col' : ''} gap-1 items-center justify-between`}>
        {leftSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image alt={alt} src={leftSrc} layout='fill' />
          </span>
        ) : undefined}
        {children ? <span>{children}</span> : undefined}
        {rightSrc ? (
          <span className='relative' style={{ width: iconWidth, height: iconHeight }}>
            <Image alt={alt} src={rightSrc} layout='fill' />
          </span>
        ) : undefined}
      </div>
    </button>
  );
};
