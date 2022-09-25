import { ReactNode } from 'react';

export const ModalFooter: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className='flex pt-2 px-6 pb-4 justify-end'>{children}</div>
);
