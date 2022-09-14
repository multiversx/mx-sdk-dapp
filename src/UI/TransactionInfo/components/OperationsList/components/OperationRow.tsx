import * as React from 'react';
import {
  InterpretedTransactionType,
  OperationType,
  VisibleTransactionOperationType
} from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';
import { DetailedItem } from './DetailedItem';
import { OperationToken } from './OperationToken';

export const OperationRow = ({
  operation,
  transaction
}: {
  operation: OperationType;
  transaction: InterpretedTransactionType;
}) => {
  switch (operation.type) {
    case VisibleTransactionOperationType.nft:
    case VisibleTransactionOperationType.esdt:
      return (
        <DetailedItem operation={operation} transaction={transaction}>
          <>
            {operation.esdtType === NftEnumType.NonFungibleESDT && (
              <div className='mr-1'>NFT</div>
            )}
            {operation.esdtType === NftEnumType.SemiFungibleESDT && (
              <div className='mr-1'>SFT quantity</div>
            )}
            <OperationToken operation={operation} />
          </>
        </DetailedItem>
      );

    case VisibleTransactionOperationType.egld:
      return (
        <DetailedItem operation={operation} transaction={transaction}>
          <>
            <div className='mr-2'>Value</div>
            <FormatAmount
              value={operation.value}
              showLastNonZeroDecimal={true}
            />
          </>
        </DetailedItem>
      );

    default:
      return <></>;
  }
};
