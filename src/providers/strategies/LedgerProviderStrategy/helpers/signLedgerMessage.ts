import { providerLabels } from 'constants/providerFactory.constants';
import { Message } from 'lib/sdkCore';
import { ledgerConfigSelector } from 'store/selectors/configSelectors';
import { getState } from 'store/store';
import { getLedgerErrorCodes } from './getLedgerErrorCodes';
import { signMessage } from '../../helpers/signMessage/signMessage';

export async function signLedgerMessage({
  message,
  handleSignMessage
}: {
  message: Message;
  handleSignMessage: (msg: Message) => Promise<Message>;
}): Promise<Message> {
  try {
    const ledgerConfig = ledgerConfigSelector(getState());

    const signedMessage = await signMessage({
      message,
      handleSignMessage: handleSignMessage,
      providerType: providerLabels.ledger,
      disableUI: ledgerConfig?.disableUI
    });
    return signedMessage;
  } catch (error) {
    const { errorMessage } = getLedgerErrorCodes(error);
    throw errorMessage ? { message: errorMessage } : error;
  }
}
