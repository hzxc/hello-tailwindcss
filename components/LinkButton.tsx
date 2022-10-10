import React, { AnchorHTMLAttributes } from 'react';

const defaultClass: string =
  'text-sm text-purple-600 font-semibold hover:opacity-70 hover:underline';

export const LinkButton: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <a className={mergeClass} {...restProps}>
      {children}
    </a>
  );
};
