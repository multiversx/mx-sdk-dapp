import React from 'react';
import { faSpinner, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { DataTestIdsEnum, N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { TimeAgo } from 'UI/TimeAgo/TimeAgo';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';
import { getTransactionStatus } from 'utils/transactions/transactionInfoHelpers/getTransactionStatus';
import { DetailItem } from '../../DetailItem';

const TransactionInfoAgeComponent = ({
  className,
  transaction,
  globalStyles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => {
  const { pending } = getTransactionStatus(transaction);

  return (
    <DetailItem className={className} title='Age'>
      {transaction.timestamp != null ? (
        <div
          className={classNames(
            globalStyles?.dFlex,
            globalStyles?.flexWrap,
            globalStyles?.alignItemsCenter
          )}
          data-testid={DataTestIdsEnum.transactionAge}
        >
          {pending ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className={classNames(
                globalStyles?.mr2,
                globalStyles?.textSecondary,
                'fa-spin',
                'slow-spin'
              )}
            />
          ) : (
            <FontAwesomeIcon
              icon={faClock}
              className={classNames(
                globalStyles?.mr2,
                globalStyles?.textSecondary
              )}
            />
          )}

          <TimeAgo value={transaction.timestamp} short />

          <span
            className={classNames(
              globalStyles?.textSecondary,
              globalStyles?.ml2
            )}
          >
            (
            {getHumanReadableTimeFormat({
              value: transaction.timestamp,
              utc: true
            })}
            )
          </span>
        </div>
      ) : (
        <span className={globalStyles?.textSecondary}>{N_A}</span>
      )}
    </DetailItem>
  );
};

export const TransactionInfoAge = withStyles(TransactionInfoAgeComponent, {});
