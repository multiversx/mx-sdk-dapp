/// <reference types="react" />
import { WithStylesImportType } from 'hocs/withStyles';
import { WithTransactionType } from 'UI/types';
export interface TransactionSenderPropsType extends WithTransactionType {
    showLockedAccounts?: boolean;
}
export declare const TransactionSenderComponent: ({ transaction, showLockedAccounts, globalStyles, styles }: TransactionSenderPropsType & WithStylesImportType) => JSX.Element;
export declare const TransactionSender: (props: TransactionSenderPropsType) => JSX.Element;
//# sourceMappingURL=TransactionSender.d.ts.map