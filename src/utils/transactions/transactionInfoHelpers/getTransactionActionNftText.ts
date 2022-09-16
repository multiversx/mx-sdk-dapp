import { TokenArgumentType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { formatAmount } from 'utils/operations';
import { explorerUrlBuilder } from '../getInterpretedTransaction/helpers/explorerUrlBuilder';

export interface TransactionActionNftType {
  token: TokenArgumentType;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}
export interface TransactionActionNftReturnType {
  badgeText: string;
  tokenFormattedAmount: string | null;
  tokenExplorerLink: string;
  tokenLinkText?: string;
  token: TokenArgumentType;
}

export function getTransactionActionNftText({
  token,
  noValue,
  showLastNonZeroDecimal
}: TransactionActionNftType): TransactionActionNftReturnType {
  const isTokenAmountVisible =
    !noValue && token.value && token.type !== NftEnumType.NonFungibleESDT;
  const canShowFormattedAmount = token.decimals != null;

  let badgeText = '';
  if (token.type === NftEnumType.NonFungibleESDT) {
    badgeText = 'NFT';
  }
  if (token.type === NftEnumType.SemiFungibleESDT) {
    badgeText = 'SFT';
  }
  if (token.type === NftEnumType.MetaESDT) {
    badgeText = 'Meta-ESDT';
  }

  let tokenFormattedAmount = '';
  if (isTokenAmountVisible && canShowFormattedAmount) {
    tokenFormattedAmount = canShowFormattedAmount
      ? formatAmount({
          input: token.value,
          decimals: token.decimals,
          digits: 2,
          showLastNonZeroDecimal
        })
      : Number(token.value).toLocaleString('en');
  }

  const tokenExplorerLink = explorerUrlBuilder.nftDetails(
    String(token.identifier)
  );

  const tokenLinkText =
    token.ticker === token.collection ? token.identifier : token.ticker;

  return {
    badgeText,
    tokenFormattedAmount: isTokenAmountVisible ? tokenFormattedAmount : null,
    tokenExplorerLink,
    tokenLinkText,
    token
  };
}
