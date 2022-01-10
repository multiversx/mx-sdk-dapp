import React from 'react';
import { transactionServices } from 'dapp-core';

export const PingPongPage: () => JSX.Element = () => {
  const { sendTransactions } = transactionServices;

  const [transactionSessionId, setTransactionSessionId] = React.useState<
    string | null
  >(null);

  const contractAddress =
    'erd1qqqqqqqqqqqqqpgquvt728n40ssd8n2qns9jrlqpwq2jc4rj4cysfuj3ad';

  const sendPingTransaction = async () => {
    const pingTransaction = {
      value: '1000000000000000000',
      data: 'ping',
      receiver: contractAddress
    };

    const { sessionId, error } = await sendTransactions({
      transactions: pingTransaction
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

  const sendESDTTransaction = async () => {
    const pingTransaction = {
      value: '0',
      data: 'MultiESDTNFTTransfer@0000000000000000050061506400f3e0c5ea560192716d0daefa0b9587017ceb@02@5745474c442d383836303061@@0de0b6b3a7640000@555344432d613332393036@@133d84b2@6164644c6971756964697479@0dbd2fc137a30000@130c435e',
      receiver: contractAddress
    };

    const { sessionId, error } = await sendTransactions({
      transactions: pingTransaction
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

  const sendPongTransaction = async () => {
    const pongTransaction = {
      value: '0',
      data: 'pong',
      receiver: contractAddress
    };

    const { sessionId, error } = await sendTransactions({
      transactions: pongTransaction
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

  return (
    <div className='m-auto p-4'>
      <p className=''>Ping Pong</p>
      <button onClick={sendPingTransaction} className='btn btn-primary  mx-2'>
        Send ping
      </button>
      <button onClick={sendESDTTransaction} className='btn btn-primary  mx-2'>
        Send ESDT Transaction
      </button>
      <button onClick={sendPongTransaction} className='btn btn-primary  mx-2'>
        Send pong
      </button>
    </div>
  );
};

export default PingPongPage;
