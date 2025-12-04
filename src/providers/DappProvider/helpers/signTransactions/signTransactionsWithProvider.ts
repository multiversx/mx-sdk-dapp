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
  const { isGuarded, activeGuardianAddress, nonce } = getAccount();
  const isLedger = provider.getType() === ProviderTypeEnum.ledger;

  const transactionsWithComputedNonce = computeNonces({
    latestNonce: nonce,
    transactions
  });

  const transactionsToSign =
    activeGuardianAddress && isGuarded && !options.skipGuardian
      ? transactionsWithComputedNonce?.map((transaction) => {
          transaction.version = TransactionVersion.withTxOptions().valueOf();
          transaction.options = TransactionOptions.withOptions({
            guarded: true,
            ...(isLedger ? { hashSign: true } : {})
          }).valueOf();

          transaction.guardian = Address.newFromBech32(activeGuardianAddress);

          return transaction;
        })
      : transactionsWithComputedNonce;

  const signedTransactions: Transaction[] =
    (await provider.signTransactions(transactionsToSign, options)) ?? [];

  setAccountNonce(nonce + signedTransactions.length);

  return signedTransactions;
}
