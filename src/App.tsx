import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar, SplitView } from './components';

function App() {
  return (
    <div className="flex items-stretch bg-grey-lighter min-h-screen">
      <BrowserRouter>
        <Sidebar />
        <SplitView />
      </BrowserRouter>
    </div>
  );
}

export default App;
