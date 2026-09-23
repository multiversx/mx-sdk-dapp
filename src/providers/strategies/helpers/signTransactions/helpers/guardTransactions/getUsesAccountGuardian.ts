import { Transaction } from 'lib/sdkCore';

// sent by the account itself, or by a contract (multisig) on its behalf
export const getUsesAccountGuardian = (
  transaction: Transaction,
  address: string
) =>
  transaction.sender.toBech32() === address ||
  transaction.sender.isSmartContract();
