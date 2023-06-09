import { ReactElement, ComponentProps } from 'react';

type SidebarItemProps = { pagesObject?: PagesObject };

export type SidebarItem = {
  id: number;
  Component: ({ pagesObject }: SidebarItemProps) => ReactElement;
};

export type ExplorerIcon = {
  Icon: () => ReactElement;
};

export type ExplorerIconsObject = { [propKey in FileExtension]: ExplorerIcon };

export type NotificationProps = {
  title: string;
  description?: string;
  closeToast: () => void;
};

export type ActivityBarItem = {
  id: number;
  Icon: () => ReactElement;
  label: string;
  name: SidebarName;
};

export type FooterItem = {
  id: number;
  text?: string;
  Icon: () => ReactElement;
  action: 'none' | 'go-to-url';
  url?: string;
  secondText?: string;
  SecondIcon?: () => ReactElement;
};

export type Notification = {
  id: number;
  title?: string;
  description?: string;
};

export interface IconProps extends ComponentProps<'svg'> {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export type TitleItem = {
  id: number;
  text: string;
};

export type SidebarName = 'explorer' | 'themes' | 'contact' | 'settings';

export type SidebarContextType = {
  activeSidebar: SidebarName;
  setActiveSidebar: (newActiveSidebar: SidebarName) => void;
};

export type FileExtension = 'html' | 'tsx';

export type PageName = 'home' | 'about';

export type Page = {
  fileExtension: FileExtension;
  Component: () => ReactElement;
};

export type PagesObject = { [propKey in PageName]: Page };
