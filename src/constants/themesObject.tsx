import { ThemeObject } from 'types';
import { OneDarkProIcon, ThemePalleteIcon } from '@/components/icons';

const themesObject: ThemeObject = {
  'one-dark-pro': {
    author: 'binaryify',
    description: "Atom's iconic One Dark theme for Visual Studio Code",
    icon: ({ size }) => <OneDarkProIcon size={size} />,
    name: 'One Dark Pro',
  },
  'dark-modern': {
    author: 'Microsoft',
    description: "Dark Modern theme, it's part of VS Code default themes",
    icon: ({ size }) => <ThemePalleteIcon size={size} />,
    name: 'Dark Modern',
  },
};

export default themesObject;
