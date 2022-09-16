import { DECIMALS } from 'constants/index';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { formatAmount } from 'utils/operations';
import { explorerUrlBuilder } from '../getInterpretedTransaction/helpers/explorerUrlBuilder';

export interface TransactionActionTokenType {
  token: TokenArgumentType;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}
export interface TransactionActionTokenReturnType {
  tokenExplorerLink: string;
  tokenFormattedAmount: string | null;
  showFormattedAmount: boolean;
  tokenLinkText: string;
  token: TokenArgumentType;
  showLastNonZeroDecimal?: boolean;
}

export function getTransactionActionTokenText({
  token,
  noValue,
  showLastNonZeroDecimal
}: TransactionActionTokenType): TransactionActionTokenReturnType {
  const showFormattedAmount = Boolean(!noValue && token.value);

  const tokenFormattedAmount = showFormattedAmount
    ? formatAmount({
        input: token.value,
        decimals: token.decimals ?? DECIMALS,
        digits: 2,
        showLastNonZeroDecimal,
        addCommas: true
      })
    : null;

  const tokenExplorerLink = explorerUrlBuilder.tokenDetails(
    String(token.token)
  );

  const tokenLinkText = token.ticker;

  return {
    tokenExplorerLink,
    tokenFormattedAmount,
    showFormattedAmount,
    tokenLinkText,
    token,
    showLastNonZeroDecimal
  };
}
