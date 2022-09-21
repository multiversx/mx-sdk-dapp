import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';
import { ProgressProps } from 'UI/Progress';
import { TransactionDetailsType } from 'UI/TransactionDetails';
import { ComponentTypeWithChildren } from '../types';
import { TransactionToastContentProps } from './TransactionToastContent';

export type TransactionToastDefaultProps = {
  toastId: string;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  classes?: Record<string, string>;
  lifetimeAfterSuccess?: number;
  endTimeProgress?: number;
  startTimestamp?: number;
  onDelete?: (toastId: string) => void;
};

export type TransactionToastContentElementsProps = {
  TransactionToastStatusIcon?: ComponentTypeWithChildren<FontAwesomeIconProps>;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
    className?: string;
  }>;
  TransactionDetails?: ComponentTypeWithChildren<TransactionDetailsType>;
};

export type TransactionToastCustomizationProps = {
  TransactionToastContentCustomElements?: TransactionToastContentElementsProps;
  TransactionToastContent?: ComponentTypeWithChildren<
    TransactionToastContentProps
  >;
  Progress?: ComponentTypeWithChildren<ProgressProps>;
};
