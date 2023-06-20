import { FooterItem, Notification } from 'types';
import {
  ChakraUIIcon,
  CoffeeIcon,
  DoubleCheckIcon,
  ErrorIcon,
  GitBranchIcon,
  NotificationsIcon,
  TailwindIcon,
  WarningIcon,
} from '../components/icons';

const NOTIFICATION_ICON_ID = 10000;

const footerLeftItems: FooterItem[] = [
  {
    id: 0,
    text: 'main',
    Icon: () => <GitBranchIcon size={15} />,
    action: 'go-to-url',
    url: 'https://github.com/iramnavarrete/vscode-portfolio',
  },
  {
    id: 1,
    text: 'Buy me a coffee',
    Icon: () => <CoffeeIcon size={15} />,
    action: 'go-to-url',
    url: 'https://www.paypal.com',
  },
  {
    id: 2,
    text: '0',
    Icon: () => <ErrorIcon size={15} />,
    action: 'none',
    SecondIcon: () => <WarningIcon size={15} />,
    secondText: '0',
  },
];

const footerRightItems: FooterItem[] = [
  {
    id: 0,
    text: 'Tailwind CSS',
    Icon: () => <TailwindIcon size={18} />,
    action: 'go-to-url',
    url: 'https://tailwindcss.com/',
  },
  {
    id: 1,
    text: 'Chakra UI',
    Icon: () => <ChakraUIIcon size={18} />,
    action: 'go-to-url',
    url: 'https://chakra-ui.com/',
  },
  {
    id: 2,
    text: 'Prettier',
    Icon: () => <DoubleCheckIcon size={18} />,
    action: 'go-to-url',
    url: 'https://prettier.io/',
  },
  {
    id: NOTIFICATION_ICON_ID,
    Icon: () => <NotificationsIcon size={18} />,
    action: 'none',
  },
];

const toastsList: Notification[] = [
  {
    id: 1,
    title: 'Toast 1',
    description: 'Hola soy la notificacion 1',
  },
  {
    id: 2,
    title: 'Toast 2',
    description: 'Hola soy la notificación 2',
  },
];

export {
  footerLeftItems, footerRightItems, toastsList, NOTIFICATION_ICON_ID,
};
