/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, ReactNode, useState,
} from 'react';
import { SidebarContextType } from './types';

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useActiveSidebarContext = () => useContext(SidebarContext) as SidebarContextType;

function SidebarProvider({ children }: { children: ReactNode }) {
  const [activeSidebar, setActiveSidebar] = useState<string>('explorer');

  const value: SidebarContextType = {
    activeSidebar,
    setActiveSidebar,
  };
  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider };
