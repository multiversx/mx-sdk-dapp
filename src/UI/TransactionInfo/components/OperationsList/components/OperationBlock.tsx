import React from 'react';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { TransactionDirectionEnum } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { AccountName } from 'UI/TransactionsTable/components';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { WithTransactionType } from '../../../../../UI/types';

export interface OperationBlockPropsType extends WithTransactionType {
  address: string;
  action?: string;
  isFullSize?: boolean;
  direction?: TransactionDirectionEnum;
}

const OperationBlockComponent = ({
  address,
  transaction,
  action,
  isFullSize,
  direction,
  globalStyles,
  styles
}: OperationBlockPropsType & WithStylesImportType) => {
  let operationAssets;

  if (address === transaction.sender) {
    operationAssets = transaction.senderAssets;
  }

  if (address === transaction.receiver) {
    operationAssets = transaction.receiverAssets;
  }

  const directions = {
    [TransactionDirectionEnum.INTERNAL]: 'int',
    [TransactionDirectionEnum.IN]: 'in',
    [TransactionDirectionEnum.OUT]: 'out',
    [TransactionDirectionEnum.SELF]: 'self'
  };

  return (
    <div
      className={classNames(styles?.operationBlock, {
        [globalStyles?.col12 ?? '']: isFullSize,
        [globalStyles?.prXl0 ?? '']: !isFullSize,
        [globalStyles?.pl3 ?? '']: !isFullSize && operationAssets,
        [globalStyles?.colLg6 ?? '']: !isFullSize && !operationAssets,
        [globalStyles?.colXl4 ?? '']: !isFullSize && !operationAssets
      })}
    >
      {direction && (
        <div
          className={classNames(
            styles?.direction,
            direction && styles?.[directions[direction]]
          )}
        >
          {direction && directions[direction]}
        </div>
      )}

      {action && (
        <FontAwesomeIcon
          icon={faCaretRight}
          size='xs'
          className={classNames(globalStyles?.textSecondary, globalStyles?.mr2)}
        />
      )}

      <div className={classNames(globalStyles?.textNowrap, globalStyles?.mr2)}>
        {action || ''}
      </div>

      {addressIsValid(address) ? (
        <>
          <ExplorerLink
            page={explorerUrlBuilder.accountDetails(address)}
            className={styles?.explorer}
          >
            <AccountName address={address} assets={operationAssets} />
          </ExplorerLink>

          <CopyButton text={address} className={styles?.copy} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export const OperationBlock = withStyles(OperationBlockComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/OperationsList/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/OperationsList/styles.scss').default
});
