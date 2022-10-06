import React, { HTMLAttributes } from 'react';

const defaultClass: string = 'px-2 py-0.5 border';

export const PanCard: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, children, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <div className={mergeClass} {...restProps}>
      {children}
    </div>
  );
};
