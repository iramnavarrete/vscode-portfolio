import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import {
  ActivityBar, Footer, TitleBar,
} from '@/components';
import { SidebarProvider } from './context/SidebarContext';
import SplitView from './components/SplitView';
import { useActiveThemeContext } from './context/ThemeContext';

function App() {
  const { activeTheme } = useActiveThemeContext();
  return (
    <div className={`min-h-screen min-w-screen m-0 p-0 flex flex-col overflow-hidden theme-${activeTheme}`}>
      <BrowserRouter>
        <TitleBar />
        <div className="flex flex-1 border-b-[1px] border-gutter">
          <SidebarProvider>
            <ActivityBar />
            <SplitView />
          </SidebarProvider>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
