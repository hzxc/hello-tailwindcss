import { Transition } from 'components';
import { Portal } from 'components/portal';
import { useToggle } from 'hooks/useToggle';
import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '../pancake/modal/ModalOverlay';

export const Modal: React.FC<{ visible: boolean; children: ReactNode }> = ({
  visible,
  children,
}) => {
  const nodeRef = useRef(null);
  const ModalDom = (
    <div ref={nodeRef} className='absolute top-0 left-0 right-0 bottom-0 z-50'>
      {children}
    </div>
  );
  return (
    <Transition in={visible} timeout={200} nodeRef={nodeRef} classNames='zoom-in-center'>
      <Portal>{ModalDom}</Portal>
    </Transition>
  );
};
