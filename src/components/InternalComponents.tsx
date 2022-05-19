import React, { Component } from 'react';
import TransactionSender from './TransactionSender';
import TransactionsTracker from './TransactionsTracker';

// {
//   txSender : {
//     Component:
//     props:
//   }
// }

export class InternalComponents extends Component {
  static TransactionSender = TransactionSender;
  static TransactionsTracker = TransactionsTracker;

  render() {
    return (
      <>
        <TransactionSender />
        <TransactionsTracker />
      </>
    );
  }
}

export default InternalComponents;
