import axios from 'axios';
import { testAddress } from '__mocks__';
import { Address, Transaction, TransactionComputer } from 'lib/sdkCore';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';
import { reconcileAccountNonce } from 'utils/account/reconcileAccountNonce';
import { TransactionManager } from '../TransactionManager';

jest.mock('axios');
jest.mock('utils/account/reconcileAccountNonce', () => ({
  reconcileAccountNonce: jest.fn().mockResolvedValue(undefined)
}));

const createTransaction = (nonce: number) =>
  new Transaction({
    nonce: BigInt(nonce),
    value: 0n,
    sender: Address.newFromBech32(testAddress),
    receiver: Address.newFromBech32(testAddress),
    gasLimit: 50_000n,
    chainID: 'D',
    signature: new Uint8Array(64)
  });

const httpError = (message: string) => ({
  response: { data: { message } }
});

const timeoutError = { code: 'ECONNABORTED' };

describe('TransactionManager.send', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('reconciles the nonce and rethrows when sending fails', async () => {
    (axios.post as jest.Mock).mockRejectedValue(
      httpError('insufficient funds')
    );

    await expect(
      TransactionManager.getInstance().send([createTransaction(7)])
    ).rejects.toBe('insufficient funds');

    expect(reconcileAccountNonce).toHaveBeenCalledTimes(1);
  });

  it('does not reconcile when sending succeeds', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: { txHash: 'a' } });

    await TransactionManager.getInstance().send([createTransaction(7)]);

    expect(reconcileAccountNonce).not.toHaveBeenCalled();
  });

  it('returns the accepted transactions when another one is rejected', async () => {
    (axios.post as jest.Mock)
      .mockResolvedValueOnce({ data: { txHash: 'accepted-hash' } })
      .mockRejectedValueOnce(httpError('second rejected'));

    const rejectedTransaction = createTransaction(8);

    const sentTransactions = (await TransactionManager.getInstance().send([
      createTransaction(7),
      rejectedTransaction
    ])) as SignedTransactionType[];

    expect(sentTransactions).toHaveLength(2);
    expect(sentTransactions[0]).toMatchObject({
      hash: 'accepted-hash',
      nonce: 7,
      status: TransactionServerStatusesEnum.pending
    });
    expect(sentTransactions[1]).toMatchObject({
      hash: new TransactionComputer().computeTransactionHash(
        rejectedTransaction
      ),
      nonce: 8,
      status: TransactionServerStatusesEnum.invalid
    });
    expect(reconcileAccountNonce).not.toHaveBeenCalled();
  });

  it('keeps a timed out transaction as pending under its computed hash', async () => {
    (axios.post as jest.Mock).mockRejectedValue(timeoutError);

    const transaction = createTransaction(7);

    const [sentTransaction] = (await TransactionManager.getInstance().send([
      transaction
    ])) as SignedTransactionType[];

    expect(sentTransaction).toMatchObject({
      hash: new TransactionComputer().computeTransactionHash(transaction),
      status: TransactionServerStatusesEnum.pending
    });
    expect(reconcileAccountNonce).not.toHaveBeenCalled();
  });

  it('throws when every transaction is rejected', async () => {
    (axios.post as jest.Mock)
      .mockRejectedValueOnce(httpError('first rejected'))
      .mockRejectedValueOnce(httpError('second rejected'));

    await expect(
      TransactionManager.getInstance().send([
        createTransaction(7),
        createTransaction(8)
      ])
    ).rejects.toBe('first rejected');

    expect(reconcileAccountNonce).toHaveBeenCalledTimes(1);
  });

  it('treats a network error without response as a rejection', async () => {
    (axios.post as jest.Mock).mockRejectedValue({
      code: 'ERR_NETWORK',
      message: 'Network Error'
    });

    await expect(
      TransactionManager.getInstance().send([createTransaction(7)])
    ).rejects.toBe('Network Error');
  });
});
