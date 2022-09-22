import React, { FC, ButtonHTMLAttributes } from 'react';

interface BaseProps {
  classes?: string;
  children?: React.ReactNode;
}

type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLElement>;

const defaultClass: string =
  'px-4 py-1 text-sm text-white	bg-cyan-500 font-semibold rounded-full shadow-sm shadow-black hover:opacity-60 active:translate-y-px active:shadow-none';

export const PanButton: React.FC<NativeButtonProps> = (props) => {
  const { classes, children, ...restProps } = props;
  const className = `${defaultClass} ${classes}`;
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};
