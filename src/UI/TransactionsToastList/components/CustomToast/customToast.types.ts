import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WithClassnameType } from '../../../types';
import { ComponentTypeWithChildren } from '../types';

export interface CustomToastPropsType extends WithClassnameType {
  onDelete: () => void;
  /**
   * Duration in miliseconds
   */
  duration?: number;
  message?: string;
  messageComponent?: ReactNode;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
  }>;
  /**
   * Use `iconToastData` to switch from an inline toast to a icon toast
   */
  iconToastData?: {
    title: string;
    /**
     * Use `status` to display a row of information between `title` and `message`
     */
    status?: string;
    icon: IconDefinition;
    iconClassName?: string;
  };
}
