// import { IconButton } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { CSSProperties, ReactElement } from 'react';
import ContactIcon from '../icons/ContactIcon';
import Theme from '../../constants/Theme';
import PagesIcon from '../icons/PagesIcon';
import SettingsIcon from '../icons/SettingsIcon';

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
    Icon: () => <ContactIcon />,
    path: '/contact',
  },
];
const sidebarBottomItems: SidebarIcon[] = [
  {
    Icon: () => <ContactIcon />,
    path: '/',
  },
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
        borderLeftColor: Theme.COLORS.ACCENT_COLOR,
        borderLeftWidth: 2,
        backgroundColor: Theme.COLORS.ACTIVE_SIDEBAR,
      };
    }
    return {};
  };

  const renderIconsList = (iconList: SidebarIcon[]): ReactElement => (
    <div className="flex flex-col">
      {iconList.map(({ Icon, path }) => (
        <Link
          style={activeStyles(path)}
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
    <aside className="flex flex-col justify-between" style={{ backgroundColor: Theme.COLORS.PRIMARY, minWidth: '65px' }}>
      {renderIconsList(sidebarTopItems)}
      {renderIconsList(sidebarBottomItems)}
    </aside>
  );
}

export default Sidebar;
