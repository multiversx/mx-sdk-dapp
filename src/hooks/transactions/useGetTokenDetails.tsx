import useSwr from 'swr';

import { NFTS_ENDPOINT, TOKENS_ENDPOINT } from 'apiCalls/endpoints';
import { getPersistedToken } from 'apiCalls/tokens/getPersistedToken';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { NftEnumType } from 'types/tokens.types';
import { getIdentifierType } from 'utils/validation/getIdentifierType';

export interface TokenAssets {
  description: string;
  status: string;
  svgUrl: string;
  website?: string;
  pngUrl?: string;
  social?: any;
  extraTokens?: string[];
  lockedAccounts?: { [key: string]: string };
}

export interface TokenMediaType {
  url?: string;
  originalUrl?: string;
  thumbnailUrl?: string;
  fileType?: string;
  fileSize?: number;
}

export interface TokenOptionType {
  tokenLabel: string;
  tokenDecimals: number;
  tokenAvatar: string;
  assets?: TokenAssets;
  type?: NftEnumType;
  error?: string;
  esdtPrice?: number;
  ticker?: string;
  identifier?: string;
  name?: string;
  isLoading?: boolean;
}

interface TokenInfoResponse {
  identifier: string;
  name: string;
  ticker: string;
  decimals: number;
  type?: NftEnumType;
  assets: TokenAssets;
  media?: TokenMediaType[];
  price: number;
}

export function useGetTokenDetails({
  tokenId
}: {
  tokenId: string;
}): TokenOptionType {
  const { network } = useGetNetworkConfig();
  const { isNft } = getIdentifierType(tokenId);

  const tokenIdentifier = tokenId;
  const tokenEndpoint = isNft ? NFTS_ENDPOINT : TOKENS_ENDPOINT;

  console.log('\x1b[42m%s\x1b[0m', 'in sdk-dapp', tokenIdentifier);

  const {
    data: selectedToken,
    error,
    isLoading
  } = useSwr<TokenInfoResponse>(
    Boolean(tokenIdentifier)
      ? `${network.apiAddress}/${tokenEndpoint}/${tokenIdentifier}`
      : null,
    getPersistedToken
  );

  console.log('\x1b[42m%s\x1b[0m', 'in sdk-dapp end', selectedToken);

  if (!tokenIdentifier) {
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
  const tokenAvatar = selectedToken
    ? selectedToken?.assets?.svgUrl ?? selectedToken?.media?.[0]?.thumbnailUrl
    : '';

  return {
    isLoading,
    tokenDecimals: tokenDecimals,
    tokenLabel,
    type: selectedToken?.type,
    tokenAvatar,
    identifier: selectedToken?.identifier,
    assets: selectedToken?.assets,
    esdtPrice: selectedToken?.price,
    ticker: selectedToken?.ticker,
    name: selectedToken?.name,
    error
  };
}
