/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, ReactNode, useState,
} from 'react';
import { ActivePageContextType } from './types';

const ActivePageContext = createContext<ActivePageContextType | null>(null);

export const useActivePageContext = () => useContext(ActivePageContext) as ActivePageContextType;

function ActivePageProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<string>('about');

  const value = {
    activePage,
    setActivePage,
  };
  return (
    <ActivePageContext.Provider value={value}>
      {children}
    </ActivePageContext.Provider>
  );
}

export { ActivePageProvider };
