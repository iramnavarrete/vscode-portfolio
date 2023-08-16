import { ReactElement } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { ActivityBarItem } from 'types';
import {
  EmailIcon, PagesIcon, SettingsIcon, ThemeIcon,
} from '@/components/icons';
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
          border="1px"
          bg="#181818"
          borderColor="#232424"
          arrowShadowColor="#232424"
        >
          <Box
            as="button"
            className={`${activeSidebar === name ? 'bg-active-activity-bar-icon-background border-l-2 border-active-activity-bar-icon-accent opacity-100' : 'opacity-50'} hover:opacity-100`}
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
    <aside className="flex flex-col justify-between bg-activity-bar min-w-[65px]">
      {renderIconsList(activityBarTopItems)}
      {renderIconsList(activityBarBottomItems)}
    </aside>
  );
}

export default ActivityBar;
