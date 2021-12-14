import React from 'react';
import { transactionServices } from 'dapp-core';

export const PingPongPage: () => JSX.Element = () => {
  const { sendSimpleTransactions } = transactionServices;

  const contractAddress =
    'erd1qqqqqqqqqqqqqpgquvt728n40ssd8n2qns9jrlqpwq2jc4rj4cysfuj3ad';

  const sendPingTransaction = () => {
    const pingTransaction = {
      value: '1',
      data: 'ping',
      gasLimit: 10000000,
      receiver: contractAddress
    };

    sendSimpleTransactions({
      minGasLimit: 5000,
      transactions: pingTransaction
    });
  };

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto m-4'>
        <button onClick={sendPingTransaction} className='btn btn-primary  mx-2'>Send</button>
      </div>
    </div>
  );
};

export default PingPongPage;
