import React from 'react';
import classNames from 'classnames';
import DefaultAvatar from 'assets/icons/default-avatar.svg';
import globalStyles from 'assets/sass/main.scss';

import {
  InterpretedTransactionType,
  TokenArgumentType
} from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { AccountName } from 'UI/TransactionsTable/components/AccountName';
import { ScAddressIcon } from 'UI/TransactionsTable/components/ScAddressIcon';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { ActionToken } from './ActionToken';

export const ActionText = ({
  entry,
  transaction
}: {
  entry: any;
  transaction: InterpretedTransactionType;
}) => {
  switch (true) {
    case typeof entry === 'string':
      return <span>{entry.replace('eGLD', 'EGLD')}</span>;

    case Boolean(entry.address):
      let entryAssets;
      if (entry.address === transaction.sender) {
        entryAssets = transaction.senderAssets;
      }
      if (entry.address === transaction.receiver) {
        entryAssets = transaction.receiverAssets;
      }
      return addressIsValid(entry.address) ? (
        <div className='d-flex align-items-center'>
          <ScAddressIcon initiator={entry.address} />
          <ExplorerLink
            to={explorerUrlBuilder.accountDetails(entry.address)}
            data-testid='receiverLink'
            className='trim-wrapper'
          >
            <AccountName address={entry.address} assets={entryAssets} />
          </ExplorerLink>
        </div>
      ) : (
        ''
      );

    case Boolean(entry.token && entry.token.length > 0):
      return entry.token.map((token: TokenArgumentType, index: number) => (
        <div key={`tx-${token.identifier}-${index}`}>
          <ActionToken token={token} showLastNonZeroDecimal />
          {index < entry.token.length - 1 && (
            <span className='ml-n1 mr-1 d-none d-sm-flex'>,</span>
          )}
        </div>
      ));

    case Boolean(entry.tokenNoValue && entry.tokenNoValue.length > 0):
      return entry.tokenNoValue.map(
        (tokenNoValue: TokenArgumentType, index: number) => (
          <div key={`tx-${tokenNoValue.token}-${index}`}>
            <ActionToken token={tokenNoValue} noValue showLastNonZeroDecimal />
            {index < entry.tokenNoValue.length - 1 && (
              <span className='ml-n1 mr-1 d-none d-sm-flex'>,</span>
            )}
          </div>
        )
      );

    case Boolean(entry.tokenNoLink && entry.tokenNoLink.length > 0):
      return entry.tokenNoLink.map(
        (tokenNoLink: TokenArgumentType, index: number) => (
          <div key={`tx-${tokenNoLink.token}-${index}`}>
            <span className='mr-1'>{tokenNoLink.ticker}</span>
            {index < entry.tokenNoLink.length - 1 && (
              <span className='ml-n1 mr-1 d-none d-sm-flex'>,</span>
            )}
          </div>
        )
      );

    case Boolean(entry.value):
      return (
        <span>
          <FormatAmount
            value={entry.value}
            showLabel={false}
            showLastNonZeroDecimal
          />
        </span>
      );

    case Boolean(entry.egldValue):
      return (
        <span>
          <FormatAmount value={entry.egldValue} showLastNonZeroDecimal />
        </span>
      );

    case Boolean(entry.providerName): {
      const className = classNames(
        globalStyles.sideIcon,
        globalStyles.mr1,
        globalStyles.mrLg1,
        globalStyles.roundedCircle
      );
      return (
        <span className='d-flex'>
          <ExplorerLink
            to={explorerUrlBuilder.providerDetails(transaction.receiver)}
            className='d-flex align-self-center'
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

    default:
      return null;
  }
};
