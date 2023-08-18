import { Box, Text } from '@chakra-ui/react';
import themesObject from '@/constants/themesObject';
import { ThemeName, ThemeObject } from '@/types';
import { useActiveThemeContext } from '@/context/ThemeContext';

function Theme({ name }: { name: string }) {
  const { author, description, icon: Icon } = themesObject[name as keyof ThemeObject];
  const { activeTheme, setActiveTheme } = useActiveThemeContext();
  return (
    <section className="flex flex-1 flex-row overflow-hidden">
      <Box className="flex flex-1 flex-row p-2 overflow-hidden">
        <Box className="flex flex-col min-w-max p-2 justify-center">
          <Box
            className="w-[50px] h-[50px]"
          >
            <Icon />
          </Box>
        </Box>
        <Box className="flex flex-1 flex-col p-1 flex-grow basis-full  overflow-hidden">
          <Text className="font-medium text-md leading-8">{name}</Text>
          <Text className="font-light text-md leading-5 whitespace-nowrap overflow-hidden text-ellipsis">{description}</Text>
          <Box className="flex flex-row justify-between items-center mt-1">
            <Text className="font-[400] pl-[2px] text-md leading-5 whitespace-nowrap overflow-hidden text-ellipsis">{author}</Text>
            <button type="button" onClick={() => setActiveTheme(name as ThemeName)} className={`text-sm leading-4 py-[2px] px-[8px] ${activeTheme === (name as ThemeName) ? 'bg-[red]' : 'bg-accent-color'}`}>
              {activeTheme === (name as ThemeName) ? 'Aplicado' : 'Aplicar' }
            </button>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Theme;
