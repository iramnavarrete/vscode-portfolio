import {
  SidebarItem, SidebarItemProps, SidebarName,
} from 'types';
import { Explorer } from '@/components';

const sidebarItems: { [propKey in SidebarName]: SidebarItem } = {
  explorer: {
    id: 0,
    Component: ({ pagesObject }:SidebarItemProps) => <Explorer pagesObject={pagesObject} />,
  },
  themes: {
    id: 1,
    Component: () => <h1>Soy el componente temas</h1>,
  },
  settings: {
    id: 2,
    Component: () => <h1>Soy el componente configuración</h1>,
  },
  contact: {
    id: 3,
    Component: () => <h1>Soy el componente contacto</h1>,
  },
};

export default sidebarItems;
