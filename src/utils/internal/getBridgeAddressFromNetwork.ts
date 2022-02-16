export function getBridgeAddressFromNetwork(
  walletConnectBridgeAddresses: string[]
) {
  return walletConnectBridgeAddresses[
    Math.floor(Math.random() * walletConnectBridgeAddresses.length)
  ];
}
