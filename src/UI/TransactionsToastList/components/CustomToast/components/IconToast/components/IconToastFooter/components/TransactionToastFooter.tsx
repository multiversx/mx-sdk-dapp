import React from 'react';
import { useGetAccount } from 'hooks/account/useGetAccount';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { TransactionServerStatusesEnum } from 'types';
import { TransactionDetailsBody } from 'UI/TransactionDetails/components';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { TransactionValue } from 'UI/TransactionsTable/components/TransactionValue';
import { getInterpretedTransaction } from 'utils';
import { TransactionIconToastPropsType } from '../../../../../customToast.types';
import { SharedToastFooter } from './SharedToastFooter';

export const TransactionToastFooter = (
  props: TransactionIconToastPropsType
) => {
  const { className, transaction } = props;
  const { address } = useGetAccount();
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const interpretedTransaction = getInterpretedTransaction({
    transaction,
    address: address ?? '',
    explorerAddress
  });

  return (
    <SharedToastFooter>
      <>
        <div className={transactionDetailsStyles.status}>
          <TransactionValue transaction={interpretedTransaction} />
        </div>
        <TransactionDetailsBody
          className={className}
          hash={interpretedTransaction.txHash}
          status={
            interpretedTransaction.status as TransactionServerStatusesEnum
          }
        />
      </>
    </SharedToastFooter>
  );
};
