import { NetworkType } from "../../build/types";

export const minDust = "10000000000000000"; // 0.01 EGLD
export const decimals = 4;
export const denomination = 18;
export const gasPriceModifier = 0.01;
export const gasPerDataByte = 1500;
export const gasLimit = "50000";
export const minAcceptedAmount = 0.01;
export const maxAcceptedAmount = 10000000000000; // 10 trillions
export const minEnterFarmAcceptedAmount = 0.001;
export const egldIdentifier = "EGLD";
export const wrappedEgldIdentifier = "WEGLD-88600a";
export const mexIdentifier = "MEX-b6bb7d";
export const maxTransactionsInBatch = 5;
export const timeout = 10000; // 10 sec
export const baseRewardsPerBlock = "50000000000000000000000"; // 50 000 MEX
export const minHarvestRewardsUsd = 5;
export const transactionToastsLifeDurationMinutes = 15;
export const minWegldNotificationAmount = 0.05;
export const lkMexDustThreshold = 1000;
export const pairsLimit = 3;

export const walletConnectBridgeAddresses: string[] = [
  "https://walletconnect-bridge.maiar.com",
];
export const walletConnectBridge: string =
  walletConnectBridgeAddresses[
    Math.floor(Math.random() * walletConnectBridgeAddresses.length)
  ];

export const walletConnectDeepLink =
  "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/";
export const maiarIdApi = "https://devnet-id.maiar.com/api/v1";
export const socketApi = "https://devnet-socket.elrond.com";
export const extrasApi = "https://devnet-extras-api.elrond.com";

export const network: NetworkType & {
  graphQlAddress: string;
} = {
  id: "devnet",
  name: "Devnet",
  egldLabel: "xEGLD",
  walletAddress: "https://devnet-wallet.elrond.com",
  apiAddress: "https://devnet-api.elrond.com",
  gatewayAddress: "https://devnet-gateway.elrond.com",
  explorerAddress: "http://devnet-explorer.elrond.com",
  graphQlAddress: "https://devnet-exchange-graph.elrond.com/graphql",
};

