import * as React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { PageState } from 'UI/PageState';

export function FailedTransactions() {
  return (
    <PageState
      icon={faExchangeAlt}
      title='Unable to load transactions'
      className='py-spacer my-auto'
      dataTestId='errorScreen'
    />
  );
}
