import { Page } from 'types';
import About from './About';
import Home from './Home';

const pages: { [propKey: string]: Page } = {
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
