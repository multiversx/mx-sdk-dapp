import axios from 'axios';
import useSwr from 'swr';
import { ACCOUNTS_ENDPOINT, NFTS_ENDPOINT, TOKENS_ENDPOINT } from 'apiCalls';
import { useGetAccountInfo } from 'hooks/account';
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
  tokenDecimals: number;
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
  const { address } = useGetAccountInfo();

  const { isEsdt } = getIdentifierType(tokenId);
  const tokenEndpoint = isEsdt ? TOKENS_ENDPOINT : NFTS_ENDPOINT;

  const {
    data: selectedToken,
    error
  }: { data?: TokenInfoResponse; error?: string } = useSwr(
    Boolean(tokenId)
      ? `${network.apiAddress}/${ACCOUNTS_ENDPOINT}/${address}/${tokenEndpoint}/${tokenId}`
      : null,
    fetcher
  );

  if (!tokenId) {
    return {
      tokenDecimals: Number(network.decimals),
      tokenLabel: '',
      tokenAvatar: ''
    };
  }

  const tokenDecimals = selectedToken
    ? selectedToken?.decimals
    : Number(network.decimals);
  const tokenLabel = selectedToken ? selectedToken?.name : '';
  const tokenAvatar = selectedToken ? `${selectedToken?.assets?.svgUrl}` : '';

  const assets = selectedToken?.assets;

  return {
    tokenDecimals: tokenDecimals,
    tokenLabel,
    tokenAvatar,
    assets,
    error
  };
}
