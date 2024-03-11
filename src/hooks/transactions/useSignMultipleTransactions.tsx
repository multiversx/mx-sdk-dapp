import { useEffect, useState } from 'react';
import {
  Address,
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@multiversx/sdk-core';

import { SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS } from 'constants/index';
import { useParseMultiEsdtTransferData } from 'hooks/transactions/useParseMultiEsdtTransferData';
import {
  ActiveLedgerTransactionType,
  DeviceSignedTransactions,
  Nullable,
  ScamInfoType
} from 'types';
import { getAccount } from 'utils/account/getAccount';
import { getLedgerErrorCodes } from 'utils/internal/getLedgerErrorCodes';
import { isTokenTransfer } from 'utils/transactions/isTokenTransfer';
import {
  checkIsValidSender,
  getAreAllTransactionsSignedByGuardian
} from './helpers';
import { UseSignTransactionsWithDeviceReturnType } from './useSignTransactionsWithDevice';

export interface UseSignMultipleTransactionsPropsType {
  egldLabel: string;
  address: string;
  activeGuardianAddress?: string;
  hasGuardianScreen?: boolean;
  verifyReceiverScam?: boolean;
  isLedger?: boolean;
  transactionsToSign?: Transaction[];
  onCancel?: () => void;
  onSignTransaction: (
    transaction: Nullable<Transaction>
  ) => Promise<Nullable<Transaction | undefined>>;
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
  activeGuardianAddress,
  hasGuardianScreen,
  onCancel,
  onSignTransaction,
  onTransactionsSignError,
  onTransactionsSignSuccess,
  onGetScamAddressData
}: UseSignMultipleTransactionsPropsType): UseSignMultipleTransactionsReturnType {
  const isGuarded = Boolean(activeGuardianAddress);
  const [currentStep, setCurrentStep] = useState(0);
  const [signedTransactions, setSignedTransactions] =
    useState<DeviceSignedTransactions>();
  const [currentTransaction, setCurrentTransaction] =
    useState<ActiveLedgerTransactionType | null>(null);

  const [waitingForDevice, setWaitingForDevice] = useState(false);

  const { getTxInfoByDataField, allTransactions } =
    useParseMultiEsdtTransferData({
      transactions: activeGuardianAddress
        ? transactionsToSign?.map((transaction) => {
            transaction.setSender(Address.fromBech32(address));
            transaction.setVersion(TransactionVersion.withTxOptions());
            transaction.setGuardian(Address.fromBech32(activeGuardianAddress));
            const options = {
              guarded: true,
              ...(isLedger ? { hashSign: true } : {})
            };
            transaction.setOptions(TransactionOptions.withOptions(options));
            return transaction;
          })
        : transactionsToSign
    });

  const isLastTransaction = currentStep === allTransactions.length - 1;

  useEffect(() => {
    extractTransactionsInfo();
  }, [currentStep, allTransactions]);

  async function extractTransactionsInfo() {
    const tx = allTransactions[currentStep];

    if (tx == null) {
      return;
    }

    const { transaction, multiTxData, transactionIndex } = tx;
    const dataField = transaction.getData().toString();
    const transactionTokenInfo = getTxInfoByDataField(
      transaction.getData().toString(),
      multiTxData
    );

    const { tokenId } = transactionTokenInfo;
    const receiver = transaction.getReceiver().toString();
    const sender = transaction.getSender().toString();
    const senderAccount = await getAccount(sender);
    const isValidSender = checkIsValidSender(senderAccount, address);

    if (!isValidSender) {
      console.error(SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS);

      return onCancel?.();
    }

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
      dataField,
      transactionIndex
    });
  }

  function reset() {
    setCurrentStep(0);
    setSignedTransactions(undefined);
    setWaitingForDevice(false);
  }

  async function sign() {
    const existingSignedTransactions = Object.values(signedTransactions ?? {});

    const alreadySignedByGuardian = getAreAllTransactionsSignedByGuardian({
      isGuarded,
      transactions: existingSignedTransactions
    });

    if (isGuarded && alreadySignedByGuardian) {
      onTransactionsSignSuccess(existingSignedTransactions);
      reset();
      return;
    }

    if (currentTransaction == null) {
      return;
    }

    setWaitingForDevice(isLedger);

    let signedTx: Nullable<Transaction | undefined>;
    try {
      signedTx = await onSignTransaction(currentTransaction.transaction);
    } catch (err) {
      console.error(err, 'sign error');
      const { message } = err as any;
      const errorMessage = isLedger
        ? getLedgerErrorCodes(err).errorMessage
        : null;

      reset();
      onTransactionsSignError(errorMessage ?? message);
      return;
    }

    if (!signedTx) {
      return;
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

    const allSignedTransactions = Object.values(newSignedTransactions);

    const allSignedByGuardian = getAreAllTransactionsSignedByGuardian({
      isGuarded,
      transactions: allSignedTransactions
    });

    if (!allSignedByGuardian && hasGuardianScreen) {
      return;
    }

    onTransactionsSignSuccess(allSignedTransactions);
    reset();
  }

  async function signTx() {
    try {
      if (currentTransaction == null) {
        return;
      }
      const signature = currentTransaction.transaction.getSignature();

      if (signature.toString('hex') && !isLastTransaction) {
        setCurrentStep((exising) => exising + 1);
        return;
      }

      await sign();
    } catch {
      // the only way to check if tx has signature is with try catch
      await sign();
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

  async function handleSignTransaction() {
    if (shouldContinueWithoutSigning) {
      setCurrentStep((exising) => exising + 1);
      return;
    }
    await signTx();
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
    isLastTransaction,
    isFirstTransaction: currentStep === 0,
    hasMultipleTransactions: allTransactions.length > 1,
    shouldContinueWithoutSigning,
    currentStep,
    signedTransactions,
    setSignedTransactions,
    currentTransaction
  };
}
