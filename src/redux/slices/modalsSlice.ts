import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutAction } from '../commonActions';

export interface TxSubmittedModal {
  sessionId: string;
  submittedMessage: string;
}

export interface NotificationModal {
  icon: typeof faInfoCircle;
  iconClassName: string;
  title: string;
  description: string;
}

export interface ModalsSliceState {
  txSubmittedModal?: TxSubmittedModal;
  notificationModal?: NotificationModal;
}

const initialState: ModalsSliceState = {};

export const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState,
  reducers: {
    setTxSubmittedModal: (
      state: ModalsSliceState,
      action: PayloadAction<TxSubmittedModal>
    ) => {
      state.txSubmittedModal = action.payload;
    },
    setNotificationModal: (
      state: ModalsSliceState,
      action: PayloadAction<NotificationModal>
    ) => {
      state.notificationModal = action.payload;
    },
    clearTxSubmittedModal: (state: ModalsSliceState) => {
      state.txSubmittedModal = undefined;
    },
    clearNotificationModal: (state: ModalsSliceState) => {
      state.notificationModal = undefined;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  setTxSubmittedModal,
  setNotificationModal,
  clearTxSubmittedModal,
  clearNotificationModal
} = modalsSlice.actions;

export default modalsSlice.reducer;
