import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutAction } from '../commonActions';
import { DappModalConfig } from '../../UI/DappModal/types';

export interface ModalsSliceState extends DappModalConfig {
  visible: boolean;
}

const initialState: ModalsSliceState = {
  visible: false,
  showHeader: true,
  showFooter: false,
  headerText: '',
  footerText: ''
};

export const dappModalsSlice = createSlice({
  name: 'dappModalsSlice',
  initialState,
  reducers: {
    setDappModalVisibility: (
      state: ModalsSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.visible = action.payload;
    },
    setDappModalHeaderVisibility: (
      state: ModalsSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.showHeader = action.payload;
    },
    setDappModalFooterVisibility: (
      state: ModalsSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.showFooter = action.payload;
    },
    setDappModalHeaderText: (
      state: ModalsSliceState,
      action: PayloadAction<string>
    ) => {
      state.headerText = action.payload;
    },
    setDappModalFooterText: (
      state: ModalsSliceState,
      action: PayloadAction<string>
    ) => {
      state.footerText = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  setDappModalVisibility,
  setDappModalHeaderVisibility,
  setDappModalFooterVisibility,
  setDappModalHeaderText,
  setDappModalFooterText
} = dappModalsSlice.actions;

export default dappModalsSlice.reducer;
