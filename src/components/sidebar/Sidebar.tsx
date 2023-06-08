import { Link, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { EmailIcon, PagesIcon, SettingsIcon } from '../icons';

interface SidebarItem {
  Icon: () => ReactElement,
  path: string
}

const sidebarTopItems: SidebarItem[] = [
  {
    Icon: () => <PagesIcon />,
    path: '/',
  },
  {
    Icon: () => <EmailIcon />,
    path: '/contact',
  },
];
const sidebarBottomItems: SidebarItem[] = [
  {
    Icon: () => <SettingsIcon />,
    path: '/settings',
  },
];

function Sidebar(): ReactElement {
  const { pathname } = useLocation();

  const renderIconsList = (iconList: SidebarItem[]): ReactElement => (
    <div className="flex flex-col">
      {iconList.map(({ Icon, path }) => (
        <Link
          className={`${pathname === path ? 'bg-active-sidebar border-l-2 bg-active-sidebar border-accent' : ''}`}
          to={path}
          key={path}
        >
          <div className="flex flex-row justify-center py-2">
            <Icon />
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <aside className="flex flex-col justify-between bg-primary min-w-[65px]">
      {renderIconsList(sidebarTopItems)}
      {renderIconsList(sidebarBottomItems)}
    </aside>
  );
}

export default Sidebar;
