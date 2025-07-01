import { PayloadAction } from '@reduxjs/toolkit';
import { SignedMessageStatusesEnum } from 'types';
export interface SignedSessionPayloadType {
    sessionId: string;
    errorMessage?: string;
    signedSession: SignedSessionType;
}
export interface SignedMessageInfoStatePayloadType {
    errorMessage?: string;
    isSigning: boolean;
}
export interface SignedSessionStatusPayloadType {
    sessionId: string;
    status: SignedMessageStatusesEnum;
}
export interface SignedMessageInfoType {
    message?: string;
    signature?: string;
}
export interface SignedSessionType extends SignedMessageInfoType {
    callbackUrl?: string;
    status: SignedMessageStatusesEnum;
}
export interface SignedMessageInfoStateType extends SignedMessageInfoStatePayloadType {
    signedSessions: {
        [sessionId: string]: SignedSessionType;
    };
}
export declare const signedMessageInfoSlice: import("@reduxjs/toolkit").Slice<SignedMessageInfoStateType, {
    setSignSession: (state: SignedMessageInfoStateType, action: PayloadAction<SignedSessionPayloadType>) => void;
    setSignSessionState: (state: SignedMessageInfoStateType, action: PayloadAction<SignedMessageInfoStatePayloadType>) => {
        errorMessage?: string | undefined;
        isSigning: boolean;
        signedSessions: {
            [sessionId: string]: SignedSessionType;
        };
    };
    clearSignedMessageInfo: () => SignedMessageInfoStateType;
}, "signedMessageInfoSliceState">;
export declare const setSignSession: import("@reduxjs/toolkit").ActionCreatorWithPayload<SignedSessionPayloadType, string>, clearSignedMessageInfo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setSignSessionState: import("@reduxjs/toolkit").ActionCreatorWithPayload<SignedMessageInfoStatePayloadType, string>;
export declare const signedMessageInfoReducer: import("redux").Reducer<SignedMessageInfoStateType, import("redux").AnyAction>;
//# sourceMappingURL=signedMessageInfoSlice.d.ts.map