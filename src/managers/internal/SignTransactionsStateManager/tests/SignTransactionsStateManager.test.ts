import { Address, Transaction } from 'lib/sdkCore';
import { SignTransactionsStateManager } from 'managers/internal/SignTransactionsStateManager/SignTransactionsStateManager';

const createTransaction = (sender: string, gasPrice: number) =>
  new Transaction({
    nonce: BigInt(7),
    value: BigInt(0),
    sender: Address.newFromBech32(sender),
    receiver: Address.newFromBech32(sender),
    gasLimit: BigInt(50000),
    gasPrice: BigInt(gasPrice),
    chainID: 'D'
  });

const ALICE = 'erd1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssycr6th';
const BOB = 'erd1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqzu66jx';

describe('SignTransactionsStateManager gas prices', () => {
  it('keeps a separate gas price for transactions with the same nonce', () => {
    const manager = SignTransactionsStateManager.getInstance();
    const own = createTransaction(ALICE, 1_000_000_000);
    const other = createTransaction(BOB, 2_000_000_000);

    manager.initializeGasPriceMap([own, other]);

    expect(manager.getGasPriceData(own).gasPriceOption).toBe(1_000_000_000);
    expect(manager.getGasPriceData(other).gasPriceOption).toBe(2_000_000_000);
  });

  it('keeps the initial gas price when the option changes', () => {
    const manager = SignTransactionsStateManager.getInstance();
    const transaction = createTransaction(ALICE, 1_000_000_000);

    manager.initializeGasPriceMap([transaction]);
    manager.updateGasPriceMap({ transaction, gasPriceOption: 1_500_000_000 });

    expect(manager.getGasPriceData(transaction)).toEqual({
      initialGasPrice: 1_000_000_000,
      gasPriceOption: 1_500_000_000
    });
  });
});
