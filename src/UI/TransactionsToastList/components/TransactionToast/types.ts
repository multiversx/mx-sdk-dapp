import React from 'react';
import { TxDetailsProps } from 'UI/TxDetails';
import { ProgressProps } from 'UI/Progress';
import { TransactionToastContentProps } from './TransactionToastContent';
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type TransactionToastDefaultProps = {
  toastId: string;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  lifetimeAfterSuccess?: number;
  endTimeProgress?: number;
  startTimestamp?: number;
  className?: string;
  shouldRenderDefaultCss?: boolean;
  onDelete?: (toastId: string) => void;
};

export type TransactionToastContentElementsProps = {
  TransactionToastStatusIcon?: React.ComponentType<
    React.PropsWithChildren<FontAwesomeIconProps>
  >;
  CustomCloseButton?: React.ComponentType<
    React.PropsWithChildren<{
      onClick?: () => void;
    }>
  >;
  TransactionDetails?: React.ComponentType<
    React.PropsWithChildren<TxDetailsProps>
  >;
};

export type TransactionToastCustomizationProps = {
  TransactionToastContentCustomElements?: TransactionToastContentElementsProps;
  TransactionToastContent?: React.ComponentType<
    React.PropsWithChildren<TransactionToastContentProps>
  >;
  Progress?: React.ComponentType<React.PropsWithChildren<ProgressProps>>;
};
