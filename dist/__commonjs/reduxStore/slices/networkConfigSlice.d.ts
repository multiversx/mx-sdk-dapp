import { PayloadAction } from '@reduxjs/toolkit';
import { AccountInfoSliceNetworkType, NetworkType } from 'types';
export interface NetworkConfigStateType {
    network: AccountInfoSliceNetworkType;
}
export declare const defaultNetwork: AccountInfoSliceNetworkType;
export declare const networkConfigSlice: import("@reduxjs/toolkit").Slice<NetworkConfigStateType, {
    initializeNetworkConfig: (state: NetworkConfigStateType, action: PayloadAction<NetworkType>) => void;
    updateNetworkConfig: (state: NetworkConfigStateType, action: PayloadAction<Partial<AccountInfoSliceNetworkType>>) => void;
    setCustomWalletAddress: (state: NetworkConfigStateType, action: PayloadAction<AccountInfoSliceNetworkType['customWalletAddress']>) => void;
}, "appConfig">;
export declare const initializeNetworkConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<NetworkType, string>, updateNetworkConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<AccountInfoSliceNetworkType>, string>, setCustomWalletAddress: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string | undefined, string>;
declare const _default: import("redux").Reducer<NetworkConfigStateType, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=networkConfigSlice.d.ts.map