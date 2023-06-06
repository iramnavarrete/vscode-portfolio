import { Link, useLocation } from 'react-router-dom';
import { CSSProperties, ReactElement } from 'react';
import Theme from '../../constants/Theme';
import { EmailIcon, PagesIcon, SettingsIcon } from '../icons';

interface SidebarIcon {
  Icon: () => ReactElement,
  path: string
}

const sidebarTopItems: SidebarIcon[] = [
  {
    Icon: () => <PagesIcon />,
    path: '/',
  },
  {
    Icon: () => <EmailIcon />,
    path: '/contact',
  },
];
const sidebarBottomItems: SidebarIcon[] = [
  {
    Icon: () => <SettingsIcon />,
    path: '/settings',
  },
];

function Sidebar(): ReactElement {
  const { pathname } = useLocation();

  const activeStyles = (path: string): CSSProperties => {
    if (pathname === path) {
      return {
        borderLeftColor: Theme.colors.accentColor,
        borderLeftWidth: 2,
        backgroundColor: Theme.colors.activeSidebar,
      };
    }
    return {};
  };

  const renderIconsList = (iconList: SidebarIcon[]): ReactElement => (
    <div className="flex flex-col">
      {iconList.map(({ Icon, path }) => (
        <Link
          style={activeStyles(path)}
          className={`${pathname === path ? 'bg-activeSidebar border-l-2 bg-activeSidebar' : ''}`}
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
