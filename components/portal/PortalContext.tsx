import { createContext, useContext } from 'react';

interface PortalContextProps {
  container: HTMLDivElement;
}

const PortalContext = createContext<PortalContextProps | undefined>(undefined);
PortalContext.displayName = 'PortalContext';

const { Provider, Consumer } = PortalContext;

export { Provider as PortalProvider, Consumer as PortalConsumer, PortalContext };

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used in PortalProvider');
  }
  return context;
};
