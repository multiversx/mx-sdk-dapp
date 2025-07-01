/// <reference types="react" />
import { WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType, WithTransactionType } from '../../../UI/types';
export interface TransactionRowPropsType extends WithTransactionType, WithClassnameType {
    showDirectionCol?: boolean;
    showLockedAccounts?: boolean;
}
export declare const TransactionRowComponent: ({ className, transaction, showDirectionCol, showLockedAccounts, globalStyles, styles }: TransactionRowPropsType & WithStylesImportType) => JSX.Element;
export declare const TransactionRow: (props: TransactionRowPropsType) => JSX.Element;
//# sourceMappingURL=TransactionRow.d.ts.map