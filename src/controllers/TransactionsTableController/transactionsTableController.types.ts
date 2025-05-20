import {
  TransactionAgeType,
  TransactionMethodType
} from 'types/serverTransactions.types';

export interface TransactionsTableRowType {
  age: TransactionAgeType;
  direction?: string;
  method: TransactionMethodType;
  iconInfo: TransactionIconInfoType;
  link: string;
  receiver: TransactionAccountType;
  sender: TransactionAccountType;
  txHash: string;
  value: TransactionValueType;
}

export interface TransactionIconInfoType {
  icon?: string;
  tooltip: string;
}

export interface TransactionAccountType {
  address: string;
  description: string;
  isContract: boolean;
  isTokenLocked: boolean;
  link: string;
  name: string;
  shard?: string;
  shardLink?: string;
  showLink: boolean;
}

export interface TransactionValueType {
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
}
