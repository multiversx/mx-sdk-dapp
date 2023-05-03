import { Transaction } from '@multiversx/sdk-core';
import { getEnvironmentForChainId } from 'apiCalls/configuration';
import {
  WALLET_SIGN_SESSION,
  fallbackNetworkConfigurations
} from 'constants/index';

import { newWalletProvider } from 'providers/utils';
import { builtCallbackUrl } from 'utils/transactions/builtCallbackUrl';
import { getAreAllTransactionsSignedByGuardian } from './getAreAllTransactionsSignedByGuardian';

interface SendTransactionsToGuardianType {
  transactions: Transaction[];
  hasGuardianScreen?: boolean;
  isGuarded?: boolean;
  callbackRoute?: string;
  sessionId?: string;
  walletAddress?: string;
}

export const checkNeedsGuardianSigning = ({
  transactions,
  hasGuardianScreen,
  callbackRoute,
  sessionId,
  walletAddress,
  isGuarded
}: SendTransactionsToGuardianType) => {
  const allSignedByGuardian = getAreAllTransactionsSignedByGuardian({
    isGuarded,
    transactions
  });

  /**
   * Redirect to wallet for signing if:
   * - account is guarded &
   * - 2FA will not be provided locally &
   * - transactions were not signed by guardian
   */
  const sendTransactionsToGuardian = () => {
    const chainId = transactions[0].getChainID().valueOf();
    const environment = getEnvironmentForChainId(chainId);
    const walletProviderAddress =
      walletAddress ?? fallbackNetworkConfigurations[environment].walletAddress;
    const walletProvider = newWalletProvider(walletProviderAddress);
    const urlParams = { [WALLET_SIGN_SESSION]: String(sessionId) };
    const callbackUrl = window?.location
      ? `${window.location.origin}${callbackRoute}`
      : `${callbackRoute}`;
    const builtedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

    walletProvider.guardTransactions(transactions, {
      callbackUrl: encodeURIComponent(builtedCallbackUrl)
    });
  };

  const needs2FaSigning =
    isGuarded && !hasGuardianScreen && !allSignedByGuardian && sessionId;

  return {
    needs2FaSigning,
    sendTransactionsToGuardian
  };
};
