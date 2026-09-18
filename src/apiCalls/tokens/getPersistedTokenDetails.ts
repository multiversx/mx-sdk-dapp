import { NFTS_ENDPOINT, TOKENS_ENDPOINT } from 'apiCalls/endpoints';
import { getPersistedToken } from 'apiCalls/tokens/getPersistedToken';
import { tokenSchema } from 'apiCalls/utils/apiResponseSchemas';
import { validateApiResponse } from 'apiCalls/utils/validateApiResponse';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

import { DisplayRiskEnum } from 'types/displayRisk.types';
import { NftEnumType } from 'types/tokens.types';
import { getDisplayRisk } from 'utils/display/getDisplayRisk';
import { getTokenImageUrl } from 'utils/display/getTokenImageUrl';
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
  tokenImageUrl: string;
  assets?: TokenAssets;
  type?: NftEnumType;
  error?: string;
  esdtPrice?: number;
  ticker?: string;
  identifier?: string;
  name?: string;
  displayRisk?: DisplayRiskEnum;
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

export async function getPersistedTokenDetails({
  tokenId
}: {
  tokenId?: string;
}): Promise<TokenOptionType> {
  const network = networkSelector(getState());

  const noData = {
    tokenDecimals: Number(network.decimals),
    tokenLabel: '',
    tokenImageUrl: ''
  };

  const { isNft } = getIdentifierType(tokenId);

  const tokenIdentifier = tokenId;
  const tokenEndpoint = isNft ? NFTS_ENDPOINT : TOKENS_ENDPOINT;

  if (!tokenIdentifier) {
    return noData;
  }

  try {
    const selectedToken = await getPersistedToken<TokenInfoResponse>(
      `${network.apiAddress}/${tokenEndpoint}/${tokenIdentifier}`
    );

    validateApiResponse({
      data: selectedToken,
      schema: tokenSchema,
      source: tokenEndpoint
    });

    const tokenDecimals = selectedToken
      ? selectedToken?.decimals
      : Number(network.decimals);
    const tokenLabel = selectedToken ? selectedToken?.name : '';
    const tokenImageUrl = selectedToken ? getTokenImageUrl(selectedToken) : '';

    return {
      tokenDecimals: tokenDecimals,
      tokenLabel,
      type: selectedToken?.type,
      tokenImageUrl,
      identifier: selectedToken?.identifier,
      assets: selectedToken?.assets,
      esdtPrice: selectedToken?.price,
      ticker: selectedToken?.ticker,
      name: selectedToken?.name,
      displayRisk: getDisplayRisk(
        tokenLabel,
        selectedToken?.ticker,
        selectedToken?.identifier
      )
    };
  } catch (error) {
    return {
      ...noData,
      error: `${error}`
    };
  }
}
