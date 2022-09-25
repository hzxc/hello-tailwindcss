import { ReactNode } from 'react';

export const ModalHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className='flex p-6 justify-between'>{children}</div>
);
