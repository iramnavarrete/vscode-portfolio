import { ReactElement } from 'react';
import {
  CoffeeIcon, DoubleCheckIcon, GitBranchIcon, NotificationsIcon,
} from './icons';

interface FooterItem {
  id: number,
  text?: string,
  Icon: () => ReactElement,
  action: 'none' | 'go-to-url',
  url?: string
}

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
    text: 'Prettier',
    Icon: () => <DoubleCheckIcon size={15} />,
    action: 'go-to-url',
    url: 'https://github.com/iramnavarrete/vscode-portfolio',
  },
  {
    id: 1,
    Icon: () => <NotificationsIcon size={15} />,
    action: 'none',
  },
];

function Footer(): ReactElement {
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
