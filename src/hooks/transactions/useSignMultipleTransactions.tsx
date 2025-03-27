import { useEffect, useState } from 'react';
import {
  Address,
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@multiversx/sdk-core';

import { useGetAccountFromApi } from 'apiCalls/accounts/useGetAccountFromApi';
import {
  EMPTY_PPU,
  SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS
} from 'constants/index';
import { useParseMultiEsdtTransferData } from 'hooks/transactions/useParseMultiEsdtTransferData';
import {
  ActiveLedgerTransactionType,
  DeviceSignedTransactions,
  Nullable,
  ScamInfoType
} from 'types';
import { getLedgerErrorCodes } from 'utils/internal/getLedgerErrorCodes';
import { isTokenTransfer } from 'utils/transactions/isTokenTransfer';
import {
  checkIsValidSender,
  getAreAllTransactionsSignedByGuardian
} from './helpers';
import { recommendGasPrice } from './helpers/recommendGasPrice';
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
  updatePPU: UseSignTransactionsWithDeviceReturnType['updatePPU'];
  currentTransaction: ActiveLedgerTransactionType | null;
  isFirstTransaction: boolean;
  hasMultipleTransactions: boolean;
}

export const useSignMultipleTransactions = ({
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
}: UseSignMultipleTransactionsPropsType): UseSignMultipleTransactionsReturnType => {
  const isGuarded = Boolean(activeGuardianAddress);
  const [currentStep, setCurrentStep] = useState(0);
  const [signedTransactions, setSignedTransactions] =
    useState<DeviceSignedTransactions>();
  const [currentTransaction, setCurrentTransaction] =
    useState<ActiveLedgerTransactionType | null>(null);
  const [ppuMap, setPpuMap] = useState<
    Record<
      number,
      {
        initialGasPrice: number;
        ppu: ActiveLedgerTransactionType['ppu'];
      }
    >
  >({});

  const [waitingForDevice, setWaitingForDevice] = useState(false);

  const { getTxInfoByDataField, allTransactions } =
    useParseMultiEsdtTransferData({
      transactions: activeGuardianAddress
        ? transactionsToSign?.map((transaction) => {
            transaction.sender = Address.newFromBech32(address);
            transaction.version = TransactionVersion.withTxOptions().valueOf();
            transaction.guardian = Address.newFromBech32(activeGuardianAddress);
            const options = {
              guarded: true,
              ...(isLedger ? { hashSign: true } : {})
            };
            transaction.options =
              TransactionOptions.withOptions(options).valueOf();
            return transaction;
          })
        : transactionsToSign
    });

  const [allEditedTransactions, setAllEditedTransactions] =
    useState(allTransactions);

  const isLastTransaction = currentStep === allEditedTransactions.length - 1;
  const currentTx = allEditedTransactions[currentStep];
  const sender = currentTransaction?.transaction?.getSender().toString();

  // Skip account fetching if the sender is missing or same as current account
  const { data: senderAccount } = useGetAccountFromApi(
    !sender || sender === address ? null : sender
  );

  const extractTransactionsInfo = async () => {
    if (currentTx == null) {
      return;
    }

    const { transaction, multiTxData, transactionIndex } = currentTx;
    const dataField = transaction.getData().toString();
    const transactionTokenInfo = getTxInfoByDataField(
      transaction.getData().toString(),
      multiTxData
    );

    const { tokenId } = transactionTokenInfo;
    const receiver = transaction.getReceiver().toString();

    if (sender && sender !== address) {
      const isValidSender = checkIsValidSender(senderAccount, address);

      if (!isValidSender) {
        console.error(SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS);

        return onCancel?.();
      }
    }

    const notSender = address !== receiver;
    const verified = receiver in verifiedAddresses;

    if (receiver && notSender && !verified && onGetScamAddressData != null) {
      const data = await onGetScamAddressData(receiver);
      verifiedAddresses = {
        ...verifiedAddresses,
        ...(data?.scamInfo ? { [receiver]: data.scamInfo } : {})
      };
    }

    const isTokenTransaction = Boolean(
      tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel })
    );

    const needsSigning = currentTx.needsSigning;
    const nonce = transaction.getNonce().valueOf();

    setCurrentTransaction({
      transaction,
      ppu: ppuMap[Number(nonce)].ppu || EMPTY_PPU,
      receiverScamInfo: verifiedAddresses[receiver]?.info || null,
      transactionTokenInfo,
      isTokenTransaction,
      dataField,
      transactionIndex,
      needsSigning
    });
  };

  const updatePPU = (newPPU: ActiveLedgerTransactionType['ppu']) => {
    const currentEditedTransaction =
      allEditedTransactions[currentStep].transaction;

    const nonce = currentEditedTransaction.getNonce().valueOf();

    const currentMultiplier = ppuMap[Number(nonce)].ppu;
    const initialGasPrice = ppuMap[Number(nonce)].initialGasPrice;

    if (currentMultiplier === newPPU) {
      return;
    }

    setPpuMap((existing) => {
      const newPpuMap = { ...existing };
      newPpuMap[Number(nonce)] = {
        ...newPpuMap[Number(nonce)],
        ppu: newPPU
      };
      return newPpuMap;
    });

    const newGasPrice = newPPU
      ? recommendGasPrice({
          transactionDataLength: currentEditedTransaction.data.length,
          transactionGasLimit: Number(currentEditedTransaction.gasLimit),
          ppu: newPPU
        })
      : initialGasPrice;

    const transaction = Transaction.fromPlainObject({
      ...currentEditedTransaction.toPlainObject(),
      gasPrice: newGasPrice
    });

    const newEditedTransaction = {
      ...allEditedTransactions[currentStep],
      transaction
    };

    setAllEditedTransactions((existing) => {
      const newTransactions = [...existing];
      newTransactions[currentStep] = newEditedTransaction;
      return newTransactions;
    });

    setCurrentTransaction((existing) => {
      if (!existing) {
        return existing;
      }

      return {
        ...existing,
        transaction,
        ppu: newPPU
      };
    });
  };

  useEffect(() => {
    const newPpuMap: typeof ppuMap = {};
    allTransactions.forEach((transaction) => {
      const nonce = transaction.transaction.nonce;
      newPpuMap[Number(nonce)] = {
        initialGasPrice: Number(transaction.transaction.gasPrice),
        ppu: EMPTY_PPU
      };
    });
    setPpuMap(newPpuMap);
    setAllEditedTransactions(allTransactions);
  }, [allTransactions]);

  useEffect(() => {
    extractTransactionsInfo();
  }, [currentTx, senderAccount]);

  const reset = () => {
    setCurrentStep(0);
    setSignedTransactions(undefined);
    setWaitingForDevice(false);
  };

  const sign = async () => {
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
  };

  const signTx = async () => {
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
    } catch (e) {
      console.error('Error during signing transaction');
      // the only way to check if tx has signature is with try catch
      await sign();
    }
  };

  const isFirst = currentStep === 0;

  const handleAbort = () => {
    if (isFirst) {
      onCancel?.();
    } else {
      setCurrentStep((existing) => existing - 1);
    }
  };

  const shouldContinueWithoutSigning = Boolean(
    currentTransaction?.transactionTokenInfo?.type &&
      currentTransaction?.transactionTokenInfo?.multiTxData &&
      !currentTransaction?.dataField.endsWith(
        currentTransaction?.transactionTokenInfo?.multiTxData
      )
  );

  const handleSignTransaction = async () => {
    if (shouldContinueWithoutSigning) {
      setCurrentStep((exising) => exising + 1);
      return;
    }

    await signTx();
  };

  const onNext = () => {
    setCurrentStep((current) => {
      const nextStep = current + 1;

      if (nextStep > allTransactions?.length) {
        return current;
      }

      return nextStep;
    });
  };

  const onPrev = () => {
    setCurrentStep((current) => {
      const nextStep = current - 1;

      if (nextStep < 0) {
        return current;
      }

      return nextStep;
    });
  };

  return {
    allTransactions: allEditedTransactions,
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
    updatePPU,
    currentTransaction
  };
};
