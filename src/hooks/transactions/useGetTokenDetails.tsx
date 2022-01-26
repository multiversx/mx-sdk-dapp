import { denomination } from 'constants/index';
import useGetNetworkConfig from 'hooks/useGetNetworkConfig';

import useSwr from 'optionalPackages/swr';

interface TokenOptionType {
  tokenLabel: string;
  tokenDenomination: number;
  tokenAvatar: string;
  error?: string;
}

interface TokenInfoResponse {
  identifier: string;
  name: string;
  ticker: string;
  decimals: number;
  assets: {
    description: string;
    status: string;
    svgUrl: string;
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGetTokenDetails({
  tokenId
}: {
  tokenId: string;
}): TokenOptionType {
  const { network } = useGetNetworkConfig();
  if (!tokenId) {
    return {
      tokenDenomination: denomination,
      tokenLabel: '',
      tokenAvatar: ''
    };
  }
  const {
    data: selectedToken,
    error
  }: { data?: TokenInfoResponse; error?: string } = useSwr(
    `${network.apiAddress}/tokens/${tokenId}`,
    fetcher
  );

  const tokenDenomination = selectedToken
    ? selectedToken?.decimals
    : denomination;
  const tokenLabel = selectedToken ? selectedToken?.name : '';
  const tokenAvatar = selectedToken ? `${selectedToken?.assets?.svgUrl}` : '';

  return { tokenDenomination, tokenLabel, tokenAvatar, error };
}

export default useGetTokenDetails;
