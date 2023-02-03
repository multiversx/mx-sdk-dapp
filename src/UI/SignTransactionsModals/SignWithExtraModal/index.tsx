import { useSignTransactions } from 'hooks/transactions/useSignTransactions';
import React from 'react';

export function SignWithExtraModal() {
  useSignTransactions();
  return <></>;
}
