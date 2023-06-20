import { PagesObject } from 'types';
import { About, Home } from '../pages';

const pagesObject: PagesObject = {
  about: {
    fileExtension: 'html',
    Component: () => <About />,
  },
  home: {
    fileExtension: 'tsx',
    Component: () => <Home />,
  },
};

export default pagesObject;
