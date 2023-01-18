import { SignedMessageInfoStateType } from 'reduxStore/slices';
import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const signedMessageInfoSliceSelector = (state: RootState) =>
  state.signedMessageInfo;

export const signedMessageIsSigningSelector = createDeepEqualSelector(
  signedMessageInfoSliceSelector,
  (state: SignedMessageInfoStateType) => state.isSigning
);

export const signedMessageErrorSelector = createDeepEqualSelector(
  signedMessageInfoSliceSelector,
  (state: SignedMessageInfoStateType) => state.errorMessage
);

export const lastSignedSessionSelector = createDeepEqualSelector(
  signedMessageInfoSliceSelector,
  (state: SignedMessageInfoStateType) => {
    const sessionIds = Object.keys(state.signedSessions);
    const sessionIdsLength = sessionIds.length;

    return state.signedSessions[sessionIds[sessionIdsLength - 1]];
  }
);
