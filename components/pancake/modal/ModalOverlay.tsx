import { HTMLAttributes, ReactNode } from 'react';

export const ModalOverlay: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { onClick, children, ...restProps } = { ...props };
  return (
    <div
      className='absolute top-0 left-0 right-0 bottom-0 bg-purple-900/20'
      onClick={onClick}
      {...restProps}
    >
      {children}
    </div>
  );
};
