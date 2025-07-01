import { PayloadAction } from '@reduxjs/toolkit';
import { NotificationTypesEnum } from 'types';
export interface TxSubmittedModal {
    sessionId: string;
    submittedMessage: string;
}
export interface NotificationModal {
    type: NotificationTypesEnum;
    iconClassName: string;
    title: string;
    description: string;
}
export interface ModalsSliceState {
    txSubmittedModal?: TxSubmittedModal;
    notificationModal?: NotificationModal;
}
export declare const modalsSlice: import("@reduxjs/toolkit").Slice<ModalsSliceState, {
    setTxSubmittedModal: (state: ModalsSliceState, action: PayloadAction<TxSubmittedModal>) => void;
    setNotificationModal: (state: ModalsSliceState, action: PayloadAction<NotificationModal>) => void;
    clearTxSubmittedModal: (state: ModalsSliceState) => void;
    clearNotificationModal: (state: ModalsSliceState) => void;
}, "modalsSlice">;
export declare const setTxSubmittedModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<TxSubmittedModal, string>, setNotificationModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<NotificationModal, string>, clearTxSubmittedModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, clearNotificationModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<ModalsSliceState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=modalsSlice.d.ts.map