import { SidebarName, SidebarItem } from 'types';
import Explorer from '../Explorer';

const sidebarItems: { [propKey in SidebarName]: SidebarItem } = {
  explorer: {
    id: 0,
    Component: () => <Explorer />,
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
