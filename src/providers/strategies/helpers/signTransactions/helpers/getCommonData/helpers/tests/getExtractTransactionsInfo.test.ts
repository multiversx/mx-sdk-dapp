import { getScamAddressData } from 'apiCalls/account/getScamAddressData';
import { Address, Transaction } from 'lib/sdkCore';
import { getExtractTransactionsInfo } from '../getExtractTransactionsInfo';

jest.mock('apiCalls/account/getScamAddressData');
jest.mock('apiCalls/account/getAccountFromApi');

const sender = Address.newFromHex('11'.repeat(32));
const destination = Address.newFromHex('44'.repeat(32));

const createMultiTransfer = () =>
  new Transaction({
    nonce: 1n,
    value: 0n,
    sender,
    receiver: sender,
    gasLimit: 1_000_000n,
    chainID: 'D',
    data: new Uint8Array(
      Buffer.from(
        `MultiESDTNFTTransfer@${destination.toHex()}@01@544f4b454e2d313233343536@@01`
      )
    )
  });

const extract = (transaction: Transaction) =>
  getExtractTransactionsInfo({
    egldLabel: 'EGLD',
    apiAddress: 'https://devnet-api.multiversx.com',
    sender: sender.toBech32(),
    address: sender.toBech32(),
    parsedTransactionsByDataField: {}
  })({ transaction, transactionIndex: 0, needsSigning: true });

describe('getExtractTransactionsInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('checks and returns the embedded destination of a transfer sent to self', async () => {
    (getScamAddressData as jest.Mock).mockResolvedValue({
      scamInfo: { type: 'scam', info: 'Reported address' }
    });

    const result = await extract(createMultiTransfer());

    expect(getScamAddressData).toHaveBeenCalledWith(
      expect.objectContaining({ addressToVerify: destination.toBech32() })
    );
    expect(result?.receiver).toBe(destination.toBech32());
    expect(result?.receiverScamInfo).toBe('Reported address');
  });

  it('does not fail when the address check fails', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    (getScamAddressData as jest.Mock).mockRejectedValue(
      new Error('Network Error')
    );

    const transaction = createMultiTransfer();
    transaction.receiver = sender;
    transaction.data = new Uint8Array(
      Buffer.from(
        `MultiESDTNFTTransfer@${'55'.repeat(32)}@01@544f4b454e2d313233343536@@01`
      )
    );

    await expect(extract(transaction)).resolves.toMatchObject({
      receiverScamInfo: null
    });

    consoleSpy.mockRestore();
  });
});
