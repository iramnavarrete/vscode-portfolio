import { ReactElement } from 'react';

export interface Page {
  fileExtension: string,
  Component: () => ReactElement;
}
