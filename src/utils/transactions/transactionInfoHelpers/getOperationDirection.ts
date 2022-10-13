import { TransactionDirectionEnum } from 'types/serverTransactions.types';

import { WithOperationType } from '../../../UI/types';

interface GetOperationDirectionType extends WithOperationType {
  address: string;
}

export const getOperationDirection = ({
  operation,
  address
}: GetOperationDirectionType) => {
  const directionOut = address === operation.sender;
  const directionIn = address === operation.receiver;
  const directionSelf = directionOut && directionIn;
  const directionInternal = !directionSelf;

  let direction = '';
  switch (true) {
    case directionOut:
      direction = TransactionDirectionEnum.OUT;
      break;
    case directionIn:
      direction = TransactionDirectionEnum.IN;
      break;
    case directionSelf:
      direction = TransactionDirectionEnum.SELF;
      break;
    case directionInternal:
      direction = TransactionDirectionEnum.INTERNAL;
      break;
  }

  return {
    direction
  };
};
