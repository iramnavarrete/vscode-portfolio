import { PagesObject } from 'types';
import { About, Home } from '../pages';

const pagesObject: PagesObject = {
  home: {
    fileExtension: 'tsx',
    Component: () => <Home />,
  },
  about: {
    fileExtension: 'html',
    Component: () => <About />,
  },
};

export default pagesObject;
