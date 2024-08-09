declare module 'react-scroll' {
  import { ReactNode, ComponentType } from 'react';

  interface LinkProps {
    children?: ReactNode;
    className?: string;
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    onClick?: () => void;
    activeClass?: string;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    delay?: number;
    isDynamic?: boolean;
    containerId?: string;
    absolute?: boolean;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<{ name: string }>;
}
