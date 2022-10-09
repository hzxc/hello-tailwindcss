import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Drizzle } from '@drizzle/store';
import PancakeRouter from 'contracts/pancake/bsc/PancakeRouter.json';

interface AppContextProps {
  contextName: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);
AppContext.displayName = 'AppContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppContext.Provider value={{ contextName: 'AppContext' }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used in AppContext.Provider');
  }
  return context;
};
