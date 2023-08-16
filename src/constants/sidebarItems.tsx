import {
  SidebarItem, SidebarItemProps, SidebarName,
} from 'types';
import { Button } from '@chakra-ui/react';
import { Explorer } from '@/components';
import { useActiveThemeContext } from '@/context/ThemeContext';

function ThemesComponent() {
  const { setActiveTheme } = useActiveThemeContext();
  return (
    <div>
      <Button onClick={() => setActiveTheme('one-dark-pro')}>
        Theme One Dark Pro
      </Button>
      <Button onClick={() => setActiveTheme('dark-modern')}>
        Theme Dark Modern
      </Button>
    </div>
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
