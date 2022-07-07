import React from 'react';
import { TxStatusToast, TxStatusToastProps } from './TxStatusToast';
import { SignPropsType } from '../types/sign-transactions-modals';

type ExtraConfirmationScreenProps = {
  transactionStatusToastType: TxStatusToastProps;
  signProps: SignPropsType;
  Screen?: (signProps: SignPropsType) => JSX.Element;
  shouldShowTransactionStatusToast: boolean;
};

export const ConfirmationScreen: React.FC<ExtraConfirmationScreenProps> = ({
  Screen,
  transactionStatusToastType,
  signProps,
  shouldShowTransactionStatusToast
}) => {
  if (!Screen) {
    return null;
  }

  return shouldShowTransactionStatusToast ? (
    <TxStatusToast {...transactionStatusToastType} />
  ) : (
    <Screen {...signProps} />
  );
};
