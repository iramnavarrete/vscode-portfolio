import {
  SidebarItem, SidebarItemProps, SidebarName,
} from 'types';
import { Box } from '@chakra-ui/react';
import { Explorer, Theme } from '@/components';
import themesObject from './themesObject';

function ThemesComponent() {
  return (
    <section>
      <Box className="flex flex-1 flex-row py-3 pl-7">
        THEMES
      </Box>
      {Object.keys(themesObject).map((id) => <Theme key={id} id={id} />)}
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
