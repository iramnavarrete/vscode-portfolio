import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {
  ActivityBar, Footer, TitleBar,
} from '@/components';
import { SidebarProvider } from './context/SidebarContext';
import SplitView from './components/SplitView';

function App() {
  return (
    <div className="min-h-screen min-w-screen m-0 p-0 flex flex-col overflow-hidden">
      <BrowserRouter>
        <TitleBar />
        <div className="flex flex-1 border-b-[1px] border-border">
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
