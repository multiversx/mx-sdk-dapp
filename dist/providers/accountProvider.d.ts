import { ExtensionProvider } from '@multiversx/sdk-extension-provider';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import { MetamaskProvider } from '@multiversx/sdk-metamask-provider/out/metamaskProvider';
import { OperaProvider } from '@multiversx/sdk-opera-provider';
import { PasskeyProvider } from '@multiversx/sdk-passkey-provider/out';
import { WalletProvider } from '@multiversx/sdk-web-wallet-provider';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import { IDappProvider } from 'types';
import { WalletConnectV2Provider } from 'utils/walletconnect/__sdkWalletconnectProvider';
export declare type ProvidersType = IDappProvider | ExtensionProvider | PasskeyProvider | MetamaskProvider | WalletProvider | CrossWindowProvider | IframeProvider | HWProvider | OperaProvider | WalletConnectV2Provider;
export declare function setAccountProvider<TProvider extends ProvidersType>(provider: TProvider): void;
export declare function setExternalProvider(provider: IDappProvider): void;
export declare function setExternalProviderAsAccountProvider(): void;
export declare function getAccountProvider(): IDappProvider;
export declare function getExternalProvider(): IDappProvider | null;
//# sourceMappingURL=accountProvider.d.ts.map