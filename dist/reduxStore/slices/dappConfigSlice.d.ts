import { PayloadAction } from '@reduxjs/toolkit';
import { DappConfigType } from 'types';
export declare type DappConfigSliceStateType = DappConfigType | undefined;
export declare const dappConfigSlice: import("@reduxjs/toolkit").Slice<DappConfigType, {
    setDappConfig: (_state: DappConfigSliceStateType, action: PayloadAction<DappConfigSliceStateType>) => DappConfigSliceStateType;
}, "dappConfigSlice">;
export declare const setDappConfig: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<DappConfigSliceStateType, string>;
declare const _default: import("redux").Reducer<DappConfigType, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=dappConfigSlice.d.ts.map