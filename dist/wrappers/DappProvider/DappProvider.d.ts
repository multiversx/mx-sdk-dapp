import React, { ReactElement } from 'react';
import { CustomNetworkType, IDappProvider, DappConfigType } from '../../types';
import { UseAppInitializerPropsType } from './../../wrappers/AppInitializer';
import { CustomComponentsType } from './CustomComponents';
export { DappConfigType };
export interface DappProviderPropsType {
    children: React.ReactNode | ReactElement;
    customNetworkConfig?: CustomNetworkType;
    externalProvider?: IDappProvider;
    environment: UseAppInitializerPropsType['environment'];
    customComponents?: CustomComponentsType;
    dappConfig?: DappConfigType;
}
export declare const DappProvider: ({ children, customNetworkConfig, externalProvider, environment, customComponents, dappConfig }: DappProviderPropsType) => JSX.Element;
//# sourceMappingURL=DappProvider.d.ts.map