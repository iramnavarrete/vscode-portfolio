import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar, SplitView } from './components';
import Footer from './components/Footer';
import Theme from './constants/Theme';

function App() {
  return (
    <div className="min-h-screen min-w-screen m-0 p-0 flex flex-col">
      <div className="flex flex-1 border-b-[1px]" style={{ borderColor: Theme.COLORS.BORDER }}>
        <BrowserRouter>
          <Sidebar />
          <SplitView />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
