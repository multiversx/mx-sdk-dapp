import React from 'react';
import { transactionServices } from 'dapp-core';

export const PingPongPage: () => JSX.Element = () => {
  const { sendTransactions } = transactionServices;

  const [transactionId, setTransactionId] = React.useState<string | null>(null);
  const { isPending, isSuccessful, isFailed, isCancelled, errorMessage } =
    transactionServices.useTrackTransactionStatus(transactionId);
  const contractAddress =
    'erd1qqqqqqqqqqqqqpgquvt728n40ssd8n2qns9jrlqpwq2jc4rj4cysfuj3ad';

  console.log(
    transactionId,
    'isPending',
    isPending,
    'isSuccessful',
    isSuccessful,
    'isFailed',
    isFailed,
    'isCancelled',
    isCancelled,
    'errorMessage',
    errorMessage
  );
  const sendPingTransaction = async () => {
    const pingTransaction = {
      value: '1',
      data: 'ping',
      receiver: contractAddress
    };

    const { sessionId, error } = await sendTransactions({
      transactions: pingTransaction
    });
    if (sessionId != null) {
      setTransactionId(sessionId);
    }
  };

  return (
    <div className='m-auto p-4'>
      <p className=''>Ping Pong</p>
      <button onClick={sendPingTransaction} className='btn btn-primary  mx-2'>
        Send ping
      </button>
    </div>
  );
};

export default PingPongPage;
