import { IPlainTransactionObject } from '@multiversx/sdk-core/out';
import axios from 'axios';
import { networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { SignedTransactionType } from 'types';

export async function guardianSignTransactions({
  code,
  transactions
}: {
  code: string;
  transactions: IPlainTransactionObject[];
}): Promise<SignedTransactionType[]> {
  const { apiTimeout } = networkSelector(store.getState());
  const response = await axios.post(
    'https://mx-mfa-auth.elrond.ro/guardian/sign-multiple-transactions',
    { code, transactions },
    { timeout: parseInt(apiTimeout) }
  );

  return response.data.data.transactions;
}
