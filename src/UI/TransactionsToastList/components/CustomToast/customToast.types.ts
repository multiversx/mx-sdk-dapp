import { ReactNode } from 'react';
import { CustomToastType } from '../../../../types/toasts.types';
import { WithClassnameType } from '../../../types';
import { ComponentTypeWithChildren } from '../types';

export interface CustomToastPropsType
  extends CustomToastType,
    WithClassnameType {
  onDelete: () => void;
  messageComponent?: ReactNode;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
  }>;
}
