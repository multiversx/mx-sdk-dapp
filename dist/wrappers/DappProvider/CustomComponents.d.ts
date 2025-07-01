/// <reference types="react" />
import { LogoutListener } from 'components/LogoutListener';
import { TransactionSender } from 'components/TransactionSender';
import { TransactionSenderType } from 'components/TransactionSender/types/transactionSender.types';
import { TransactionsTracker } from 'components/TransactionsTracker';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
export interface CustomComponentsType {
    transactionSender?: {
        component: typeof TransactionSender;
        props?: TransactionSenderType;
    };
    transactionTracker?: {
        component?: typeof TransactionsTracker;
        props?: TransactionsTrackerType;
    };
    logoutListener?: {
        component?: typeof LogoutListener;
    };
}
export declare function CustomComponents({ customComponents }: {
    customComponents?: CustomComponentsType;
}): JSX.Element;
//# sourceMappingURL=CustomComponents.d.ts.map