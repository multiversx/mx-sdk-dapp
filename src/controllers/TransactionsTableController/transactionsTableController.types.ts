import {
  TransactionAgeType,
  TransactionIconInfoType,
  TransactionMethodType
} from 'types/serverTransactions.types';

export type TransactionsRowType = {
  age: TransactionAgeType;
  direction?: string;
  method: TransactionMethodType;
  iconInfo: TransactionIconInfoType;
  link: string;
  receiver: TransactionAccountType;
  sender: TransactionAccountType;
  txHash: string;
  value: TransactionValueType;
};

type TransactionAccountType = {
  address: string;
  description: string;
  isContract: boolean;
  isTokenLocked: boolean;
  link: string;
  name: string;
  shard?: string;
  shardLink?: string;
  showLink: boolean;
};

export type TransactionValueType = {
  badge?: string;
  collection?: string;
  egldLabel: string;
  link?: string;
  linkText?: string;
  name?: string;
  showFormattedAmount?: boolean;
  svgUrl?: string;
  ticker?: string;
  titleText?: string;
  valueDecimal: string;
  valueInteger: string;
};
