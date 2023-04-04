import { useEffect, useState } from 'react';
import {
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@multiversx/sdk-core';

import { useParseMultiEsdtTransferData } from 'hooks/transactions/useParseMultiEsdtTransferData';
import { GuardianProvider } from 'services/transactions/GuardianProvider';
import { ActiveLedgerTransactionType, ScamInfoType } from 'types';
import { getLedgerErrorCodes } from 'utils/internal/getLedgerErrorCodes';
import { isTokenTransfer } from 'utils/transactions/isTokenTransfer';
import { UseSignTransactionsWithDeviceReturnType } from './useSignTransactionsWithDevice';

export interface UseSignMultipleTransactionsPropsType {
  egldLabel: string;
  address: string;
  isGuarded?: boolean;
  apiAddress?: string;
  verifyReceiverScam?: boolean;
  isLedger?: boolean;
  transactionsToSign?: Transaction[];
  onCancel?: () => void;
  onSignTransaction: (transaction: Transaction) => Promise<Transaction>;
  onTransactionsSignSuccess: (transactions: Transaction[]) => void;
  onTransactionsSignError: (errorMessage: string) => void;
  onGetScamAddressData?:
    | ((address: string) => Promise<{ scamInfo?: ScamInfoType }>)
    | null;
}

interface VerifiedAddressesType {
  [address: string]: { type: string; info: string };
}
let verifiedAddresses: VerifiedAddressesType = {};

type DeviceSignedTransactions = Record<number, Transaction>;

export interface UseSignMultipleTransactionsReturnType
  extends Omit<UseSignTransactionsWithDeviceReturnType, 'callbackRoute'> {
  shouldContinueWithoutSigning: boolean;
  isFirstTransaction: boolean;
  hasMultipleTransactions: boolean;
}

export function useSignMultipleTransactions({
  isLedger = false,
  transactionsToSign,
  egldLabel,
  address,
  isGuarded,
  apiAddress,
  onCancel,
  onSignTransaction,
  onTransactionsSignError,
  onTransactionsSignSuccess,
  onGetScamAddressData
}: UseSignMultipleTransactionsPropsType): UseSignMultipleTransactionsReturnType {
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState(''); // optional guadian code
  const [signedTransactions, setSignedTransactions] =
    useState<DeviceSignedTransactions>();
  const [currentTransaction, setCurrentTransaction] =
    useState<ActiveLedgerTransactionType | null>(null);

  const [waitingForDevice, setWaitingForDevice] = useState(false);

  const { getTxInfoByDataField, allTransactions } =
    useParseMultiEsdtTransferData({ transactions: transactionsToSign });

  const isLastTransaction = currentStep === allTransactions.length - 1;

  useEffect(() => {
    extractTransactionsInfo();
  }, [currentStep, allTransactions]);

  async function extractTransactionsInfo() {
    const tx = allTransactions[currentStep];
    if (tx == null) {
      return;
    }
    const { transaction, multiTxData } = tx;
    const dataField = transaction.getData().toString();
    const transactionTokenInfo = getTxInfoByDataField(
      transaction.getData().toString(),
      multiTxData
    );
    const { tokenId } = transactionTokenInfo;
    const receiver = transaction.getReceiver().toString();
    const notSender = address !== receiver;
    const verified = receiver in verifiedAddresses;

    if (notSender && !verified && onGetScamAddressData != null) {
      const data = await onGetScamAddressData(receiver);
      verifiedAddresses = {
        ...verifiedAddresses,
        ...(data?.scamInfo ? { [receiver]: data.scamInfo } : {})
      };
    }

    const isTokenTransaction = Boolean(
      tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel })
    );

    setCurrentTransaction({
      transaction,
      receiverScamInfo: verifiedAddresses[receiver]?.info || null,
      transactionTokenInfo,
      isTokenTransaction,
      dataField
    });
  }

  function reset() {
    setCurrentStep(0);
    setSignedTransactions(undefined);
    setWaitingForDevice(false);
  }

  async function sign() {
    if (currentTransaction == null) {
      return;
    }

    setWaitingForDevice(isLedger);

    let signedTx: Transaction;
    try {
      signedTx = await onSignTransaction(currentTransaction.transaction);
    } catch (err) {
      console.error(err, 'sign error');
      const { message } = err as any;
      const errorMessage = isLedger
        ? getLedgerErrorCodes(err).errorMessage
        : null;

      reset();
      return onTransactionsSignError(errorMessage ?? message);
    }

    const newSignedTx = { [currentStep]: signedTx };
    const newSignedTransactions = signedTransactions
      ? { ...signedTransactions, ...newSignedTx }
      : newSignedTx;
    setSignedTransactions(newSignedTransactions);

    if (!isLastTransaction) {
      setCurrentStep((exising) => exising + 1);
      setWaitingForDevice(false);
      return;
    }

    if (!newSignedTransactions) {
      return;
    }

    let allSignedTransactions = Object.values(newSignedTransactions);

    if (!isGuarded) {
      onTransactionsSignSuccess(allSignedTransactions);
      reset();
    }

    // handle guarded transactions
    if (!code) {
      return;
    }

    const provider = GuardianProvider.getInstance();
    await provider.init(address, String(apiAddress));

    const transactionsWithVersionOptions = allSignedTransactions.map(
      (transaction) => {
        // TODO: to be removed when included in provider
        transaction.version = TransactionVersion.withTxOptions();
        transaction.options = TransactionOptions.withTxGuardedOptions();
        return transaction;
      }
    );

    try {
      allSignedTransactions = await provider.applyGuardianSignature(
        transactionsWithVersionOptions,
        code
      );
      onTransactionsSignSuccess(allSignedTransactions);
    } catch (err) {
      console.error(err, 'guardian sign error');
      onTransactionsSignError('Error while signing with guardian');
    }
    reset();
  }

  function signTx() {
    try {
      if (currentTransaction == null) {
        return;
      }
      const signature = currentTransaction.transaction.getSignature();
      if (signature.hex()) {
        if (!isLastTransaction) {
          setCurrentStep((exising) => exising + 1);
        }
      } else {
        // currently code doesn't reach here because getSignature throws error if none is found
        sign();
      }
    } catch {
      // the only way to check if tx has signature is with try catch
      sign();
    }
  }

  const isFirst = currentStep === 0;

  function handleAbort() {
    if (isFirst) {
      onCancel?.();
    } else {
      setCurrentStep((existing) => existing - 1);
    }
  }

  const shouldContinueWithoutSigning = Boolean(
    currentTransaction?.transactionTokenInfo?.type &&
      currentTransaction?.transactionTokenInfo?.multiTxData &&
      !currentTransaction?.dataField.endsWith(
        currentTransaction?.transactionTokenInfo?.multiTxData
      )
  );

  function handleSignTransaction() {
    if (shouldContinueWithoutSigning) {
      setCurrentStep((exising) => exising + 1);
    } else {
      signTx();
    }
  }

  function onNext() {
    setCurrentStep((current) => {
      const nextStep = current + 1;
      if (nextStep > allTransactions?.length) {
        return current;
      }
      return nextStep;
    });
  }

  function onPrev() {
    setCurrentStep((current) => {
      const nextStep = current - 1;
      if (nextStep < 0) {
        return current;
      }
      return nextStep;
    });
  }

  return {
    allTransactions,
    onSignTransaction: handleSignTransaction,
    onNext,
    onPrev,
    waitingForDevice,
    onAbort: handleAbort,
    onSetCode: (code: string) => setCode(code),
    isLastTransaction,
    isFirstTransaction: currentStep === 0,
    hasMultipleTransactions: allTransactions.length > 1,
    shouldContinueWithoutSigning,
    currentStep,
    signedTransactions,
    currentTransaction
  };
}
