import {
  SidebarItem, SidebarItemProps, SidebarName, ThemeName,
} from 'types';
import { Explorer, Theme } from '@/components';
import { useActiveThemeContext } from '@/context/ThemeContext';
import themesObject from './themesObject';

function ThemesComponent() {
  return (
    <section>
      {Object.keys(themesObject).map((key) => <Theme key={key} name={key} />)}
    </section>
  );
}

const sidebarItems: { [propKey in SidebarName]: SidebarItem } = {
  explorer: {
    id: 0,
    Component: ({ pagesObject }:SidebarItemProps) => <Explorer pagesObject={pagesObject} />,
  },
  themes: {
    id: 1,
    Component: () => <ThemesComponent />,
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
