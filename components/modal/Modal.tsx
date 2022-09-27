import { Portal } from 'components/portal';
import { useToggle } from 'hooks/useToggle';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '../pancake/modal/ModalOverlay';

export const Modal: React.FC<{ visible: boolean; children: ReactNode }> = ({
  visible,
  children,
}) => {
  const ModalDom = <div className='absolute top-0 left-0 right-0 bottom-0 z-50'>{children}</div>;
  if (!visible) return null;
  return <Portal>{ModalDom}</Portal>;
};
