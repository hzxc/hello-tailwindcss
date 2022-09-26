import { Portal } from 'components/portal';
import { ReactNode } from 'react';

export const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Portal>
      <div className='absolute top-0 left-0 right-0 bottom-0'>{children}</div>
    </Portal>
  );
};
