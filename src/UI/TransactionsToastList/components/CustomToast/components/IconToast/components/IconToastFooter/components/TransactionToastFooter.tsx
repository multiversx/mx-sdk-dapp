import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccount } from 'hooks/account/useGetAccount';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { TransactionServerStatusesEnum } from 'types';
import { TransactionDetailsBody } from 'UI/TransactionDetails/components';
import { TransactionValue } from 'UI/TransactionsTable/components/TransactionValue';
import { TransactionIconToastPropsType } from 'UI/TransactionsToastList/components/CustomToast/customToast.types';
import { getInterpretedTransaction } from 'utils/transactions';
import { SharedToastFooter } from './SharedToastFooter';

const TransactionToastFooterComponent = (
  props: TransactionIconToastPropsType & WithStylesImportType
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
      <div className={props.styles?.status}>
        <TransactionValue transaction={interpretedTransaction} />
      </div>
      <TransactionDetailsBody
        className={className}
        hash={interpretedTransaction.txHash}
        status={interpretedTransaction.status as TransactionServerStatusesEnum}
      />
    </SharedToastFooter>
  );
};

export const TransactionToastFooter = withStyles(
  TransactionToastFooterComponent,
  {
    ssrStyles: () =>
      import('UI/TransactionDetails/transactionDetails.styles.scss'),
    clientStyles: () =>
      require('UI/TransactionDetails/transactionDetails.styles.scss').default
  }
);
