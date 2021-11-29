import { ChainID } from "@elrondnetwork/erdjs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NetworkType } from "../../types";



export const defaultNetwork: NetworkType = {
  id: "not-configured",
  name: "NOT CONFIGURED",
  egldLabel: "",
  walletAddress: "",
  apiAddress: "",
  gatewayAddress: "",
  explorerAddress: "",
};

export interface InitializeAppConfigPayload {
  walletConnectBridge: string;
  walletConnectDeepLink: string;
  network: NetworkType;
  chainID: ChainID;
}

export interface AppConfigStateType {
  walletConnectBridge: string;
  walletConnectDeepLink: string;
  network?: NetworkType;
  chainID?: ChainID;
}


const initialState = {
  walletConnectBridge: '',
  walletConnectDeepLink: '',
  network: defaultNetwork

}

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: initialState,
  reducers: {
    initializeAppConfig: (
      state: AppConfigStateType,
      action: PayloadAction<InitializeAppConfigPayload>,
    ) => {
      return { ...state, ...action.payload };
    },
  }
});

export const {initializeAppConfig } =
  appConfigSlice.actions;

export default appConfigSlice.reducer;
