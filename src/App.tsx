import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {
  Sidebar, SplitView, Footer, TitleBar,
} from './components';
import { ActivePageProvider } from './context/PageContext';

function App() {
  return (
    <div className="min-h-screen min-w-screen m-0 p-0 flex flex-col">
      <BrowserRouter>
        <TitleBar />
        <div className="flex flex-1 border-b-[1px] border-border">
          <Sidebar />
          <ActivePageProvider>
            <SplitView />
          </ActivePageProvider>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
