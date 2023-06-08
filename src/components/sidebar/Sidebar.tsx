import { Link, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { EmailIcon, PagesIcon, SettingsIcon } from '../icons';
import Theme from '../../constants/Theme';

interface SidebarItem {
  id: number,
  Icon: () => ReactElement,
  label: string,
  path: string
}

const sidebarTopItems: SidebarItem[] = [
  {
    id: 0,
    Icon: () => <PagesIcon />,
    label: 'Pages',
    path: '/',
  },
  {
    id: 1,
    Icon: () => <EmailIcon />,
    label: 'Contact me',
    path: '/contact',
  },
];
const sidebarBottomItems: SidebarItem[] = [
  {
    id: 2,
    Icon: () => <SettingsIcon />,
    label: 'Settings',
    path: '/settings',
  },
];

function Sidebar(): ReactElement {
  const { pathname } = useLocation();

  const renderIconsList = (iconList: SidebarItem[]): ReactElement => (
    <div className="flex flex-col">
      {iconList.map(({
        Icon, path, id, label,
      }) => (
        <Tooltip
          key={`sidebarelement-top-${id}`}
          placement="right"
          hasArrow
          label={label}
          bg={Theme.colors.primary}
          border="1px"
          borderColor={Theme.colors.border}
          arrowShadowColor={Theme.colors.border}
        >
          <Link
            className={`${pathname === path ? 'bg-active-sidebar border-l-2 bg-active-sidebar border-accent' : ''}`}
            to={path}
          >
            <div className="flex flex-row justify-center py-2">
              <Icon />
            </div>
          </Link>
        </Tooltip>
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
