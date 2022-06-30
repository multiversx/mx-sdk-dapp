import React from 'react';
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';
import { ToastDataState } from './utils';
import { TransactionToastContentProps } from './TransactionToastContent';
import { TxDetailsProps } from '../../../TxDetails';

export type TransactionToastCustomProgressProps = {
  classes: {
    progress?: string;
    bar?: string;
  };
};

export type TransactionToastCustomContentProps = {
  classes?: {
    content?: string;
    left?: string;
    right?: string;
    icon?: string;
    svg?: string;
    heading?: string;
    title?: string;
    footer?: string;
  };
  renderLeftSideIconCallback?: <T>(
    props?: React.PropsWithChildren<T>
  ) => JSX.Element;
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
  TransactionToastContent?: TransactionToastCustomContentProps;
  Progress?: TransactionToastCustomProgressProps;
};

export type TransactionToastDefaultPropsType = {
  title?: string | React.ReactNode;
  toastId: string;
  className?: string;
  endTimeProgress?: number;
  startTimestamp?: number;
  shouldRenderDefaultCss?: boolean;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  lifetimeAfterSuccess?: number;
  onDelete?: (toastId: string) => void;
};

export type TransactionToastDefaultContentProps = {
  title?: string | React.ReactNode;
  toastId: string;
  progress: { startTime: number; endTime: number };
  lifetimeAfterSuccess?: number;
  isPending: boolean;
  isTimedOut: boolean;
  style: {
    content?: string;
    left?: string;
    right?: string;
    icon?: string;
    svg?: string;
    heading?: string;
    title?: string;
    footer?: string;
  };
  toastDataState: ToastDataState;
  transactions?: SignedTransactionType[];
  handleDeleteToast: () => void;
};

export type CustomToastContentProps = {
  CustomToastContent?: React.ComponentType<
    React.PropsWithChildren<TransactionToastContentProps>
  >;
  customToastContentProps?: TransactionToastContentProps;
  style: Record<string, string>;
  toastDataState: ToastDataState;
  transactions?: SignedTransactionType[];
  title: string | React.ReactNode;
  isTimedOut?: boolean;
  isPending?: boolean;
  handleDeleteToast: () => void;
};
