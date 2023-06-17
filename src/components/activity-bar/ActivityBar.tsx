import { ReactElement } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { EmailIcon, PagesIcon, SettingsIcon } from '../icons';
import Theme from '../../constants/Theme';
import { useActiveSidebarContext } from '../../context/SidebarContext';

interface ActivityBarItem {
  id: number,
  Icon: () => ReactElement,
  label: string,
  path: string
}

const activityBarTopItems: ActivityBarItem[] = [
  {
    id: 0,
    Icon: () => <PagesIcon />,
    label: 'Pages',
    path: 'explorer',
  },
  {
    id: 1,
    Icon: () => <EmailIcon />,
    label: 'Themes',
    path: 'themes',
  },
];
const activityBarBottomItems: ActivityBarItem[] = [
  {
    id: 10,
    Icon: () => <EmailIcon />,
    label: 'Themes',
    path: 'themes',
  },
  {
    id: 11,
    Icon: () => <SettingsIcon />,
    label: 'Settings',
    path: 'settings',
  },
];

function ActivityBar(): ReactElement {
  const { activeSidebar, setActiveSidebar } = useActiveSidebarContext();

  const renderIconsList = (iconList: ActivityBarItem[]): ReactElement => (
    <div className="flex flex-col">
      {iconList.map(({
        Icon, id, label, path,
      }) => (
        <Tooltip
          key={`activity-bar-element-top-${id}`}
          placement="right"
          hasArrow
          label={label}
          bg={Theme.colors.primary}
          border="1px"
          borderColor={Theme.colors.border}
          arrowShadowColor={Theme.colors.border}
        >
          <Box
            as="button"
            className={`${activeSidebar === path ? 'bg-active-activity-bar border-l-2 bg-active-activity-bar border-accent' : ''}`}
            // to={path}
            onClick={() => setActiveSidebar(path)}
          >
            <div className="flex flex-row justify-center py-2">
              <Icon />
            </div>
          </Box>
        </Tooltip>
      ))}
    </div>
  );

  return (
    <aside className="flex flex-col justify-between bg-primary min-w-[65px]">
      {renderIconsList(activityBarTopItems)}
      {renderIconsList(activityBarBottomItems)}
    </aside>
  );
}

export default ActivityBar;
