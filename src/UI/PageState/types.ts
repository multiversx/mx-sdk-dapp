export interface PageStateProps {
  title?: string;
  icon?: any;
  iconClass?: string;
  className?: string;
  dataTestId?: string;
  iconSize?:
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  iconBgClass?: string;
  action?: React.ReactNode;
  shouldRenderDefaultCss?: boolean;
  description?: string | React.ReactNode;
}
