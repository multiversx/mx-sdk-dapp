import { localstorage as dappLocalStorage } from "@elrondnetwork/dapp";
import {
  WalletProvider,
  IDappProvider,
  HWProvider,
  WalletConnectProvider,
  ExtensionProvider,
} from "@elrondnetwork/erdjs";

import switchTrue from "helpers/switchTrue";

export type ProviderType =
  | "wallet"
  | "ledger"
  | "extension"
  | "walletconnect"
  | "";

const getProviderType = (provider: IDappProvider | undefined): ProviderType => {
  let providerType: ProviderType = "";

  providerType =
    provider && provider.constructor === WalletProvider
      ? "wallet"
      : providerType;

  providerType =
    provider && provider.constructor === WalletConnectProvider
      ? "walletconnect"
      : providerType;

  providerType =
    provider && provider.constructor === ExtensionProvider
      ? "extension"
      : providerType;

  providerType =
    provider && provider.constructor === HWProvider ? "ledger" : providerType;

  return switchTrue({
    [`${Boolean(providerType)}`]: providerType,
    [`${dappLocalStorage.getItem("loginMethod") === "wallet"}`]: "wallet",
    [`${dappLocalStorage.getItem("loginMethod") === "ledger"}`]: "ledger",
    [`${dappLocalStorage.getItem("loginMethod") === "walletconnect"}`]:
      "walletconnect",
    [`${dappLocalStorage.getItem("loginMethod") === "extension"}`]: "extension",
    default: providerType,
  });
};

export default getProviderType;
