import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DappModalConfig } from '../../UI/DappModal/dappModal.types';
import { logoutAction } from '../commonActions';

export interface ModalsSliceState {
  visible: boolean;
  modal: DappModalConfig;
}

const initialState: ModalsSliceState = {
  visible: false,
  modal: {
    showHeader: true,
    showFooter: false,
    headerText: '',
    footerText: ''
  }
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
      state.modal.showHeader = action.payload;
    },
    setDappModalFooterVisibility: (
      state: ModalsSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.modal.showFooter = action.payload;
    },
    setDappModalHeaderText: (
      state: ModalsSliceState,
      action: PayloadAction<string>
    ) => {
      state.modal.headerText = action.payload;
    },
    setDappModalFooterText: (
      state: ModalsSliceState,
      action: PayloadAction<string>
    ) => {
      state.modal.footerText = action.payload;
    },
    setDappModalConfig: (
      state: ModalsSliceState,
      action: PayloadAction<DappModalConfig>
    ) => {
      state.modal = {
        ...action.payload
      };
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
  setDappModalFooterText,
  setDappModalConfig
} = dappModalsSlice.actions;

export default dappModalsSlice.reducer;
