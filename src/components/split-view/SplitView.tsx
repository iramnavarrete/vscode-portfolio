import Split from 'react-split';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Theme from '../../constants/Theme';
import Explorer from '../Explorer';
import { useActivePageContext } from '../../context/PageContext';
import pages from '../../pages';

function PageContent() {
  const { activePage } = useActivePageContext();

  const Component = pages[activePage].component;
  return <Component />;
}

function SplitView() {
  return (
    <Split
      className="flex flex-1"
      gutterStyle={() => ({ backgroundColor: Theme.colors.border })}
      sizes={[20, 80]}
    >
      <Box
        className="border-l-2 p-4 bg-primary border-border hidden md:block text-white min-w-[250px] md:min-w-[350px]"
      >
        <Routes>
          <Route path="/" element={<Explorer />} />
          <Route path="/contact" element={<h1>Contact me</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Box>
      <Box className="flex flex-1 bg-secondary">
        <PageContent />
      </Box>
    </Split>
  );
}

export default SplitView;
