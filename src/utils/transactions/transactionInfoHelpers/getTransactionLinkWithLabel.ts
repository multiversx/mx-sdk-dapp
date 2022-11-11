import {
  InterpretedTransactionType,
  TransactionDirectionEnum,
  TransactionLinkType
} from 'types';

export interface GetTransactionLinkWithLabelParamsType {
  transaction: InterpretedTransactionType;
  direction: TransactionDirectionEnum;
}

export const getTransactionLinkWithLabel = ({
  transaction,
  direction
}: GetTransactionLinkWithLabelParamsType): TransactionLinkType => {
  const isSmartContract = direction === TransactionDirectionEnum.INTERNAL;
  let address = transaction.sender;

  if (isSmartContract) {
    return {
      link: transaction.links.senderLink ?? '',
      label: 'Smart Contract transaction',
      address
    };
  }

  const isOut = direction === TransactionDirectionEnum.OUT;

  const link = isOut
    ? transaction.links.receiverLink
    : transaction.links.senderLink;

  let label = '';

  const isSelf = direction === TransactionDirectionEnum.SELF;

  if (isSelf && transaction.receiverAssets) {
    label = transaction.receiverAssets.name;
  } else {
    address = isOut ? transaction.receiver : transaction.sender;
    label = isOut ? 'To:' : 'From:';
  }

  return {
    label,
    address,
    link: link ?? ''
  };
};
