import { providerLabels } from 'constants/providerFactory.constants';
import { getLedgerErrorCodes } from './getLedgerErrorCodes';
import { signMessage } from '../../helpers/signMessage/signMessage';
import { Message } from 'lib/sdkCore';

export async function signLedgerMessage({
  message,
  handleSignMessage
}: {
  message: Message;
  handleSignMessage: (msg: Message) => Promise<Message>;
}): Promise<Message> {
  try {
    const signedMessage = await signMessage({
      message,
      handleSignMessage: handleSignMessage,
      providerType: providerLabels.ledger
    });
    return signedMessage;
  } catch (error) {
    const { errorMessage } = getLedgerErrorCodes(error);
    throw errorMessage ? { message: errorMessage } : error;
  }
}
