import { Transaction } from '@multiversx/sdk-core';
import { safeWindow } from '@multiversx/sdk-web-wallet-cross-window-provider/out/constants';
import { getEnvironmentForChainId } from 'apiCalls/configuration';
import { getCrossWindowProvider } from 'components/ProviderInitializer/helpers';
import {
  WALLET_SIGN_SESSION,
  fallbackNetworkConfigurations
} from 'constants/index';

import { newWalletProvider } from 'providers/utils';
import { builtCallbackUrl } from 'utils/transactions/builtCallbackUrl';
import { getWindowLocation } from 'utils/window/getWindowLocation';
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

  const chainId = transactions[0].getChainID().valueOf();
  const environment = getEnvironmentForChainId(chainId);
  const walletProviderAddress =
    walletAddress ?? fallbackNetworkConfigurations[environment].walletAddress;

  /**
   * @deprecated Since version 2.29.0, use {@link guardTransactions} instead.
   * Redirect to wallet for signing if:
   * - account is guarded &
   * - 2FA will not be provided locally &
   * - transactions were not signed by guardian
   */
  const sendTransactionsToGuardian = () => {
    const walletProvider = newWalletProvider(walletProviderAddress);
    const urlParams = { [WALLET_SIGN_SESSION]: String(sessionId) };
    const { origin } = getWindowLocation();
    const callbackUrl = window?.location
      ? `${origin}${callbackRoute}`
      : `${callbackRoute}`;
    const builtedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

    walletProvider.guardTransactions(transactions, {
      callbackUrl: encodeURIComponent(builtedCallbackUrl)
    });
  };

  const guardTransactions = async () => {
    const provider = await getCrossWindowProvider({
      address: transactions[0].getSender().toString(),
      walletUrl: walletProviderAddress
    });

    const isSafari = /^((?!chrome|android).)*safari/i.test(
      safeWindow?.navigator?.userAgent ?? ''
    );

    if (provider && isSafari) {
      provider.setShouldShowConsentPopup(true);
    }

    const transactionsSignedByGuardian = await provider?.guardTransactions(
      transactions
    );
    return transactionsSignedByGuardian ?? [];
  };

  const needs2FaSigning =
    !hasGuardianScreen && !allSignedByGuardian && sessionId;

  return {
    needs2FaSigning: isGuarded ? needs2FaSigning : false,
    sendTransactionsToGuardian,
    guardTransactions
  };
};
