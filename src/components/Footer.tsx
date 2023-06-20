import { ReactElement } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { FooterItem } from 'types';
import NotificationToast from './NotificationToast';
import {
  NOTIFICATION_ICON_ID, footerLeftItems, footerRightItems, toastsList,
} from '../constants/footerItems';

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
        Icon, id, url, text, action, SecondIcon, secondText,
      }) => (
        <a
          key={`footer-item-${id}`}
          href={`${action !== 'none' && url ? url : '#'}`}
          target={`${action !== 'none' && url ? '_blank' : '_self'}`}
          className=" mx-2 px-2 flex flex-row w-max hover:bg-accent text-white text-sm"
          rel="noreferrer"
          onClick={() => {
            if (id === NOTIFICATION_ICON_ID) {
              showToasts();
            }
          }}
        >
          <Box className="flex flex-row items-center">
            <Icon />
            {text && <p className="pl-1">{text}</p>}
          </Box>
          {SecondIcon
            && (
            <Box className="flex flex-row ml-2 items-center">
              <SecondIcon />
              {secondText && <p className="pl-1">{secondText}</p>}
            </Box>
            )}
        </a>
      ))}
    </>
  );

  return (
    <footer className="px-2 min-h-6 flex flex-row flex-wrap content-between bg-primary">
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
