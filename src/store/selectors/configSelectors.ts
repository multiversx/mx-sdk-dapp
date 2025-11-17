import { StoreType } from 'store/store.types';

export const configSelector = ({ config }: StoreType) => config;

export const nativeAuthConfigSelector = ({ config }: StoreType) =>
  config.nativeAuthConfig;

export const walletConnectConfigSelector = ({ config }: StoreType) => {
  return config.walletConnectConfig;
};

export const ledgerConfigSelector = ({ config }: StoreType) => {
  return config.ledgerConfig;
};
