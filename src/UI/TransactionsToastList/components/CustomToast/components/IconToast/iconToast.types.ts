import {
  ComponentIconToastPropsType,
  MessageIconToastPropsType,
  TransactionIconToastPropsType
} from '../../customToast.types';

export type IconToastPropsType =
  | MessageIconToastPropsType
  | TransactionIconToastPropsType
  | ComponentIconToastPropsType;
