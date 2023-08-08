import { Box } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ExplorerIconsObject, FileExtension, PagesObject } from 'types';
import { HTMLIcon, TypeScriptIcon } from '@/components/icons';

const explorerIcons: ExplorerIconsObject = {
  html: {
    Icon: () => <HTMLIcon size={14} />,
  },
  tsx: {
    Icon: () => <TypeScriptIcon size={14} />,
  },
};

// TODO change it to a reusable component to use in Explorer
// Function to get icon with key fileExtension and return it
function renderIconExplorer(fileExtension: FileExtension) {
  const { Icon } = explorerIcons[fileExtension];
  return <Icon />;
}
function Tabs({ pagesObject }:{ pagesObject: PagesObject }) {
  const { pathname } = useLocation();
  return (
    <Box className="flex flex-row">
      <Box className="flex flex-row flex-1 border-b-[1px] border-border">
        {/* Iterate object pages to get list of pages and render all of them */}
        {Object.keys(pagesObject).map((key) => {
          const { fileExtension } = pagesObject[key as keyof PagesObject];
          return (
            <Link
              key={key}
              to={`/${key === 'home' ? '' : key}`}
              className={`hover:bg-hover-explorer px-4 py-2 text-white ${pathname === `/${key}` || (key === 'home' && pathname === '/') ? 'bg-active-explorer border-t-[1px] border-accent' : 'border-x-[1px] border-border'}`}
            >
              <Box className="flex flex-row items-center gap-1.5">
                {renderIconExplorer(fileExtension)}
                <p>{`${key}.${fileExtension}`}</p>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default Tabs;
