import {
  Address,
  Transaction,
  TransactionOptions,
  TransactionVersion
} from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import {
  IProvider,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';
import { setAccountNonce } from 'store/actions/account/accountActions';
import {
  getNextReservedNonce,
  releaseNonces,
  reserveNonces
} from 'utils/account/nonceReservations';
import { refreshAccount } from 'utils/account/refreshAccount';
import { computeNonces } from '../computeNonces/computeNonces';

export type SignTransactionsOptionsType = {
  skipGuardian?: boolean;
  callback?: (signedTransactions: Transaction[]) => Promise<Transaction[]>;
};

type SignTransactionsType = {
  provider: IProvider;
  transactions: Transaction[];
  options?: SignTransactionsOptionsType;
};

export async function signTransactionsWithProvider({
  provider,
  transactions,
  options = {}
}: SignTransactionsType): Promise<Transaction[]> {
  await refreshAccount();
  const { address, isGuarded, activeGuardianAddress, nonce } = getAccount();
  const isLedger = provider.getType() === ProviderTypeEnum.ledger;

  const getOwnTransactions = (transactionList: Transaction[]) =>
    transactionList.filter(
      (transaction) => transaction.sender.toBech32() === address
    );

  const getNonces = (transactionList: Transaction[]) =>
    transactionList.map((transaction) => Number(transaction.nonce));

  const ownTransactions = computeNonces({
    latestNonce: Math.max(nonce, getNextReservedNonce(address)),
    transactions: getOwnTransactions(transactions)
  });

  // Hold the nonces while the user signs, so a concurrent signing picks the next ones
  const computedNonces = getNonces(ownTransactions);
  reserveNonces(address, computedNonces);

  const transactionsToSign =
    activeGuardianAddress && isGuarded && !options.skipGuardian
      ? transactions.map((transaction) => {
          transaction.version = TransactionVersion.withTxOptions().valueOf();
          transaction.options = TransactionOptions.withOptions({
            guarded: true,
            ...(isLedger ? { hashSign: true } : {})
          }).valueOf();

          transaction.guardian = Address.newFromBech32(activeGuardianAddress);

          return transaction;
        })
      : transactions;

  let signedTransactions: Transaction[] = [];

  try {
    signedTransactions =
      (await provider.signTransactions(transactionsToSign, options)) ?? [];
  } finally {
    releaseNonces(address, computedNonces);
  }

  const signedNonces = getNonces(getOwnTransactions(signedTransactions));
  reserveNonces(address, signedNonces);

  if (signedNonces.length > 0) {
    setAccountNonce(Math.max(nonce, ...signedNonces) + 1);
  }

  return signedTransactions;
}
