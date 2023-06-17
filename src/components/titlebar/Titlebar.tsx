import { Box, Tooltip } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { TitleItem } from 'types';
import {
  ExplorerToggleIcon, NavigationArrowIcon, SearchIcon, VSCodeIcon,
} from '../icons';
import Theme from '../../constants/Theme';

const titleItems: TitleItem[] = [
  { id: 0, text: 'File' },
  { id: 1, text: 'Edit' },
  { id: 2, text: 'View' },
  { id: 3, text: 'Go' },
  { id: 6, text: 'Help' },
];

function TitleBar() {
  const navigate = useNavigate();
  return (
    <Box className="bg-primary border-b-border border-b-[1px] flex flex-row p-1 text-white">
      <Box className="p-1 flex flex-row items-center">
        <VSCodeIcon size={20} />
      </Box>
      <Box className="hidden md:flex flex-row items-center flex-grow basis-0">
        {titleItems.map(({ id, text }) => (
          <p
            key={`titlebar-item-${id}`}
            className="px-2 cursor-default hover:bg-border rounded-md"
          >
            {text}
          </p>
        ))}
      </Box>
      <Box className="flex flex-row gap-2 items-center justify-center flex-grow basis-0 md:flex-grow-0 md:basis-full">
        <Tooltip
          placement="bottom"
          hasArrow
          label="Go back"
          bg={Theme.colors.primary}
          border="1px"
          borderColor={Theme.colors.border}
          arrowShadowColor={Theme.colors.border}
        >
          <Box as="button" onClick={() => navigate(-1)} className="p-1 cursor-default hover:bg-border rounded-md">
            <NavigationArrowIcon size={15} className="rotate-[-90deg]" />
          </Box>
        </Tooltip>
        <Tooltip
          placement="bottom"
          hasArrow
          label="Go forward"
          bg={Theme.colors.primary}
          border="1px"
          borderColor={Theme.colors.border}
          arrowShadowColor={Theme.colors.border}
        >
          <Box as="button" onClick={() => navigate(1)} className="p-1 cursor-default hover:bg-border rounded-md">
            <NavigationArrowIcon size={15} className="rotate-[90deg]" />
          </Box>
        </Tooltip>
        <Box className="flex flex-row mr-4 p-[2px] items-center md:flex-grow md:basis-0 border-[1px] max-w-[500px] rounded-lg px-4 border-border border bg-searchbar">
          <Box className="flex flex-row items-center gap-[5px] justify-center text-sm w-full">
            <SearchIcon size={20} className="rotate-90" />
            <p>Iram Navarrete - VS Code Portfolio</p>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-row gap-1.5 md:flex-grow md:basis-0 justify-end items-center">
        <Tooltip
          placement="bottom"
          hasArrow
          label="Alternate explorer view"
          bg={Theme.colors.primary}
          border="1px"
          className="hidden md:block"
          borderColor={Theme.colors.border}
          arrowShadowColor={Theme.colors.border}
        >
          <Box as="button" className="mr-2 hidden md:block">
            <ExplorerToggleIcon size={20} />
          </Box>
        </Tooltip>
        <Box className="w-4 h-4 rounded-full bg-[#f1fa8c]" />
        <Box className="w-4 h-4 rounded-full bg-[#50fa7b]" />
        <Box className="w-4 h-4 rounded-full bg-[#ff5555]" />
      </Box>
    </Box>
  );
}

export default TitleBar;
