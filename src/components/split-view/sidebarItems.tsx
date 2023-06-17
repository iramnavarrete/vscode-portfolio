import { SidebarItem } from '../../types/types';
import Explorer from '../Explorer';

const sidebarItems: { [propKey: string]: SidebarItem } = {
  explorer: {
    id: 0,
    Component: () => <Explorer />,
  },
  themes: {
    id: 1,
    Component: () => <h1>Soy el componente temas</h1>,
  },
  settings: {
    id: 1,
    Component: () => <h1>Soy el componente configuración</h1>,
  },
};

export default sidebarItems;
