import About from './About';
import Home from './Home';
import { Page } from './types';

const pages: { [propKey: string]: Page } = {
  about: {
    // page: 'about',
    fileExtension: 'html',
    component: () => <About />,
  },
  home: {
    // page: 'home',
    fileExtension: 'tsx',
    component: () => <Home />,
  },
};

export default pages;
