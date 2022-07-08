export function getRelayAddressFromNetwork(
  walletConnectV2RelayAddresses: string[]
) {
  return walletConnectV2RelayAddresses[
    Math.floor(Math.random() * walletConnectV2RelayAddresses.length)
  ];
}
