import { Modal, ModalOverlay } from 'components/modal';
import React, { ReactNode } from 'react';
import { useToggle } from './useToggle';

export const useModal = () => {
  const [isOpen, open, close] = useToggle(false);

  const RenderModal = ({ children }: { children: ReactNode }) => {
    return (
      <React.Fragment>
        {isOpen ? (
          <></>
        ) : (
          <Modal>
            <ModalOverlay onClick={close} />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden bg-white'>
              {children}
            </div>
          </Modal>
        )}
      </React.Fragment>
    );
  };

  return { open, close, RenderModal };
};
