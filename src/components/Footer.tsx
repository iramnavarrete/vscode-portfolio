import { ReactElement, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import {
  ChakraUIIcon,
  CoffeeIcon, DoubleCheckIcon, GitBranchIcon, NotificationsIcon, TailwindIcon,
} from './icons';
import NotificationToast from './NotificationToast';

interface FooterItem {
  id: number,
  text?: string,
  Icon: () => ReactElement,
  action: 'none' | 'go-to-url',
  url?: string
}

interface Notification {
  id: number,
  title?: string,
  description?: string
}

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
    action: 'none',
    url: 'https://github.com/iramnavarrete/vscode',
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

function Footer(): ReactElement {
  const toast = useToast();

  const showToasts = () => {
    for (let i = 0; i < toastsList.length; i += 1) {
      const { id, description, title } = toastsList[i];
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 9000,
          render: () => (
            <NotificationToast
              closeToast={() => toast.close(id)}
              title={title || ''}
              description={description || ''}
            />
          ),
          // Le colocamos margen al toast del fondo
          containerStyle: { marginBottom: i === toastsList.length - 1 ? 10 : 2, backgroundColor: 'red' },
        });
      }
    }
  };

  const renderItemsList = (itemsList: FooterItem[]): ReactElement => (
    <>
      {itemsList.map(({
        Icon, id, url, text, action,
      }) => (
        <a
          key={`footer-item-${id}`}
          href={`${action !== 'none' && url ? url : '#'}`}
          target={`${action !== 'none' && url ? '_blank' : '_self'}`}
          className=" mx-2 px-2 flex flex-row items-center w-max hover:bg-accent"
          rel="noreferrer"
          onClick={() => {
            if (id === NOTIFICATION_ICON_ID) {
              showToasts();
            }
          }}
        >
          <Icon />
          {text && <p className="text-white text-sm pl-1">{text}</p>}
        </a>
      ))}
    </>
  );

  return (
    <footer className="px-2 h-6 flex flex-row content-between bg-primary">
      <div className="flex flex-grow">
        {renderItemsList(footerLeftItems)}
      </div>
      <div className="flex">
        {renderItemsList(footerRightItems)}
      </div>
    </footer>
  );
}

export default Footer;
