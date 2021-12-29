import React from 'react';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import TransactionsList from './TransactionsList';
import PageState from 'components/PageState';
import { useContext } from 'context';

const Transactions = () => {
  const { transactions } = useContext();

  return transactions.length > 0 ? (
    <TransactionsList transactions={transactions} />
  ) : (
    <div className='my-5'>
      <PageState
        icon={faExchangeAlt}
        className='text-muted fa-3x'
        title='No Transactions'
      />
    </div>
  );
};

export default Transactions;
