import Split from 'react-split';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Theme from '../../constants/Theme';
import { useActiveSidebarContext } from '../../context/SidebarContext';
import sidebarItems from './sidebarItems';
import Home from '../../pages/Home';
import About from '../../pages/About';

function SideBarContent() {
  const { activeSidebar } = useActiveSidebarContext();

  const { Component } = sidebarItems[activeSidebar];
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
        {/* <p>tmp container</p> */}
        <SideBarContent />
      </Box>
      <Box className="flex flex-1 bg-secondary">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Box>
    </Split>
  );
}

export default SplitView;
