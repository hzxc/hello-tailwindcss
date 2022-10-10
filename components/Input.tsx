import React, { InputHTMLAttributes } from 'react';

const defaultClass: string =
  'h-14 px-4 w-full pb-4 font-normal bg-[#eeeaf4] ring ring-[#eeeaf4] focus-visible:outline-0 rounded-2xl text-right placeholder:text-[#7a6eaa] focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <input type='text' className={mergeClass} {...restProps}>
      {children}
    </input>
  );
};
