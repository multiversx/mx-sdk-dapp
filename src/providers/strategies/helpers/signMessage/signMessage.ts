import { providerLabels } from 'constants/providerFactory.constants';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import { SigningWarningsEnum } from 'types/enums.types';
import { getPendingTransactionsHandlers } from '../getPendingTransactionsHandlers';
import { Message } from 'lib/sdkCore';

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
        await onClose({ shouldCancelAction: false });
        reject({ message: SigningWarningsEnum.cancelled });
      };

      manager.subscribeToEventBus(
        PendingTransactionsEventsEnum.CLOSE,
        handleClose
      );

      manager.updateData({
        name: providerLabels[providerType],
        type: providerType
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
