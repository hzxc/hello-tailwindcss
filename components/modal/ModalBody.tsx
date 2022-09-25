import { ReactNode } from 'react';

export const ModalBody: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className='pt-2 px-6 pb-4'>{children}</div>
);
