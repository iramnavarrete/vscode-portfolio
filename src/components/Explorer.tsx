import {
  useState, ReactElement,
} from 'react';
import { Box, Collapse } from '@chakra-ui/react';
import { DownArrowIcon, HTMLIcon, TypeScriptIcon } from './icons';
import { useActivePageContext } from '../context/PageContext';
import pages from '../pages';

interface ExplorerIcon {
  icon: () => ReactElement
}

const explorerIcons: { [propKey: string]: ExplorerIcon } = {
  html: {
    icon: () => <HTMLIcon size={14} />,
  },
  tsx: {
    icon: () => <TypeScriptIcon size={14} />,
  },
};

// Function to get icon with key fileExtension and return it
function renderIconExplorer(fileExtension: string) {
  const Icon = explorerIcons[fileExtension].icon;
  return <Icon />;
}

function Explorer() {
  const [show, setShow] = useState<boolean>(true);
  const { setActivePage, activePage } = useActivePageContext();

  const style = {
    transform: show ? 'rotate(0deg)' : 'rotate(-90deg)',
    transition: 'transform 150ms ease', // smooth transition
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
          {Object.keys(pages).map((key) => {
            const page = key.toString();
            const { fileExtension } = pages[page];
            return (
              <Box
                as="button"
                key={page}
                onClick={() => setActivePage(page)}
                className={`hover:bg-hover-explorer pl-8 ${activePage === page ? 'bg-active-explorer' : ''}`}
              >
                <Box className="flex flex-row items-center gap-1.5">
                  {renderIconExplorer(fileExtension)}
                  <p>{`${key}.${fileExtension}`}</p>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
}

export default Explorer;
