import React from 'react';
import { faSpinner, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { N_A } from 'constants/index';
import { TimeAgo } from 'UI/TimeAgo/TimeAgo';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';
import { getTransactionStatus } from 'utils/transactions/transactionInfoHelpers/getTransactionStatus';

import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoAge = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => {
  const { pending } = getTransactionStatus(transaction);

  return (
    <DetailItem className={className} title='Age'>
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
