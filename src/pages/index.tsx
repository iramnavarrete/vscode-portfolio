import { PagesObject } from 'types';
import About from './About';
import Home from './Home';

const pages: PagesObject = {
  about: {
    fileExtension: 'html',
    Component: () => <About />,
  },
  home: {
    fileExtension: 'tsx',
    Component: () => <Home />,
  },
};

export default pages;
