import { useState } from 'react';
import { Box, Collapse } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  ExplorerIconsObject, FileExtension, PagesObject, SidebarItemProps,
} from 'types';
import { DownArrowIcon, HTMLIcon, TypeScriptIcon } from '@/components/icons';

const explorerIcons: ExplorerIconsObject = {
  html: {
    Icon: () => <HTMLIcon size={14} />,
  },
  tsx: {
    Icon: () => <TypeScriptIcon size={14} />,
  },
};

// Function to get icon with key fileExtension and return it
function renderIconExplorer(fileExtension: FileExtension) {
  const { Icon } = explorerIcons[fileExtension];
  return <Icon />;
}

function Explorer({ pagesObject }: SidebarItemProps) {
  const [show, setShow] = useState<boolean>(true);
  const { pathname } = useLocation();

  const style = {
    transform: show ? 'rotate(0deg)' : 'rotate(-90deg)',
    transition: 'transform 150ms ease',
  };
  return (
    <Box>
      <Box className="flex flex-1 flex-row py-3 pl-7">
        EXPLORER
      </Box>
      <Box className="px-4">
        <Box
          onClick={() => setShow(!show)}
          className="flex flex-row items-center text-sm cursor-pointer"
        >
          <DownArrowIcon style={style} size={15} />
          <p className="ml-2 font-semibold">PORFOLIO</p>
        </Box>
        <Collapse in={show} animateOpacity>
          <Box className="flex flex-col">
            {/* Iterate object pages to get list of pages and render all of them */}
            { pagesObject && Object.keys(pagesObject).map((key) => {
              const { fileExtension } = pagesObject[key as keyof PagesObject];
              return (
                <Link
                  key={key}
                  to={`/${key === 'home' ? '' : key}`}
                  className={`pl-8 ${pathname === `/${key}` || (key === 'home' && pathname === '/') ? 'bg-active-explorer' : 'hover:bg-hover-explorer'}`}
                >
                  <Box className="flex flex-row items-center gap-1.5">
                    {renderIconExplorer(fileExtension)}
                    <p>{`${key}.${fileExtension}`}</p>
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

export default Explorer;
