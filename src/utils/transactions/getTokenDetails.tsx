import { defaultDenomination } from '../../constants';

interface TokenOptionType {
  name: string;
  identifier: string;
  balance: string;
  decimals: number;
  collection?: string;
  avatar?: string;
}

export function getTokenDetails({
  tokens,
  tokenId
}: {
  tokens: TokenOptionType[];
  tokenId: string;
}) {
  const selectedToken = tokens.find(
    ({ identifier, collection }) =>
      identifier === tokenId || collection === tokenId
  );
  const tokenDenomination = selectedToken
    ? selectedToken.decimals
    : defaultDenomination;
  const tokenBalance = selectedToken ? selectedToken.balance : '0';
  const tokenLabel = selectedToken ? selectedToken.name : '';
  const tokenAvatar = selectedToken ? `${selectedToken.avatar}` : '';

  return { tokenDenomination, tokenBalance, tokenLabel, tokenAvatar };
}

export default getTokenDetails;
