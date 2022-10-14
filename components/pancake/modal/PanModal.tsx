import { Modal } from 'components/modal';
import { useLayoutEffect } from 'react';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { useElementSize } from 'use-element-size';
import { ModalOverlay } from './ModalOverlay';

export const PanModal: React.FC<{
  visible: boolean;
  close: () => void;
  children: ReactNode;
}> = ({ visible, close, children }) => {
  const [refHeight, setRefHeight] = useState(0);

  const ref = useElementSize((size) => {
    if (size && size.height > 0) {
      setRefHeight(size.height);
    }
  });

  return (
    <Modal visible={visible}>
      <ModalOverlay onClick={close} />
      <div
        ref={ref}
        style={{ top: `max(calc((100vh - ${refHeight}px)/2),0px)` }}
        className={`absolute left-1/2 -translate-x-1/2 max-h-screen font-kanit text-base`}
      >
        {children}
      </div>
    </Modal>
  );
};
