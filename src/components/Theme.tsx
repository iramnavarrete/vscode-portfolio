import { Box, Text } from '@chakra-ui/react';
import themesObject from '@/constants/themesObject';
import { ThemeName, ThemeObject } from '@/types';
import { useActiveThemeContext } from '@/context/ThemeContext';

function Theme({ id }: { id: string }) {
  const {
    author, description, icon: Icon, name,
  } = themesObject[id as keyof ThemeObject];
  const { activeTheme, setActiveTheme } = useActiveThemeContext();
  return (
    <section className="flex flex-1 flex-row overflow-hidden hover:bg-hover-explorer">
      <Box className="flex flex-1 flex-row p-2 overflow-hidden">
        <Box className="flex flex-col min-w-max p-2 justify-center">
          <Box>
            <Icon size={40} />
          </Box>
        </Box>
        <Box className="flex flex-1 flex-col p-1 flex-grow basis-full  overflow-hidden">
          <Text className="font-medium text-sm leading-6">{name}</Text>
          <Text className="font-light text-sm leading-5 max-two-lines">{description}</Text>
          <Box className="flex flex-row justify-between items-center mt-1">
            <Text className="font-[400] pl-[2px] text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis">{author}</Text>
            <button type="button" onClick={() => setActiveTheme(id as ThemeName)} className={`text-sm leading-4 py-[2px] px-[8px] ${activeTheme === (id as ThemeName) ? 'bg-accent-secondary' : 'bg-accent-color'}`}>
              {activeTheme === (id as ThemeName) ? 'Aplicado' : 'Aplicar' }
            </button>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Theme;
