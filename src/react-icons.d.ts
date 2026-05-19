import { FC, SVGAttributes } from 'react';

declare module 'react-icons/lib' {
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = FC<IconBaseProps>;
}
