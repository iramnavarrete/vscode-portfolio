import { useState } from 'react';
import { Box, Collapse } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  ExplorerIconsObject, FileExtension, PagesObject, SidebarItemProps,
} from 'types';
import { DownArrowIcon, HTMLIcon, TypeScriptIcon } from './icons';

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
      <Box
        onClick={() => setShow(!show)}
        className="flex flex-row items-center text-sm cursor-pointer"
      >
        <DownArrowIcon style={style} size={15} />
        <p className="ml-2">EXPLORER</p>
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
                className={`hover:bg-hover-explorer pl-8 ${pathname === `/${key}` || (key === 'home' && pathname === '/') ? 'bg-active-explorer' : ''}`}
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
  );
}

export default Explorer;
