import { EnvironmentsEnum, NetworkType } from 'types';
export interface GetServerConfigurationForEnvironmentOptionsType {
    apiAddress?: string;
}
export declare function getServerConfigurationForEnvironment(environment: EnvironmentsEnum, options?: GetServerConfigurationForEnvironmentOptionsType): Promise<NetworkType>;
//# sourceMappingURL=getServerConfigurationForEnvironment.d.ts.map