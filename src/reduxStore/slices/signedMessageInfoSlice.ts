import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignedMessageStatusesEnum } from 'types';
import { logoutAction } from '../commonActions';

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

export interface SignedMessageInfoStateType
  extends SignedMessageInfoStatePayloadType {
  signedSessions: {
    [sessionId: string]: SignedSessionType;
  };
}

const initialState: SignedMessageInfoStateType = {
  isSigning: false,
  signedSessions: {}
};

export const signedMessageInfoSlice = createSlice({
  name: 'signedMessageInfoSliceState',
  initialState,
  reducers: {
    setSignSession: (
      state: SignedMessageInfoStateType,
      action: PayloadAction<SignedSessionPayloadType>
    ) => {
      const { sessionId, signedSession, errorMessage } = action.payload;

      if (errorMessage) {
        state.errorMessage = errorMessage;
      }

      state.isSigning =
        signedSession.status === SignedMessageStatusesEnum.pending;

      state.signedSessions[sessionId] = signedSession;
    },
    setSignSessionState: (
      state: SignedMessageInfoStateType,
      action: PayloadAction<SignedMessageInfoStatePayloadType>
    ) => {
      return {
        ...state,
        ...action.payload
      };
    },
    clearSignedMessageInfo: () => {
      return initialState;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { setSignSession, clearSignedMessageInfo, setSignSessionState } =
  signedMessageInfoSlice.actions;

export const signedMessageInfoReducer = signedMessageInfoSlice.reducer;
