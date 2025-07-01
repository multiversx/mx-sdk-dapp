import { TransactionActionsEnum } from 'types/serverTransactions.types';
export declare const baseTransactionMock: {
    blockHash: string;
    price: number;
    txHash: string;
    gasLimit: number;
    gasPrice: number;
    gasUsed: number;
    miniBlockHash: string;
    nonce: number;
    receiver: string;
    receiverShard: number;
    round: number;
    sender: string;
    senderShard: number;
    signature: string;
    status: string;
    value: string;
    fee: string;
    timestamp: number;
    data: string;
    action: {
        category: string;
        name: TransactionActionsEnum;
    };
};
//# sourceMappingURL=base-transaction-mock.d.ts.map