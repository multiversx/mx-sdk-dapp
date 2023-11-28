import React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { PageState } from 'UI/PageState';

function NoTransactionsComponent({ globalStyles }: WithStylesImportType) {
  return (
    <PageState
      icon={faExchangeAlt}
      title='No transactions'
      className={globalStyles?.myAuto}
    />
  );
}

export const NoTransactions = withStyles(NoTransactionsComponent, {});
