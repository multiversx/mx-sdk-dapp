import { safeWindow } from '../constants/window.constants';
export type { MvxSignTransactionsPanel } from '@multiversx/sdk-dapp-ui/web-components/mvx-sign-transactions-panel';
export type { MvxWalletConnect } from '@multiversx/sdk-dapp-ui/web-components/mvx-wallet-connect';
export type { MvxPendingTransactionsPanel } from '@multiversx/sdk-dapp-ui/web-components/mvx-pending-transactions-panel';
export type { MvxNotificationsFeed } from '@multiversx/sdk-dapp-ui/web-components/mvx-notifications-feed';
export type { MvxToastList } from '@multiversx/sdk-dapp-ui/web-components/mvx-toast-list';
export type { MvxUnlockPanel } from '@multiversx/sdk-dapp-ui/web-components/mvx-unlock-panel';

export type { IEventBus } from '@multiversx/sdk-dapp-ui/types/utils/EventBus';
export type {
  ITransactionListItem,
  ITransactionListItemAsset,
  ITransactionListItemAction
} from '@multiversx/sdk-dapp-ui/types/components/functional/notifications-feed/components/TransactionListItem/transactionListItem.types';

export async function defineCustomElements(opts?: any): Promise<void> {
  const isReactNative =
    typeof safeWindow.navigator !== 'undefined' &&
    safeWindow.navigator.product === 'ReactNative';

  if (isReactNative || !safeWindow) {
    return;
  }

  try {
    const loader = await import('@multiversx/sdk-dapp-ui');
    loader.defineCustomElements(opts);
  } catch (err) {
    console.warn('@multiversx/sdk-dapp-ui not found' + err);
  }
}
