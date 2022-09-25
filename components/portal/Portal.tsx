import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PortalContext, PortalProvider } from './PortalContext';

export const Portal = ({ children }: { children: ReactNode }) => {
  const { container } = useContext(PortalContext);
  let containerRef = useRef<HTMLDivElement | null>(null);
  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
    containerRef.current.setAttribute('role', 'portal');

    container.appendChild(containerRef.current);
  }

  useEffect(() => {
    return function cleanup() {
      if (containerRef.current) {
        container.removeChild(containerRef.current);
      }
    };
  }, [container]);

  return (
    <PortalProvider
      value={{
        container: containerRef.current,
      }}
    >
      {createPortal(children, containerRef.current)}
    </PortalProvider>
  );
};
