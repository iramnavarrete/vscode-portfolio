import { ComponentProps } from 'react';

export interface IconProps extends ComponentProps<'svg'> {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}
