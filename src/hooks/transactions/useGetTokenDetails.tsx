import axios from 'axios';
import useSwr from 'swr';

import { NFTS_ENDPOINT, TOKENS_ENDPOINT } from 'apiCalls/endpoints';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { NftEnumType } from 'types/tokens.types';
import { getIdentifierType } from 'utils/validation/getIdentifierType';

const nftSftTokenParts = 3;

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

interface TokenOptionType {
  tokenLabel: string;
  tokenDecimals: number;
  tokenAvatar: string;
  assets?: TokenAssets;
  type?: NftEnumType;
  error?: string;
  esdtPrice?: number;
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

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

export function useGetTokenDetails({
  tokenId
}: {
  tokenId: string;
}): TokenOptionType {
  const { network } = useGetNetworkConfig();
  const { isNft } = getIdentifierType(tokenId);

  const tokenParts = tokenId.split('-');
  const tokenIdentifier = tokenId;

  let tokenEndpoint = TOKENS_ENDPOINT;

  if (isNft && tokenParts.length === nftSftTokenParts) {
    tokenEndpoint = NFTS_ENDPOINT;
  }

  const {
    data: selectedToken,
    error
  }: { data?: TokenInfoResponse; error?: string } = useSwr(
    Boolean(tokenIdentifier)
      ? `${network.apiAddress}/${tokenEndpoint}/${tokenIdentifier}`
      : null,
    fetcher
  );

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
    ? selectedToken?.assets?.svgUrl ?? selectedToken?.media?.[0].thumbnailUrl
    : '';

  return {
    tokenDecimals: tokenDecimals,
    tokenLabel,
    type: selectedToken?.type,
    tokenAvatar,
    assets: selectedToken?.assets,
    esdtPrice: selectedToken?.price,
    error
  };
}
