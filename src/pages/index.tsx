import { Page, PageName } from 'types';
import About from './About';
import Home from './Home';

const pages: { [propKey in PageName]: Page } = {
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
