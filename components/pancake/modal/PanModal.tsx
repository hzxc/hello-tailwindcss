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
  return (
    <Modal visible={visible}>
      <div
        onClick={close}
        className={`w-full h-full flex items-center justify-center bg-[#280d5f99]/60 font-kanit text-base`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};
