import React from 'react';
import { Address } from '@multiversx/sdk-core';
import classNames from 'classnames';

import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { UseSignTransactionsWithDeviceReturnType } from 'hooks/transactions/useSignTransactionsWithDevice';
import { ActiveLedgerTransactionType, MultiSignTransactionType } from 'types';
import { TransactionData } from 'UI/TransactionData';

import { useSignStepsClasses } from '../hooks';
import { ConfirmAmount, ConfirmFee, ConfirmReceiver } from './components';

export interface SignStepInnerClassesType {
  buttonsWrapperClassName?: string;
  inputGroupClassName?: string;
  inputLabelClassName?: string;
  inputValueClassName?: string;
  errorClassName?: string;
  scamAlertClassName?: string;
  buttonClassName?: string;
  progressClassName?: string;
}

export interface SignStepBodyPropsType {
  error: string | null;
  callbackRoute?: string;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  updateGasPriceOption: UseSignTransactionsWithDeviceReturnType['updateGasPriceOption'];
  allTransactions: MultiSignTransactionType[];
  signStepInnerClasses?: SignStepInnerClassesType;
  isGuarded?: boolean;
}

const SignStepBodyComponent = ({
  currentTransaction,
  error,
  signStepInnerClasses,
  updateGasPriceOption,
  globalStyles,
  styles
}: SignStepBodyPropsType & WithStylesImportType) => {
  if (!currentTransaction) {
    return null;
  }

  const {
    inputGroupClassName,
    inputLabelClassName,
    inputValueClassName,
    errorClassName
  } = signStepInnerClasses || {};

  const { tokenId, multiTxData, receiver, amount } =
    currentTransaction.transactionTokenInfo;

  const transactionReceiver = multiTxData
    ? new Address(receiver).toBech32()
    : currentTransaction.transaction.receiver.toBech32();

  const scamReport = currentTransaction.receiverScamInfo;
  const classes = useSignStepsClasses(scamReport, globalStyles);
  const data = currentTransaction.transaction.data.toString();

  return (
    <div className={styles?.summary}>
      <div className={styles?.fields}>
        <ConfirmAmount currentTransaction={currentTransaction} />

        <ConfirmReceiver
          scamReport={scamReport}
          receiver={transactionReceiver}
          amount={amount}
        />

        <ConfirmFee
          needsSigning={currentTransaction.needsSigning}
          gasPriceOption={currentTransaction.gasPriceOption}
          transaction={currentTransaction.transaction}
          updateGasPriceOption={updateGasPriceOption}
        />

        {data && (
          <TransactionData
            className={inputGroupClassName}
            data={data}
            highlight={multiTxData}
            innerTransactionDataClasses={{
              transactionDataInputLabelClassName: inputLabelClassName,
              transactionDataInputValueClassName: inputValueClassName
            }}
            isScCall={!tokenId}
            showDataDecode
            transactionIndex={currentTransaction.transactionIndex}
          />
        )}

        {error && (
          <p className={classNames(classes.errorMessage, errorClassName)}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export const SignStepBody = withStyles(SignStepBodyComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/signStepBodyStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/signStepBodyStyles.scss')
      .default
});
