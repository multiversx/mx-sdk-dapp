import { ServerTransactionType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { getReceiverData } from './getReceiverData';

interface IGetTransactionActionDirectionLabelParams {
  transaction: ServerTransactionType;
  currentUserAddress: string;
  transferType?: string;
}

export const getTransactionActionDirectionLabel = ({
  transaction,
  transferType,
  currentUserAddress
}: IGetTransactionActionDirectionLabelParams) => {
  const { receiver } = getReceiverData(transaction);

  const isSelfTransaction = receiver === transaction.sender;
  const isReceiverTransaction = receiver === currentUserAddress;
  const isSenderTransaction = !isSelfTransaction && !isReceiverTransaction;
  const processedTransferType = transferType as NftEnumType;

  const selfTransactionTransferTypes = [
    NftEnumType.SemiFungibleESDT,
    NftEnumType.NonFungibleESDT,
    NftEnumType.MetaESDT
  ];

  const isSelfSentTransactionTransfer = selfTransactionTransferTypes.includes(
    processedTransferType
  );

  if (
    (isSelfTransaction && isSelfSentTransactionTransfer) ||
    isReceiverTransaction
  ) {
    return 'Received';
  }

  if (isSelfTransaction && !isSelfSentTransactionTransfer) {
    return 'Self Sent';
  }

  if (isSenderTransaction) {
    return 'Sent';
  }

  return 'Self';
};
