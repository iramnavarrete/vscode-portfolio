import Split from 'react-split';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { PagesObject } from 'types';
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
      sizes={[20, 80]}
    >
      <Box
        className="border-l-2 bg-sidebar-background border-border hidden lg:block text-white w-[350px] min-w-[250px]"
      >
        <SideBarContent />
      </Box>
      <Box className="flex flex-col flex-1 bg-page-content-background min-w-[450px]">
        <Tabs pagesObject={pagesObject} />
        <Routes>
          {Object.keys(pagesObject).map((key) => {
            const { Component } = pagesObject[key as keyof PagesObject];
            return <Route key={`page-${key}`} path={`/${key === 'home' ? '' : key}`} element={<Component />} />;
          })}
          <Route path="*" element={<h1 className="text-white">Not found</h1>} />
        </Routes>
      </Box>
    </Split>
  );
}

export default SplitView;
