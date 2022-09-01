import * as React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import globalStyles from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';

export function NoTransactions() {
  return (
    <PageState
      icon={faExchangeAlt}
      title='No transactions'
      className={globalStyles.myAuto}
    />
  );
}
