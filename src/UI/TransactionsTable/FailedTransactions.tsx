import * as React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { PageState } from 'UI/PageState';
import globalStyles from 'assets/sass/main.scss';

export function FailedTransactions() {
  return (
    <PageState
      icon={faExchangeAlt}
      title='Unable to load transactions'
      className={globalStyles.myAuto}
      dataTestId='errorScreen'
    />
  );
}
