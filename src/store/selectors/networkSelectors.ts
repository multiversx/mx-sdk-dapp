import { StoreType } from 'store/store.types';

export const networkConfigSelector = ({ network }: StoreType) => network;

export const networkSelector = ({ network }: StoreType) => network.network;

export const chainIdSelector = ({ network: { network } }: StoreType) =>
  network.chainId;

export const apiAddressSelector = ({ network: { network } }: StoreType) =>
  network.apiAddress;

export const walletAddressSelector = ({ network: { network } }: StoreType) =>
  network.walletAddress;

export const egldLabelSelector = ({ network: { network } }: StoreType) =>
  network.egldLabel;

export const explorerAddressSelector = ({ network: { network } }: StoreType) =>
  network.explorerAddress;

export const roundDurationSelectorSelector = ({
  network: { network }
}: StoreType) => network.roundDuration;
