import React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { PageState } from 'UI/PageState';

function FailedTransactionsComponent({ globalStyles }: WithStylesImportType) {
  return (
    <PageState
      icon={faExchangeAlt}
      title='Unable to load transactions'
      className={globalStyles?.myAuto}
      data-testid={DataTestIdsEnum.errorScreen}
    />
  );
}

export const FailedTransactions = withStyles(FailedTransactionsComponent, {});
