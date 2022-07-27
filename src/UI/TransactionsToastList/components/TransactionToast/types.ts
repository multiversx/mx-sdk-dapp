import { TxDetailsProps } from 'UI/TxDetails';
import { ProgressProps } from 'UI/Progress';
import { TransactionToastContentProps } from './TransactionToastContent';
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ComponentTypeWithChildren } from '../types';

export type TransactionToastDefaultProps = {
  toastId: string;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  lifetimeAfterSuccess?: number;
  endTimeProgress?: number;
  startTimestamp?: number;
  onDelete?: (toastId: string) => void;
};

export type TransactionToastContentElementsProps = {
  TransactionToastStatusIcon?: ComponentTypeWithChildren<FontAwesomeIconProps>;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
  }>;
  TransactionDetails?: ComponentTypeWithChildren<TxDetailsProps>;
};

export type TransactionToastCustomizationProps = {
  TransactionToastContentCustomElements?: TransactionToastContentElementsProps;
  TransactionToastContent?: ComponentTypeWithChildren<
    TransactionToastContentProps
  >;
  Progress?: ComponentTypeWithChildren<ProgressProps>;
};
