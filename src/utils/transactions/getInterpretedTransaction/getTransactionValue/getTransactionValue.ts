import { DECIMALS, formatAmount } from 'lib/sdkDappUtils';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';

import {
  ACTIONS_WITH_EGLD_VALUE,
  ACTIONS_WITH_MANDATORY_OPERATIONS,
  ACTIONS_WITH_VALUE_IN_ACTION_FIELD,
  ACTIONS_WITH_VALUE_IN_DATA_FIELD
} from './constants';

import { getEgldValueData } from './helpers/getEgldValueData';
import { getTitleText } from './helpers/getTitleText';
import { getTransactionActionNftText } from './helpers/getTransactionActionNftText';
import { getTransactionTokens } from './helpers/getTransactionTokens';
import { getValueFromActions } from './helpers/getValueFromActions';
import { getValueFromDataField } from './helpers/getValueFromDataField';
import { getValueFromOperations } from './helpers/getValueFromOperations';
import {
  EgldValueDataType,
  NFTValueDataType,
  TokenValueDataType
} from './types';
import { explorerUrlBuilder } from '../../explorerUrlBuilder';

export interface GetTransactionValueReturnType {
  egldValueData?: EgldValueDataType;
  tokenValueData?: TokenValueDataType;
  nftValueData?: NFTValueDataType;
}

export interface GetTransactionValueType {
  hideMultipleBadge?: boolean;
  transaction: InterpretedTransactionType;
}

export const getTransactionValue = ({
  transaction,
  hideMultipleBadge
}: GetTransactionValueType): GetTransactionValueReturnType => {
  if (transaction.action) {
    if (ACTIONS_WITH_EGLD_VALUE.includes(transaction.action.name)) {
      return getEgldValueData(transaction.value);
    }

    if (ACTIONS_WITH_VALUE_IN_DATA_FIELD.includes(transaction.action.name)) {
      return getValueFromDataField(transaction);
    }

    if (ACTIONS_WITH_MANDATORY_OPERATIONS.includes(transaction.action.name)) {
      return getValueFromOperations(transaction);
    }

    if (ACTIONS_WITH_VALUE_IN_ACTION_FIELD.includes(transaction.action.name)) {
      return getValueFromActions(transaction);
    }

    const transactionTokens = getTransactionTokens(transaction);

    if (transactionTokens.length) {
      const txToken = transactionTokens[0];
      const isNft = Object.values(NftEnumType).includes(
        txToken.type as NftEnumType
      );

      const hasTitleText = !hideMultipleBadge && transactionTokens.length > 1;
      const titleText = hasTitleText ? getTitleText(transactionTokens) : '';

      if (isNft) {
        const {
          badgeText,
          tokenFormattedAmount,
          tokenExplorerLink,
          tokenLinkText
        } = getTransactionActionNftText({ token: txToken });

        return {
          nftValueData: {
            badgeText,
            tokenFormattedAmount,
            tokenExplorerLink,
            tokenLinkText,
            transactionTokens,
            token: txToken,
            value: tokenFormattedAmount != null ? txToken.value : null,
            decimals: tokenFormattedAmount != null ? txToken.decimals : null,
            titleText
          }
        };
      }

      const tokenFormattedAmount = txToken.value
        ? formatAmount({
            input: txToken.value,
            decimals: txToken.decimals ?? DECIMALS,
            digits: 2,
            addCommas: true
          })
        : null;

      const tokenExplorerLink = explorerUrlBuilder.tokenDetails(
        String(txToken.token)
      );

      return {
        tokenValueData: {
          tokenExplorerLink,
          showFormattedAmount: false,
          tokenFormattedAmount,
          tokenLinkText: txToken.ticker,
          transactionTokens,
          token: txToken,
          value: txToken.value,
          decimals: txToken.decimals ?? DECIMALS,
          titleText
        }
      };
    }
  }

  return getEgldValueData(transaction.value);
};
