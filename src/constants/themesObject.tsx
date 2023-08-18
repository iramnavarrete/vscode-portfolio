import { ThemeObject } from 'types';
import { OneDarkProIcon, ThemePalleteIcon } from '@/components/icons';

const themesObject: ThemeObject = {
  'one-dark-pro': {
    author: 'binaryify',
    description: "Atom's iconic One Dark theme for Visual Studio Code",
    icon: () => <OneDarkProIcon size={50} />,
  },
  'dark-modern': {
    author: 'Microsoft',
    description: 'Tema oscuro moderno de los temas por defecto de VS Code',
    icon: () => <ThemePalleteIcon size={50} />,
  },
};

export default themesObject;
