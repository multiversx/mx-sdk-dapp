import { Address, Transaction } from 'lib/sdkCore';
import { getEffectiveReceiver } from '../getEffectiveReceiver';

const sender = Address.newFromHex('11'.repeat(32));
const destination = Address.newFromHex('22'.repeat(32));
const other = Address.newFromHex('33'.repeat(32));

const createTransaction = (receiver: Address, data: string) =>
  new Transaction({
    nonce: 1n,
    value: 0n,
    sender,
    receiver,
    gasLimit: 1_000_000n,
    chainID: 'D',
    data: new Uint8Array(Buffer.from(data))
  });

describe('getEffectiveReceiver', () => {
  it('returns the receiver of a plain transfer', () => {
    expect(getEffectiveReceiver(createTransaction(other, ''))).toBe(
      other.toBech32()
    );
  });

  it('returns the destination of a MultiESDTNFTTransfer sent to self', () => {
    const data = `MultiESDTNFTTransfer@${destination.toHex()}@02@544f4b454e2d313233343536@@01@544f4b454e2d616263646566@@02`;

    expect(getEffectiveReceiver(createTransaction(sender, data))).toBe(
      destination.toBech32()
    );
  });

  it('returns the destination of an ESDTNFTTransfer sent to self', () => {
    const data = `ESDTNFTTransfer@4e46542d313233343536@01@01@${destination.toHex()}`;

    expect(getEffectiveReceiver(createTransaction(sender, data))).toBe(
      destination.toBech32()
    );
  });

  it('reads plain Uint8Array data', () => {
    const transaction = createTransaction(sender, '');
    transaction.data = Uint8Array.from(
      Buffer.from(`ESDTNFTTransfer@4e4654@01@01@${destination.toHex()}`)
    );

    expect(getEffectiveReceiver(transaction)).toBe(destination.toBech32());
  });

  it('keeps the receiver when the embedded address is malformed', () => {
    const data = 'MultiESDTNFTTransfer@0g@01@544f4b454e@@01';

    expect(getEffectiveReceiver(createTransaction(sender, data))).toBe(
      sender.toBech32()
    );
  });

  it('keeps the receiver when the transfer is not sent to self', () => {
    const data = `MultiESDTNFTTransfer@${destination.toHex()}@01@544f4b454e@@01`;

    expect(getEffectiveReceiver(createTransaction(other, data))).toBe(
      other.toBech32()
    );
  });
});
