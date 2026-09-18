import { NFTS_ENDPOINT, TOKENS_ENDPOINT } from 'apiCalls/endpoints';
import { tokenSchema } from 'apiCalls/utils/apiResponseSchemas';
import { axiosInstance } from 'apiCalls/utils/axiosInstance';
import { validateApiResponse } from 'apiCalls/utils/validateApiResponse';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { TokenOptionType, TokenInfoResponse } from 'types/tokens.types';
import { getDisplayRisk } from 'utils/display/getDisplayRisk';
import { getTokenImageUrl } from 'utils/display/getTokenImageUrl';
import { getIdentifierType } from 'utils/validation/getIdentifierType';

export async function getTokenDetails({
  tokenId
}: {
  tokenId: string;
}): Promise<TokenOptionType> {
  const network = networkSelector(getState());
  const { isNft } = getIdentifierType(tokenId);

  const tokenIdentifier = tokenId;
  const tokenEndpoint = isNft ? NFTS_ENDPOINT : TOKENS_ENDPOINT;

  if (!tokenIdentifier) {
    return {
      tokenDecimals: Number(network.decimals),
      tokenLabel: '',
      tokenAvatar: ''
    };
  }

  try {
    const { data: selectedToken } = await axiosInstance.get<TokenInfoResponse>(
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
    const tokenAvatar = selectedToken ? getTokenImageUrl(selectedToken) : '';

    return {
      tokenDecimals: tokenDecimals,
      tokenLabel,
      type: selectedToken?.type,
      tokenAvatar,
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
  } catch (error: any) {
    return {
      error: `Error fetching token ${tokenIdentifier}: ${error.toString()}`,
      tokenDecimals: Number(network.decimals),
      tokenLabel: '',
      tokenAvatar: '',
      identifier: tokenIdentifier
    };
  }
}
