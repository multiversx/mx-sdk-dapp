import React from 'react';

import { Transaction } from '@elrondnetwork/erdjs';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactions
} from 'hooks';
import { LoginMethodsEnum } from 'types';
import { getIsProviderEqualTo } from 'utils';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';
import SignWithExtensionModal from './SignWithExtensionModal';
import SignWithLedgerModal from './SignWithLedgerModal';
import SignWithWalletConnectModal from './SignWithWalletConnectModal';

interface SignPropsType {
  handleClose: () => void;
  error: string | null;
  sessionId?: string;
  transactions: Transaction[];
  providerType: LoginMethodsEnum;
  callbackRoute: string;
  className?: string;
}

interface CustomConfirmScreensType {
  Ledger: (signProps: SignPropsType) => React.ReactNode;
  Extension: (signProps: SignPropsType) => React.ReactNode;
  WalletConnect: (signProps: SignPropsType) => React.ReactNode;
  Extra: (signProps: SignPropsType) => React.ReactNode;
}

interface SignTransactionsPropsType {
  className?: string;
  CustomConfirmScreens?: CustomConfirmScreensType;
}

function SignTransactionsModals({
  className,
  CustomConfirmScreens
}: SignTransactionsPropsType) {
  const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    onAbort,
    hasTransactions
  } = useSignTransactions();

  const { providerType } = useGetAccountProvider();
  const signTransactionsError = useGetSignTransactionsError();

  const handleClose = () => {
    onAbort(sessionId);
  };

  const signError = error || signTransactionsError;

  const signProps: SignPropsType = {
    handleClose,
    error: signError,
    sessionId,
    transactions: transactions!,
    providerType,
    callbackRoute: callbackRoute!,
    className
  };
  return signError || hasTransactions ? (
    <React.Fragment>
      {getIsProviderEqualTo(LoginMethodsEnum.ledger) &&
        (CustomConfirmScreens?.Ledger?.(signProps) || (
          <SignWithLedgerModal {...signProps} />
        ))}
      {getIsProviderEqualTo(LoginMethodsEnum.walletconnect) &&
        (CustomConfirmScreens?.WalletConnect?.(signProps) || (
          <SignWithWalletConnectModal {...signProps} />
        ))}
      {getIsProviderEqualTo(LoginMethodsEnum.extension) &&
        (CustomConfirmScreens?.Extension?.(signProps) || (
          <SignWithExtensionModal {...signProps} />
        ))}
      {getIsProviderEqualTo(LoginMethodsEnum.extra) &&
        CustomConfirmScreens?.Extra?.(signProps)}
    </React.Fragment>
  ) : null;
}

export default withClassNameWrapper(SignTransactionsModals);
