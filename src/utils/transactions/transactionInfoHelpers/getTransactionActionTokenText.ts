import { DECIMALS } from 'constants/index';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { formatAmount } from 'utils/operations';
import { explorerUrlBuilder } from '../getInterpretedTransaction/helpers/explorerUrlBuilder';

export interface TransactionActionTokenType {
  token: TokenArgumentType;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}

export function getTransactionActionTokenText({
  token,
  noValue,
  showLastNonZeroDecimal
}: TransactionActionTokenType) {
  const decimals = token.decimals != null ? token.decimals : DECIMALS;

  const showFormattedAmount = !noValue && token.value;

  const tokenFormattedAmount = showFormattedAmount
    ? formatAmount({
        input: token.value,
        decimals,
        showLastNonZeroDecimal
      })
    : null;

  const tokenExplorerLink = explorerUrlBuilder.nftDetails(
    String(token.identifier)
  );

  const tokenLinkText = token.ticker;

  return { tokenExplorerLink, tokenFormattedAmount, tokenLinkText };
}
