import { Portal } from 'components/portal';
import { ReactNode } from 'react';

export const Modal = ({ children }: { children: ReactNode }) => (
  <Portal>
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-violet-500/35'>{children}</div>
  </Portal>
);
