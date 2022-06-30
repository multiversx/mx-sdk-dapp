import React from 'react';
import { TxDetailsProps } from '../../../TxDetails';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { ProgressProps } from '../../../Progress';
import { TransactionToastContentProps } from './TransactionToastContent';
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';

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
    React.PropsWithChildren<{
      size?: SizeProp;
      icon?: IconProp;
      className?: string;
    }>
  >;
  CustomCloseButton?: React.ComponentType<
    React.PropsWithChildren<{
      onClick?: () => void;
    }>
  >;
  CustomTransactionDetailsComponent?: React.ComponentType<
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
