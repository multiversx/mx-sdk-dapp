import { PendingTransactionsStateManager } from 'managers/internal/PendingTransactionsStateManager/PendingTransactionsStateManager';

export async function getPendingTransactionsHandlers<T>(props?: {
  cancelAction?: () => Promise<T> | undefined;
}) {
  const pendingTransactionsStateManager =
    PendingTransactionsStateManager.getInstance();
  await pendingTransactionsStateManager.openUI();

  const onClose = async ({
    shouldCancelAction = true
  }: { shouldCancelAction?: boolean } = {}) => {
    pendingTransactionsStateManager.closeUI();

    if (shouldCancelAction && props?.cancelAction) {
      await props.cancelAction();
    }
  };

  return { manager: pendingTransactionsStateManager, onClose };
}
