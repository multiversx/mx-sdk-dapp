import { CustomNetworkType, DappConfigType, IDappProvider, EnvironmentsEnum } from '../types';
export interface UseAppInitializerPropsType {
    customNetworkConfig?: CustomNetworkType;
    externalProvider?: IDappProvider;
    environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum | string;
    dappConfig?: DappConfigType;
}
export interface AppInitializerPropsType extends UseAppInitializerPropsType {
    children?: any;
}
export declare const useAppInitializer: ({ customNetworkConfig, environment, dappConfig }: UseAppInitializerPropsType) => {
    initialized: boolean;
};
export declare function AppInitializer({ customNetworkConfig, children, environment, dappConfig }: AppInitializerPropsType): any;
//# sourceMappingURL=AppInitializer.d.ts.map