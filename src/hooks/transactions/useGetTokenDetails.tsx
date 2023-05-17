import axios from 'axios';
import useSwr from 'swr';

import { COLLECTIONS_ENDPOINT, TOKENS_ENDPOINT } from 'apiCalls/endpoints';
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

interface TokenOptionType {
  tokenLabel: string;
  tokenDecimals: number;
  tokenAvatar: string;
  assets?: TokenAssets;
  type?: NftEnumType;
  error?: string;
}

interface TokenInfoResponse {
  identifier: string;
  name: string;
  ticker: string;
  decimals: number;
  type?: NftEnumType;
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

  const { isEsdt, isNft } = getIdentifierType(tokenId);
  const tokenEndpoint = isEsdt ? TOKENS_ENDPOINT : COLLECTIONS_ENDPOINT;
  let tokenIdentifier = tokenId;

  if (isNft) {
    const [firstPart, secondPart] = tokenId.split('-');
    tokenIdentifier = `${firstPart}-${secondPart}`;
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
  const tokenAvatar = selectedToken ? selectedToken?.assets?.svgUrl : '';

  const assets = selectedToken?.assets;

  return {
    tokenDecimals: tokenDecimals,
    tokenLabel,
    type: selectedToken?.type,
    tokenAvatar,
    assets,
    error
  };
}
