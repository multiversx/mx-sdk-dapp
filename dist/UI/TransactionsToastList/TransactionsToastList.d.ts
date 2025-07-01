import React from 'react';
import { WithStylesImportType } from 'hocs/withStyles';
import { SignedTransactionsType } from 'types';
import { WithClassnameType } from '../types';
export interface TransactionsToastListPropsType extends WithClassnameType {
    toastProps?: any;
    withTxNonce?: boolean;
    signedTransactions?: SignedTransactionsType;
    successfulToastLifetime?: number;
    parentElement?: Element | DocumentFragment;
    transactionToastClassName?: string;
    customToastClassName?: string;
    children?: React.ReactNode;
}
export declare const TransactionsToastListComponent: ({ className, transactionToastClassName, customToastClassName, signedTransactions, successfulToastLifetime, parentElement, children, styles }: TransactionsToastListPropsType & WithStylesImportType) => JSX.Element;
export declare const TransactionsToastList: (props: TransactionsToastListPropsType) => JSX.Element;
//# sourceMappingURL=TransactionsToastList.d.ts.map