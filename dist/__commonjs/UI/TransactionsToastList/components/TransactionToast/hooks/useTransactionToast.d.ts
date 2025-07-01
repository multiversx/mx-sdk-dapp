import { TransactionToastDefaultProps } from '../transactionToast.type';
export declare const useTransactionToast: ({ toastId, transactions, status, lifetimeAfterSuccess, startTimestamp, endTimeProgress, onDelete }: TransactionToastDefaultProps) => {
    isCrossShard: boolean;
    progress: {
        startTime: number;
        endTime: number;
    };
    isPending: boolean;
    isTimedOut: boolean;
    toastDataState: {
        id: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        title: string;
        hasCloseButton: boolean;
        iconClassName: string;
    };
    handleDeleteToast: () => void;
};
//# sourceMappingURL=useTransactionToast.d.ts.map