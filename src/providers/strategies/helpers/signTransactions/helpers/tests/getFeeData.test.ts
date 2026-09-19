import { GAS_PER_DATA_BYTE, GAS_PRICE_MODIFIER } from 'constants/mvx.constants';
import { Address, Transaction, TransactionComputer } from 'lib/sdkCore';
import { getFeeData } from '../getFeeData';

const address = Address.newFromHex('11'.repeat(32));

const createTransaction = (data: Uint8Array, gasLimit = 57_500n) =>
  new Transaction({
    nonce: 1n,
    value: 0n,
    sender: address,
    receiver: address,
    gasLimit,
    gasPrice: 1_000_000_000n,
    chainID: 'D',
    data
  });

describe('getFeeData', () => {
  it('computes the fee of plain Uint8Array data like sdk-core does', () => {
    const transaction = createTransaction(
      Uint8Array.from(Buffer.from('hello'))
    );

    const expectedFee = new TransactionComputer().computeTransactionFee(
      transaction,
      {
        gasPerDataByte: BigInt(GAS_PER_DATA_BYTE),
        minGasLimit: 50_000n,
        gasPriceModifier: GAS_PRICE_MODIFIER,
        chainID: 'D'
      }
    );

    expect(getFeeData({ transaction }).feeLimit).toBe(expectedFee.toString());
  });

  it('does not report a zero fee when the fee cannot be computed', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const transaction = createTransaction(
      Uint8Array.from(Buffer.from('hello')),
      1n
    );

    const feeData = getFeeData({ transaction, price: 30 });

    expect(feeData.feeLimit).toBeNull();
    expect(feeData.feeLimitFormatted).toBe('');
    expect(feeData.feeInFiatLimit).toBeNull();

    consoleSpy.mockRestore();
  });
});
