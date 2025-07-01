import { Message, Transaction } from '@multiversx/sdk-core';
import { IDAppProviderAccount } from '@multiversx/sdk-dapp-utils/out';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import { WalletProvider } from '@multiversx/sdk-web-wallet-provider';
import { IDappProvider } from 'types';
import { LoginMethodsEnum } from 'types/enums.types';
import { EngineTypes } from 'utils/walletconnect/__sdkWalletconnectProvider';
export declare const DAPP_INIT_ROUTE = "/dapp/init";
export declare const getProviderType: <TProvider extends object>(provider?: TProvider | null | undefined) => LoginMethodsEnum;
export declare const newWalletProvider: (walletAddress: string) => WalletProvider;
export declare const getLedgerConfiguration: (initializedHwWalletP: HWProvider) => Promise<{
    version: string;
    dataEnabled: boolean;
}>;
export declare class EmptyProvider implements IDappProvider {
    init(): Promise<boolean>;
    getAccount(): IDAppProviderAccount | null;
    setAccount(account: IDAppProviderAccount): void;
    login<TOptions = {
        callbackUrl?: string;
    } | undefined, TResponse = string>(options?: TOptions): Promise<TResponse>;
    logout<TOptions = {
        callbackUrl?: string;
    }, TResponse = boolean>(options?: TOptions): Promise<TResponse>;
    getAddress(): Promise<string>;
    isInitialized(): boolean;
    isConnected(): boolean;
    sendTransaction?<TOptions = {
        callbackUrl?: string;
    }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse>;
    signTransaction<TOptions = {
        callbackUrl?: string;
    }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse>;
    signTransactions<TOptions = {
        callbackUrl?: string;
    }, TResponse = []>(transactions: [], options?: TOptions): Promise<TResponse>;
    signMessage<T extends Message, TOptions = {
        callbackUrl?: string;
    }>(message: T, options: TOptions): Promise<T>;
    sendCustomMessage?({ method, params }: {
        method: string;
        params: any;
    }): Promise<any>;
    sendCustomRequest?(options?: {
        request: EngineTypes.RequestParams['request'];
    }): Promise<any>;
    ping?(): Promise<boolean>;
}
export declare const emptyProvider: EmptyProvider;
//# sourceMappingURL=utils.d.ts.map