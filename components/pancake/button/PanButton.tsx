import React, { ButtonHTMLAttributes } from 'react';

const defaultClass: string =
  'px-4 py-1 text-sm text-white	bg-cyan-500 font-semibold rounded-full shadow-sm shadow-black hover:opacity-60 active:translate-y-px active:shadow-none';

export const PanButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;
  return (
    <button className={mergeClass} {...restProps}>
      {children}
    </button>
  );
};
