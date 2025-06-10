import { providerLabels } from 'constants/providerFactory.constants';
import { Message } from 'lib/sdkCore';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import {
  ProviderType,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';
import { SigningWarningsEnum } from 'types/enums.types';
import { getPendingTransactionsHandlers } from '../getPendingTransactionsHandlers';

function isProviderType(type: string): type is ProviderType {
  return Object.values(ProviderTypeEnum).includes(type as ProviderType);
}

type SignMessageWithModalPropsType<T> = {
  message: Message;
  handleSignMessage: (message: Message) => Promise<Message>;
  cancelAction?: () => Promise<T> | undefined;
  providerType: string;
};

export async function signMessage<T>({
  message,
  handleSignMessage,
  cancelAction,
  providerType
}: SignMessageWithModalPropsType<T>): Promise<Message> {
  const signedMsg = await new Promise<Awaited<Message>>(
    async (resolve, reject) => {
      const { manager, onClose } = await getPendingTransactionsHandlers({
        cancelAction
      });

      const handleClose = async () => {
        await onClose({ shouldCancelAction: true });
        reject({ message: SigningWarningsEnum.cancelled });
      };

      manager.subscribeToEventBus(
        PendingTransactionsEventsEnum.CLOSE,
        handleClose
      );

      const providerKey = isProviderType(providerType)
        ? providerType
        : ProviderTypeEnum.none;

      manager.updateData({
        name: providerLabels[providerKey],
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
