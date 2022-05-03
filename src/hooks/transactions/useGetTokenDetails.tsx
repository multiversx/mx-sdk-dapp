import axios from 'axios';
import useGetNetworkConfig from 'hooks/useGetNetworkConfig';

import useSwr from 'optionalPackages/swr';
import { getIdentifierType } from 'utils';

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

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

export function useGetTokenDetails({
  tokenId
}: {
  tokenId: string;
}): TokenOptionType {
  const { network } = useGetNetworkConfig();

  const { isEsdt } = getIdentifierType(tokenId);
  const tokenEndpoint = isEsdt ? 'tokens' : 'nfts';

  const {
    data: selectedToken,
    error
  }: { data?: TokenInfoResponse; error?: string } = useSwr(
    Boolean(tokenId)
      ? `${network.apiAddress}/${tokenEndpoint}/${tokenId}`
      : null,
    fetcher
  );

  if (!tokenId) {
    return {
      tokenDenomination: Number(network.egldDenomination),
      tokenLabel: '',
      tokenAvatar: ''
    };
  }

  const tokenDenomination = selectedToken
    ? selectedToken?.decimals
    : Number(network.egldDenomination);
  const tokenLabel = selectedToken ? selectedToken?.name : '';
  const tokenAvatar = selectedToken ? `${selectedToken?.assets?.svgUrl}` : '';

  return { tokenDenomination, tokenLabel, tokenAvatar, error };
}

export default useGetTokenDetails;
