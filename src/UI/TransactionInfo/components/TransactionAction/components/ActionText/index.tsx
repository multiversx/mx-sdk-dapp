import React from 'react';
import classNames from 'classnames';
import DefaultAvatar from 'assets/icons/default-avatar.svg';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { AccountName } from 'UI/TransactionsTable/components/AccountName';
import { ScAddressIcon } from 'UI/TransactionsTable/components/ScAddressIcon';
import { WithTransactionType } from 'UI/types';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { ActionToken } from '../ActionToken';

export interface ActionTextPropsType extends WithTransactionType {
  entry: any;
}

const ActionTextComponent = ({
  entry,
  transaction,
  globalStyles,
  styles
}: ActionTextPropsType & WithStylesImportType) => {
  if (typeof entry === 'string') {
    return (
      <span className={globalStyles?.mr1}>{entry.replace('eGLD', 'EGLD')}</span>
    );
  }

  if (Boolean(entry.address)) {
    let entryAssets;

    if (entry.address === transaction.sender) {
      entryAssets = transaction.senderAssets;
    }

    if (entry.address === transaction.receiver) {
      entryAssets = transaction.receiverAssets;
    }

    if (addressIsValid(entry.address)) {
      return (
        <div className={styles?.address}>
          <ScAddressIcon initiator={entry.address} />

          <ExplorerLink
            page={explorerUrlBuilder.accountDetails(entry.address)}
            data-testid={DataTestIdsEnum.receiverLink}
            className={styles?.explorer}
          >
            <AccountName address={entry.address} assets={entryAssets} />
          </ExplorerLink>
        </div>
      );
    }

    return '';
  }

  if (Boolean(entry.token && entry.token.length > 0)) {
    return entry.token.map((token: TokenArgumentType, index: number) => {
      return (
        <div
          key={`tx-${token.identifier}-${index}`}
          className={classNames(styles?.token, {
            [styles?.spaced ?? '']: entry.token.length > 1
          })}
        >
          <ActionToken token={token} showLastNonZeroDecimal />

          {index < entry.token.length - 1 && (
            <span className={styles?.comma}>,</span>
          )}
        </div>
      );
    });
  }

  if (Boolean(entry.tokenNoValue && entry.tokenNoValue.length > 0)) {
    return entry.tokenNoValue.map(
      (tokenNoValue: TokenArgumentType, index: number) => (
        <div key={`tx-${tokenNoValue.token}-${index}`}>
          <ActionToken token={tokenNoValue} noValue showLastNonZeroDecimal />

          {index < entry.tokenNoValue.length - 1 && (
            <span
              className={classNames(
                globalStyles?.mlN1,
                globalStyles?.mr1,
                globalStyles?.dNone,
                globalStyles?.dSmFlex
              )}
            >
              ,
            </span>
          )}
        </div>
      )
    );
  }

  if (Boolean(entry.tokenNoLink && entry.tokenNoLink.length > 0)) {
    return entry.tokenNoLink.map(
      (tokenNoLink: TokenArgumentType, index: number) => (
        <div key={`tx-${tokenNoLink.token}-${index}`}>
          <span className={globalStyles?.mr1}>{tokenNoLink.ticker}</span>

          {index < entry.tokenNoLink.length - 1 && (
            <span
              className={classNames(
                globalStyles?.mlN1,
                globalStyles?.mr1,
                globalStyles?.dNone,
                globalStyles?.dSmFlex
              )}
            >
              ,
            </span>
          )}
        </div>
      )
    );
  }

  if (Boolean(entry.value)) {
    return (
      <span>
        <FormatAmount
          value={entry.value}
          showLabel={false}
          showLastNonZeroDecimal
        />
      </span>
    );
  }

  if (Boolean(entry.egldValue)) {
    return (
      <span>
        <FormatAmount value={entry.egldValue} showLastNonZeroDecimal />
      </span>
    );
  }

  if (Boolean(entry.providerName)) {
    const className = classNames(
      globalStyles?.sideIcon,
      globalStyles?.mr1,
      globalStyles?.mrLg1,
      globalStyles?.roundedCircle
    );

    return (
      <span className={classNames(globalStyles?.dFlex, globalStyles?.mr1)}>
        <ExplorerLink
          page={explorerUrlBuilder.providerDetails(transaction.receiver)}
          className={classNames(
            globalStyles?.dFlex,
            globalStyles?.alignSelfCenter
          )}
        >
          {entry.providerAvatar ? (
            <img src={entry.providerAvatar} className={className} alt=' ' />
          ) : (
            <DefaultAvatar className={className} />
          )}

          {entry.providerName}
        </ExplorerLink>
      </span>
    );
  }

  return null;
};

export const ActionText = withStyles(ActionTextComponent, {
  ssrStyles: () =>
    import(
      'UI/TransactionInfo/components/TransactionAction/components/ActionText/styles.scss'
    ),
  clientStyles: () =>
    require('UI/TransactionInfo/components/TransactionAction/components/ActionText/styles.scss')
      .default
});
