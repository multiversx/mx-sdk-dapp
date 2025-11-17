import { providerLabels } from 'constants/providerFactory.constants';
import { Message } from 'lib/sdkCore';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import { ProviderFactory } from 'providers/ProviderFactory';
import {
  ProviderType,
  ProviderTypeEnum,
  ICustomProvider
} from 'providers/types/providerFactory.types';
import { setIsSidePanelOpen } from 'store/actions/ui/uiActions';
import { SigningWarningsEnum } from 'types/enums.types';
import { getPendingTransactionsHandlers } from '../getPendingTransactionsHandlers';

type SignMessageWithModalPropsType<T> = {
  message: Message;
  handleSignMessage: (message: Message) => Promise<Message>;
  cancelAction?: () => Promise<T> | undefined;
  providerType: string;
  disableUI?: boolean;
};

const isProviderType = (
  allProviders: ICustomProvider[],
  type: string
): type is ProviderType =>
  allProviders.some((provider) => provider.type === type);

export async function signMessage<T>({
  message,
  handleSignMessage,
  cancelAction,
  providerType,
  disableUI = false
}: SignMessageWithModalPropsType<T>): Promise<Message> {
  if (disableUI) {
    // Mark signing as in progress so idle state manager doesn't interfere
    setIsSidePanelOpen(true);

    try {
      const signedMessage = await handleSignMessage(message);
      return signedMessage;
    } finally {
      setIsSidePanelOpen(false);
    }
  }

  const signedMsg = await new Promise<Awaited<Message>>(
    async (resolve, reject) => {
      const { manager, onClose } = await getPendingTransactionsHandlers({
        cancelAction
      });

      const allProviders = Object.values(ProviderFactory.customProviders);
      const allCustomProviderLabels = allProviders.reduce(
        (acc, provider) => {
          acc[provider.type] = provider.name;
          return acc;
        },
        {} as Record<ProviderType, string>
      );

      const allProviderLabels = {
        ...providerLabels,
        ...allCustomProviderLabels
      };

      const handleClose = async () => {
        await onClose({ shouldCancelAction: true });
        reject({ message: SigningWarningsEnum.cancelled });
      };

      manager.subscribeToEventBus(
        PendingTransactionsEventsEnum.CLOSE,
        handleClose
      );

      const providerKey = isProviderType(allProviders, providerType)
        ? providerType
        : ProviderTypeEnum.none;

      manager.updateData({
        name: allProviderLabels[providerKey],
        type: providerKey
      });

      try {
        const signedMessage = await handleSignMessage(message);
        resolve(signedMessage);
      } catch (err) {
        await onClose({ shouldCancelAction: true });
        reject(err);
      } finally {
        manager.closeUI();
      }
    }
  );
  return signedMsg;
}
