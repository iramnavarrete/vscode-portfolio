import { PageArray } from 'types';
import About from './About';
import Home from './Home';

const pages: PageArray = {
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
