import { PendingTransactionsStateManager } from 'core/managers/internal/PendingTransactionsStateManager/PendingTransactionsStateManager';
import { ProviderErrorsEnum } from 'types/provider.types';

export async function getPendingTransactionsHandlers<T>(props?: {
  cancelAction?: () => Promise<T> | undefined;
}) {
  const pendingTransactionsStateManager =
    PendingTransactionsStateManager.getInstance();

  const eventBus = await pendingTransactionsStateManager.getEventBus();

  if (!eventBus) {
    throw new Error(ProviderErrorsEnum.eventBusError);
  }

  const onClose = async ({
    shouldCancelAction = true
  }: { shouldCancelAction?: boolean } = {}) => {
    pendingTransactionsStateManager.closeAndReset();

    if (shouldCancelAction && props?.cancelAction) {
      await props.cancelAction();
    }
  };

  return { eventBus, manager: pendingTransactionsStateManager, onClose };
}
