import { ReactNode } from 'react';
import {
  ComponentIconToastType,
  MessageCustomToastType,
  MessageIconToastType,
  TransactionIconToastType
} from '../../../../types/toasts.types';
import { WithClassnameType } from '../../../types';
import { ComponentTypeWithChildren } from '../types';

type SharedCustomToastPropsType = WithClassnameType & {
  onDelete: () => void;
  messageComponent?: ReactNode;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
  }>;
};

export type MessageCustomToastPropsType = SharedCustomToastPropsType &
  MessageCustomToastType;

export type MessageIconToastPropsType = SharedCustomToastPropsType &
  MessageIconToastType;

export type TransactionIconToastPropsType = SharedCustomToastPropsType &
  TransactionIconToastType;

export type ComponentIconToastPropsType = SharedCustomToastPropsType &
  ComponentIconToastType;

export type CustomToastPropsType =
  | MessageCustomToastPropsType
  | MessageIconToastPropsType
  | ComponentIconToastPropsType
  | TransactionIconToastPropsType;
