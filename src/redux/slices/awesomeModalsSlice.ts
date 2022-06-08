import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationTypesEnum } from 'types';
import { logoutAction } from '../commonActions';

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
  visible: boolean;
}

const initialState: ModalsSliceState = {
  visible: false
};

export const awesomeModalsSlice = createSlice({
  name: 'awesomeModalsSlice',
  initialState,
  reducers: {
    setShowAwesomeModal: (
      state: ModalsSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.visible = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { setShowAwesomeModal } = awesomeModalsSlice.actions;

export default awesomeModalsSlice.reducer;
