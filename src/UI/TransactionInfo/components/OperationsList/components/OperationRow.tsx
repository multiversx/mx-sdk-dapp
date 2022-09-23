import React from 'react';

import {
  InterpretedTransactionType,
  OperationType,
  VisibleTransactionOperationType
} from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';
import { DetailedItem } from './DetailedItem';
import { OperationToken } from './OperationToken';

import globalStyles from 'assets/sass/main.scss';

interface OperationRowPropsTypes {
  operation: OperationType;
  transaction: InterpretedTransactionType;
}

export const OperationRow = (props: OperationRowPropsTypes) => {
  const { operation, transaction } = props;

  switch (operation.type) {
    case VisibleTransactionOperationType.nft:
    case VisibleTransactionOperationType.esdt:
      return (
        <DetailedItem operation={operation} transaction={transaction}>
          <>
            {operation.esdtType === NftEnumType.NonFungibleESDT && (
              <div className={globalStyles.mr1}>NFT</div>
            )}

            {operation.esdtType === NftEnumType.SemiFungibleESDT && (
              <div className={globalStyles.mr1}>SFT quantity</div>
            )}

            <OperationToken operation={operation} />
          </>
        </DetailedItem>
      );

    case VisibleTransactionOperationType.egld:
      return (
        <DetailedItem operation={operation} transaction={transaction}>
          <>
            <div className={globalStyles.mr2}>Value</div>

            <FormatAmount value={operation.value} showLastNonZeroDecimal />
          </>
        </DetailedItem>
      );

    default:
      return <></>;
  }
};
