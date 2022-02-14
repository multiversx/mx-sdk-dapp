import React from 'react';

import { useGetAccountProvider, useSignTransactions } from 'hooks';
import { LoginMethodsEnum } from 'types';
import { getIsProviderEqualTo } from 'utils';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';
import SignWithExtensionModal from './SignWithExtensionModal';
import SignWithLedgerModal from './SignWithLedgerModal';
import SignWithWalletConnectModal from './SignWithWalletConnectModal';

function SignTransactionsModals({ className }: { className?: string }) {
  const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    onAbort,
    hasTransactions
  } = useSignTransactions();

  const { providerType } = useGetAccountProvider();

  const handleClose = () => {
    onAbort(sessionId);
  };

  const signProps = {
    handleClose,
    error,
    sessionId,
    transactions: transactions!,
    providerType,
    callbackRoute: callbackRoute!,
    className
  };

  return error || hasTransactions ? (
    <React.Fragment>
      {getIsProviderEqualTo(LoginMethodsEnum.ledger) && (
        <SignWithLedgerModal {...signProps} />
      )}
      {getIsProviderEqualTo(LoginMethodsEnum.walletconnect) && (
        <SignWithWalletConnectModal {...signProps} />
      )}
      {getIsProviderEqualTo(LoginMethodsEnum.extension) && (
        <SignWithExtensionModal {...signProps} />
      )}
    </React.Fragment>
  ) : null;
}

export default withClassNameWrapper(SignTransactionsModals);
