import { TransactionDirectionEnum } from 'types/serverTransactions.types';

import { WithOperationType } from '../../../UI/types';

export const getOperationDirection = ({
  operation,
  address
}: { address: string } & WithOperationType) => {
  const directionOut = address === operation.sender;
  const directionIn = address === operation.receiver;
  const directionSelf = directionOut && directionIn;
  const directionInternal = !directionSelf;

  let direction: TransactionDirectionEnum | undefined;
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
