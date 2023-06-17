import { ReactElement } from 'react';

export interface SidebarItem {
  id: number;
  Component: () => ReactElement;
}
