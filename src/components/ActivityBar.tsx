import { ReactElement } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { ActivityBarItem } from 'types';
import {
  EmailIcon, PagesIcon, SettingsIcon, ThemeIcon,
} from './icons';
import Theme from '../constants/Theme';
import { useActiveSidebarContext } from '../context/SidebarContext';

const activityBarTopItems: ActivityBarItem[] = [
  {
    id: 0,
    Icon: () => <PagesIcon />,
    label: 'Pages',
    name: 'explorer',
  },
  {
    id: 1,
    Icon: () => <ThemeIcon />,
    label: 'Themes',
    name: 'themes',
  },
];
const activityBarBottomItems: ActivityBarItem[] = [
  {
    id: 10,
    Icon: () => <EmailIcon />,
    label: 'Contact me',
    name: 'contact',
  },
  {
    id: 11,
    Icon: () => <SettingsIcon />,
    label: 'Settings',
    name: 'settings',
  },
];

function ActivityBar(): ReactElement {
  const { activeSidebar, setActiveSidebar } = useActiveSidebarContext();

  const renderIconsList = (iconList: ActivityBarItem[]): ReactElement => (
    <div className="flex flex-col">
      {iconList.map(({
        Icon, id, label, name,
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
            className={`${activeSidebar === name ? 'bg-active-activity-bar border-l-2 bg-active-activity-bar border-accent' : ''}`}
            onClick={() => setActiveSidebar(name)}
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
