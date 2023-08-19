/* eslint-disable quote-props */
import { ThemeConfig } from '@/types';

const colors: ThemeConfig = {
  'dark-modern': {
    'accent-color': '#0066B4',
    'icon-color': '#8c8c7d',
    'activity-bar': '#181818',
    'active-activity-bar-icon-background': '#101010',
    'active-activity-bar-icon-accent': '#0066B4',
    'active-explorer': '#37373d',
    'sidebar-background': '#181818',
    'hover-explorer': '#2a2d2e',
    'footer-background': '#181818',
    'border': '#434548',
    'search-bar': '#2a2a2a',
    'gutter': '#434548',
    'header-background': '#181818',
    'page-content-background': '#1f1f1f',
    'tabs-background': '#181818',
    'string': '#ce916a',
    'code': '#cccccc',
    'accent-secondary': '#4cc61e',
  },
  'one-dark-pro': {
    'accent-color': '#4d78cc',
    'icon-color': '#8c8c7d',
    'activity-bar': '#282c34',
    'sidebar-background': '#21252b',
    'active-activity-bar-icon-background': '#282c34',
    'active-activity-bar-icon-accent': '#fff',
    'active-explorer': '#323842',
    'hover-explorer': '#2c313a',
    'footer-background': '#21252b',
    'border': 'transparent',
    'search-bar': '#393d44',
    'gutter': '#21252b',
    'header-background': '#282c34',
    'page-content-background': '#282c34',
    'tabs-background': '#21252b',
    'string': '#98c371',
    'code': '#abb2bf',
    'accent-secondary': '#3fb911',
  },
};

const sizes = {
  base: 16,
  font: 16,
  opacity: 0.8,
};

export default {
  colors,
  sizes,
};
