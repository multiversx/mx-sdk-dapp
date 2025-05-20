import { AssetType } from 'types/account.types';
import { ServerTransactionType } from 'types/serverTransactions.types';

export const getReceiverData = (transaction: ServerTransactionType) => {
  const receiverAddress = transaction.receiver;
  const isSelfTransaction = receiverAddress === transaction.sender;

  const transactionArguments =
    transaction.action && transaction.action.arguments;

  const retrieveArgumentsReceiverData =
    isSelfTransaction &&
    transactionArguments &&
    transactionArguments.receiver &&
    transactionArguments.receiver !== receiverAddress;

  const receiver: string = retrieveArgumentsReceiverData
    ? transactionArguments.receiver
    : receiverAddress;

  const receiverAssets: AssetType = retrieveArgumentsReceiverData
    ? transactionArguments.receiverAssets
    : transaction.receiverAssets;

  return { receiver, receiverAssets };
};
