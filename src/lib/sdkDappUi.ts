export { MvxLedgerConnect } from '@multiversx/sdk-dapp-ui/web-components/mvx-ledger-connect';
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
} from '@multiversx/sdk-dapp-ui/types/components/visual/transaction-list-item/transaction-list-item.types';

export async function defineCustomElements(opts?: any): Promise<void> {
  try {
    const loader = await import('@multiversx/sdk-dapp-ui');

    console.log({ loader });
    loader.defineCustomElements(opts);
  } catch (err) {
    throw new Error('@multiversx/sdk-dapp-ui not found' + err);
  }
}
