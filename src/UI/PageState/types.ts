import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface Props {
  title?: string;
  icon?: IconProp;
  iconClass?: string;
  className?: string;
  dataTestId?: string;
  iconSize?: SizeProp;
  iconBgClass?: string;
  action?: React.ReactNode;
  shouldRenderDefaultCss?: boolean;
  description?: string | React.ReactNode;
}
