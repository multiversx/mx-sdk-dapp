// types here need to be synced with the types in sdk-dapp-ui ledger-connect.types

export interface IConnectScreenData {
  customContentMarkup?: string;
  disabled?: boolean;
  error?: string;
}

export interface IAccountScreenData {
  accounts: ILedgerAccount[];
  startIndex: number;
  addressesPerPage: number;
  isLoading: boolean;
}

export interface IConfirmScreenData {
  data?: string;
  selectedAddress: string;
  confirmAddressText?: string;
  authText?: string;
  explorerLink: string;
}

export interface ILedgerConnectPanelData {
  connectScreenData: IConnectScreenData | null;
  accountScreenData: IAccountScreenData | null;
  shouldClose?: true;
  confirmScreenData: IConfirmScreenData | null;
}

export interface ILedgerAccount {
  address: string;
  balance: string;
  usdValue?: string;
  index: number;
}

export enum LedgerConnectEventsEnum {
  CONNECT_DEVICE = 'CONNECT_DEVICE',
  ACCESS_WALLET = 'ACCESS_WALLET',
  NEXT_PAGE = 'NEXT_PAGE',
  PREV_PAGE = 'PREV_PAGE',
  CLOSE_LEDGER_CONNECT_PANEL = 'CLOSE_LEDGER_CONNECT_PANEL',
  OPEN_LEDGER_CONNECT_PANEL = 'OPEN_LEDGER_CONNECT_PANEL',
  DATA_UPDATE = 'DATA_UPDATE'
}
