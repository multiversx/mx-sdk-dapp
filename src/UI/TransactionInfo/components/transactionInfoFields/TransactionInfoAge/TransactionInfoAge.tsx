import React from 'react';
import { faSpinner, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { N_A } from 'constants/index';
import { TimeAgo } from 'UI/TimeAgo/TimeAgo';
import { WithTransactionType } from 'UI/types';

import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';
import { getTransactionStatus } from 'utils/transactions/transactionInfoHelpers/getTransactionStatus';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';

export const TransactionInfoAge = ({ transaction }: WithTransactionType) => {
  const { pending } = getTransactionStatus(transaction);

  return (
    <DetailItem title='Age'>
      {transaction.timestamp != null ? (
        <div
          className={classNames(
            globalStyles.dFlex,
            globalStyles.flexWrap,
            globalStyles.alignItemsCenter
          )}
          data-testid='transactionAge'
        >
          {pending ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className={classNames(
                globalStyles.mr2,
                globalStyles.textSecondary,
                'fa-spin',
                'slow-spin'
              )}
            />
          ) : (
            <FontAwesomeIcon
              icon={faClock}
              className={classNames(
                globalStyles.mr2,
                globalStyles.textSecondary
              )}
            />
          )}

          <TimeAgo value={transaction.timestamp} short={true} />

          <span
            className={classNames(globalStyles.textSecondary, globalStyles.ml2)}
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
        <span className={globalStyles.textSecondary}>{N_A}</span>
      )}
    </DetailItem>
  );
};
