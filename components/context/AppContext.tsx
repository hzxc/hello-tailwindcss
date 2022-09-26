import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface AppContextProps {
  container: HTMLElement | undefined;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);
AppContext.displayName = 'AppContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [container, setContainer] = useState<HTMLElement>();
  useEffect(() => {
    setContainer(document.body);
  }, []);
  return <AppContext.Provider value={{ container }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('usePortal must be used in PortalProvider');
  }
  return context;
};
