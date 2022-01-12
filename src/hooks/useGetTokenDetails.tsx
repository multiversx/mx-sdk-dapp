import axios from 'axios';
import useSwr from 'swr';
import { denomination } from 'constants/index';
import { useSelector } from 'redux/DappProviderContext';
import { networkSelector } from 'redux/selectors';

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

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useGetTokenDetails({
  tokenId
}: {
  tokenId: string;
}): TokenOptionType {
  const network = useSelector(networkSelector);
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
