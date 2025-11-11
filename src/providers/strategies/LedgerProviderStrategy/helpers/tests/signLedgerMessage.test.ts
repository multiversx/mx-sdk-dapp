import { testAddress } from '__mocks__';
import { providerLabels } from 'constants/providerFactory.constants';
import { Address, Message } from 'lib/sdkCore';
import { signMessage } from '../../../helpers/signMessage/signMessage';
import { signLedgerMessage } from '../signLedgerMessage';

jest.mock('../../../helpers/signMessage/signMessage', () => ({
  signMessage: jest.fn()
}));

jest.mock('../getLedgerErrorCodes', () => ({
  getLedgerErrorCodes: jest.fn()
}));

const mockSignMessage = signMessage as jest.MockedFunction<typeof signMessage>;

describe('signLedgerMessage tests', () => {
  let mockMessage: Message;
  let mockHandleSignMessage: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockMessage = new Message({
      address: new Address(testAddress),
      data: new Uint8Array(Buffer.from('sample message'))
    });
    mockHandleSignMessage = jest.fn();
  });

  it('should successfully sign message and return signed message', async () => {
    const signedMessage = new Message({
      address: new Address(testAddress),
      data: new Uint8Array(Buffer.from('sample message')),
      signature: new Uint8Array([4, 5, 6])
    });

    mockSignMessage.mockResolvedValue(signedMessage);

    const result = await signLedgerMessage({
      message: mockMessage,
      handleSignMessage: mockHandleSignMessage
    });

    expect(mockSignMessage).toHaveBeenCalledWith({
      message: mockMessage,
      handleSignMessage: mockHandleSignMessage,
      providerType: providerLabels.ledger
    });
    expect(result).toEqual(signedMessage);
  });
});
