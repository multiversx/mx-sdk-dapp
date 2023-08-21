import React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import globalStyles from 'assets/sass/main.scss';
import { DataTestIdsEnum } from 'constants/index';
import { PageState } from 'UI/PageState';

export function FailedTransactions() {
  return (
    <PageState
      icon={faExchangeAlt}
      title='Unable to load transactions'
      className={globalStyles.myAuto}
      data-testid={DataTestIdsEnum.errorScreen}
    />
  );
}
