import React from 'react';
import { useSignTransactions } from 'hooks/transactions/useSignTransactions';

export function SignWithExtraModal() {
  useSignTransactions();
  return <></>;
}
