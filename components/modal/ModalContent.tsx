import React, { HTMLAttributes } from 'react';

interface IModalContentProps {
  width?: string;
}

type ModalContentProps = IModalContentProps & HTMLAttributes<HTMLDivElement>;

const defaultInitialProps: IModalContentProps = {
  width: '100%',
};

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { width, children, ...restProps } = { ...defaultInitialProps, ...props };

  return (
    <div className='w-full flex justify-center absolute z-50' {...restProps}>
      <div style={{ width: '100%', maxWidth: width }}>{children}</div>
    </div>
  );
};
