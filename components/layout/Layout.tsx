import React, { ReactNode } from 'react';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='m-0 p-0'>
      {/* <div style={{ width: 'calc(100vw-256px)' }} className='min-h-screen bg-orange-200/60'> */}
      <div style={{ width: 'calc(100vw-256px)' }} className='min-h-screen bg-white'>
        {children}
      </div>
      {/* <div className=' fixed top-0 right-0 bottom-0 w-64 bg-orange-200'>Sidebar</div> */}
      <div className='fixed top-0 right-0 bottom-0 w-64 p-4 bg-zinc-200'>Sidebar</div>
    </div>
  );
};
