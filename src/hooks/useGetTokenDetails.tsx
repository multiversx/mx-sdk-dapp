import useSwr from 'swr';
import { networkSelector } from 'redux/selectors';
import { useSelector } from 'redux/store';
import { defaultDenomination } from '../constants';

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
  const network = useSelector(networkSelector);
  if (!tokenId) {
    return {
      tokenDenomination: defaultDenomination,
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
    : defaultDenomination;
  const tokenLabel = selectedToken ? selectedToken?.name : '';
  const tokenAvatar = selectedToken ? `${selectedToken?.assets?.svgUrl}` : '';

  return { tokenDenomination, tokenLabel, tokenAvatar, error };
}

export default useGetTokenDetails;
