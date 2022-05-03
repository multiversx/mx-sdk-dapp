import { useEffect, useState } from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { getScamAddressData } from 'apiCalls';
import ledgerErrorCodes from 'constants/ledgerErrorCodes';
import { useGetAccountInfo } from 'hooks/account';
import { getAccountProvider } from 'providers/accountProvider';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { egldLabelSelector, transactionsToSignSelector } from 'redux/selectors';
import {
  clearAllTransactionsToSign,
  moveTransactionsToSignedState,
  setSignTransactionsError
} from 'redux/slices/transactionsSlice';
import { useParseMultiEsdtTransferData } from 'services/transactions/hooks/useParseMultiEsdtTransferData';
import { ActiveLedgerTransactionType, MultiSignTxType } from 'types';
import { LoginMethodsEnum, TransactionBatchStatusesEnum } from 'types/enums';
import { getIsProviderEqualTo, isTokenTransfer } from 'utils';
import { parseTransactionAfterSigning } from 'utils';

interface UseSignTransactionsWithLedgerPropsType {
  onCancel: () => void;
  verifyReceiverScam?: boolean;
}

interface VerifiedAddressesType {
  [address: string]: { type: string; info: string };
}
let verifiedAddresses: VerifiedAddressesType = {};

type LedgerSignedTransactions = Record<number, Transaction>;

interface UseSignTransactionsWithLedgerReturnType {
  allTransactions: MultiSignTxType[];
  onSignTransaction: () => void;
  onNext: () => void;
  onPrev: () => void;
  onAbort: () => void;
  waitingForDevice: boolean;
  isLastTransaction: boolean;
  currentStep: number;
  callbackRoute?: string;
  signedTransactions?: LedgerSignedTransactions;
  currentTransaction: ActiveLedgerTransactionType | null;
}

export function useSignTransactionsWithLedger({
  onCancel,
  verifyReceiverScam = true
}: UseSignTransactionsWithLedgerPropsType): UseSignTransactionsWithLedgerReturnType {
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const {
    account: { address }
  } = useGetAccountInfo();

  const {
    sessionId,
    transactions,
    callbackRoute,
    customTransactionInformation
  } = transactionsToSign || {};
  const [currentStep, setCurrentStep] = useState(0);
  const [signedTransactions, setSignedTransactions] =
    useState<LedgerSignedTransactions>();
  const { getTxInfoByDataField, allTransactions } =
    useParseMultiEsdtTransferData({ transactions });
  const [currentTransaction, setCurrentTransaction] =
    useState<ActiveLedgerTransactionType | null>(null);
  const provider = getAccountProvider();
  const egldLabel = useSelector(egldLabelSelector);
  const [waitingForDevice, setWaitingForDevice] = useState(false);
  const dispatch = useDispatch();

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

    if (notSender && !verified && verifyReceiverScam) {
      const data = await getScamAddressData(receiver);
      verifiedAddresses = {
        ...verifiedAddresses,
        ...(data.scamInfo ? { [receiver]: data.scamInfo } : {})
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
    try {
      if (currentTransaction == null || sessionId == null) {
        return;
      }

      const trueForLedger = getIsProviderEqualTo(LoginMethodsEnum.ledger);
      setWaitingForDevice(trueForLedger);

      const signedTx = await provider.signTransaction(
        currentTransaction.transaction
      );
      const newSignedTx = { [currentStep]: signedTx };
      const newSignedTransactions: any = signedTransactions
        ? { ...signedTransactions, ...newSignedTx }
        : newSignedTx;
      setSignedTransactions(newSignedTransactions);
      if (!isLastTransaction) {
        setCurrentStep((exising) => exising + 1);
        setWaitingForDevice(false);
      } else if (newSignedTransactions) {
        dispatch(
          moveTransactionsToSignedState({
            sessionId,
            status: TransactionBatchStatusesEnum.signed,
            transactions: Object.values(newSignedTransactions).map((tx) =>
              parseTransactionAfterSigning(tx as Transaction, trueForLedger)
            )
          })
        );

        reset();
        if (
          callbackRoute != null &&
          customTransactionInformation?.redirectAfterSign &&
          !window.location.pathname.includes(callbackRoute)
        ) {
          window.location.href = callbackRoute;
        }
      }
    } catch (err) {
      console.error(err, 'sign error');
      const { message, statusCode } = err as any;

      const errMessage =
        statusCode in ledgerErrorCodes
          ? (ledgerErrorCodes as any)[statusCode].message
          : message;

      reset();
      dispatch(setSignTransactionsError(errMessage));
    }
  }

  function signTx() {
    try {
      if (currentTransaction == null) {
        return;
      }
      const signature = currentTransaction.transaction.getSignature();
      if (signature) {
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

  function onAbort() {
    if (isFirst) {
      dispatch(clearAllTransactionsToSign());
      onCancel();
      if (
        callbackRoute != null &&
        customTransactionInformation?.redirectAfterSign
      ) {
        window.location.href = callbackRoute;
      }
    } else {
      setCurrentStep((existing) => existing - 1);
    }
  }

  const continueWithoutSigning =
    currentTransaction?.transactionTokenInfo?.type &&
    currentTransaction?.transactionTokenInfo?.multiTxData &&
    !currentTransaction?.dataField.endsWith(
      currentTransaction?.transactionTokenInfo?.multiTxData
    );

  function onSignTransaction() {
    if (continueWithoutSigning) {
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
    onSignTransaction,
    onNext,
    onPrev,
    waitingForDevice,
    onAbort,
    isLastTransaction,
    callbackRoute,
    currentStep,
    signedTransactions,
    currentTransaction
  };
}

export default useSignTransactionsWithLedger;
