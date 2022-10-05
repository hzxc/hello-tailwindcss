import React, { ButtonHTMLAttributes } from 'react';

const defaultClass: string = 'px-2 py-0.5 text-xs font-normal rounded-full border-2';

export const SimpleButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      {children}
    </button>
  );
};
