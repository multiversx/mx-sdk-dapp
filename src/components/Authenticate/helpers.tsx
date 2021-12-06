import { useContext } from "context";

export function useGetNetworkConfig() {
  const { dapp } = useContext();
  return () => dapp.proxy.getNetworkConfig();
}
