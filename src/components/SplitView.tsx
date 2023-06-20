import Split from 'react-split';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { PagesObject } from 'types';
import Theme from '../constants/Theme';
import { useActiveSidebarContext } from '../context/SidebarContext';
import sidebarItems from '../constants/sidebarItems';
import pagesObject from '../constants/pagesObject';
import { Tabs } from '.';

function SideBarContent() {
  const { activeSidebar } = useActiveSidebarContext();

  const { Component } = sidebarItems[activeSidebar];
  return <Component pagesObject={pagesObject || null} />;
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
        <SideBarContent />
      </Box>
      <Box className="flex flex-col flex-1 bg-secondary">
        <Tabs pagesObject={pagesObject} />
        <Routes>
          {Object.keys(pagesObject).map((key) => {
            const { Component } = pagesObject[key as keyof PagesObject];
            return <Route key={`page-${key}`} path={`/${key}`} element={<Component />} />;
          })}
          <Route path="*" element={<h1 className="text-white">Not found</h1>} />
        </Routes>
      </Box>
    </Split>
  );
}

export default SplitView;
