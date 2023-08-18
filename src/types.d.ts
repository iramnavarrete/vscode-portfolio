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

export type ThemeContextType = {
  activeTheme: ThemeName;
  setActiveTheme: (newActiveSidebar: ThemeName) => void;
};

export type ThemeName = 'dark-modern' | 'one-dark-pro';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX | 'transparent';

/* eslint-disable react/jsx-no-constructed-context-values */
interface ThemeColors {
  'accent-color': Color;
  'icon-color': Color;
  'active-activity-bar-icon-background': Color;
  'active-activity-bar-icon-accent': Color;
  'activity-bar': Color;
  'active-explorer': Color;
  'hover-explorer': Color;
  'sidebar-background': Color;
  'footer-background': Color;
  'border': Color;
  'search-bar': Color;
  'gutter': Color;
  'header-background': Color;
  'page-content-background': Color;
  'tabs-background': Color;
  'string': Color;
  'code': Color;
}

export type ThemeConfig = { [propKey in ThemeName]: ThemeColors };

interface Theme {
  icon: () => ReactElement;
  description: string;
  author: string;
}

export type ThemeObject = {
  [propKey in ThemeName]: Theme;
};
