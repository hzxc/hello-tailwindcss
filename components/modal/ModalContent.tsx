import React, { HTMLAttributes } from 'react';

interface IModalContentProps {
  width?: string;
}

type ModalContentProps = IModalContentProps & HTMLAttributes<HTMLElement>;

const defaultInitialProps: IModalContentProps = {
  width: '100%',
};

export const ModalContent: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
  const { children, ...restProps } = { ...props };

  return (
    <div className='absolute' {...restProps}>
      {/* <div className='bg-white' style={{ width: width, maxWidth: width }}> */}
      {children}
      {/* </div> */}
    </div>
  );
};
