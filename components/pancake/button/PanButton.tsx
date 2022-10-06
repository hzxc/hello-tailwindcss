import React, { ButtonHTMLAttributes } from 'react';

const defaultClass: string =
  'px-4 py-1 text-white	bg-cyan-500/80 font-kanit font-base font-semibold rounded-full shadow-sm shadow-gray-700 hover:opacity-60 active:translate-y-px active:shadow-none';

export const PanButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;
  return (
    <button className={mergeClass} {...restProps}>
      {children}
    </button>
  );
};
