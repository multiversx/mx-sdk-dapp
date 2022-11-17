import React from 'react';
import { useGetAccount } from 'hooks/account/useGetAccount';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { TransactionServerStatusesEnum } from 'types';
import { TransactionDetailsBody } from 'UI/TransactionDetails/components';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { TransactionValue } from 'UI/TransactionsTable/components/TransactionValue';
import { getInterpretedTransaction } from 'utils';
import styles from '../../../../TransactionToast/transactionToast.styles.scss';
import { TransactionIconToastPropsType } from '../../../customToast.types';

export const TransactionToastFooter = ({
  className,
  transaction
}: TransactionIconToastPropsType) => {
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
    <div className={styles.footer}>
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
    </div>
  );
};
