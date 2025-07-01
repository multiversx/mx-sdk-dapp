/// <reference types="react" />
import { WithStylesImportType } from 'hocs/withStyles';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { WithClassnameType, WithTransactionType } from '../../../../UI/types';
export declare const getStatusIconAndColor: (transaction: InterpretedTransactionType, globalStyles?: WithStylesImportType['globalStyles']) => {
    Icon: () => JSX.Element;
    color: string;
};
export declare const TransactionStatus: (props: WithTransactionType & WithClassnameType) => JSX.Element;
//# sourceMappingURL=TransactionStatus.d.ts.map