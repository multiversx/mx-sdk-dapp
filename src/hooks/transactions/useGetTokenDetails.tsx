import axios from 'axios';
import useSwr from 'swr';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';

import { getIdentifierType } from 'utils';

export type TokenAssets = {
  description: string;
  status: string;
  svgUrl: string;
  website?: string;
  pngUrl?: string;
  social?: any;
  extraTokens?: string[];
  lockedAccounts?: { [key: string]: string };
};

interface TokenOptionType {
  tokenLabel: string;
  tokenDenomination: number;
  tokenAvatar: string;
  assets?: TokenAssets;
  error?: string;
}

interface TokenInfoResponse {
  identifier: string;
  name: string;
  ticker: string;
  decimals: number;
  assets: TokenAssets;
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

  const assets = selectedToken?.assets;

  return { tokenDenomination, tokenLabel, tokenAvatar, assets, error };
}
