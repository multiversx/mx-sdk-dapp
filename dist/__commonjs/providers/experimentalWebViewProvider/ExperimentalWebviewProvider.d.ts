import { Message, Transaction } from '@multiversx/sdk-core';
import { IDAppProviderAccount } from '@multiversx/sdk-dapp-utils/out';
import { IDappProvider } from 'types/dappProvider.types';
/**
 * This is an experimental provider that uses @multiversx/webview-provider to handle the communication between .
 * Please do not use this provider or use it with caution.
 * It will be renamed to WebviewProvider once it is stable.
 * */
export declare class ExperimentalWebviewProvider implements IDappProvider {
    private static _instance;
    private readonly _provider;
    static getInstance(): ExperimentalWebviewProvider;
    getAccount(): IDAppProviderAccount | null;
    setAccount(account: IDAppProviderAccount): void;
    constructor();
    init: () => Promise<boolean>;
    login: () => Promise<{
        address: string;
    }>;
    logout: () => Promise<boolean>;
    relogin: () => Promise<string | null>;
    signTransactions: (transactionsToSign: Transaction[]) => Promise<Transaction[] | null>;
    signTransaction: (transaction: Transaction) => Promise<Transaction | undefined>;
    signMessage: (message: Message) => Promise<Message | null>;
    cancelAction: () => Promise<import("@multiversx/sdk-web-wallet-cross-window-provider/out/types").PostMessageReturnType<import("@multiversx/sdk-web-wallet-cross-window-provider/out/enums").WindowProviderRequestEnums.cancelAction>>;
    isInitialized: () => boolean;
    isConnected: () => boolean;
    sendCustomRequest: (payload: {
        request: {
            method: string;
            params: any;
        };
    }) => Promise<void>;
    getAddress: () => never;
}
//# sourceMappingURL=ExperimentalWebviewProvider.d.ts.map