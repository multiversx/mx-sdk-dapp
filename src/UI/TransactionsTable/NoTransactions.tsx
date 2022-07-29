import * as React from 'react';
import { faExchangeAlt } from '@fortawesome/pro-regular-svg-icons/faExchangeAlt';
import { PageState } from 'sharedComponents';

export default function NoTransactions() {
  return <PageState icon={faExchangeAlt} title="No transactions" className="py-spacer my-auto" />;
}
