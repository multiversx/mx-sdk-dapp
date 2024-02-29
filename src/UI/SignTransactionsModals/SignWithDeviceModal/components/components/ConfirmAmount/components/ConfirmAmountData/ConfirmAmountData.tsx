import React from 'react';

import { DataTestIdsEnum } from 'constants/index';
import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import {
  AccountInfoSliceNetworkType,
  ActiveLedgerTransactionType
} from 'types';
import { Balance } from 'UI/Balance';
import { UsdValue } from 'UI/UsdValue';
import { formatAmount } from 'utils';

export interface ConfirmAmountDataComponentPropsType
  extends WithStylesImportType {
  isEgld: boolean;
  tokenAvatar: string;
  egldLabel: string;
  ticker?: string;
  tokenPrice?: number;
  isNftOrSft: boolean;
  amount: string;
  tokenDecimals: number;
  network: AccountInfoSliceNetworkType;
  handleReference: (element: HTMLElement | null) => void;
  currentTransaction: ActiveLedgerTransactionType;
}

const ConfirmAmountDataComponent = ({
  isEgld,
  styles,
  tokenAvatar,
  egldLabel,
  ticker,
  tokenPrice,
  isNftOrSft,
  handleReference,
  network,
  tokenDecimals,
  currentTransaction,
  amount
}: ConfirmAmountDataComponentPropsType) => {
  const getFormattedAmount = ({ addCommas }: { addCommas: boolean }) =>
    formatAmount({
      input: isEgld
        ? currentTransaction.transaction.getValue().toString()
        : amount,
      decimals: isEgld ? Number(network.decimals) : tokenDecimals,
      digits: Number(network.digits),
      showLastNonZeroDecimal: false,
      addCommas
    });

  const formattedAmount = getFormattedAmount({ addCommas: true });
  const rawAmount = getFormattedAmount({ addCommas: false });

  return (
    <div className={styles?.confirmAmountData}>
      <div className={styles?.confirmAmountDataWrapper}>
        {!isEgld && (
          <img src={tokenAvatar} className={styles?.confirmAmountDataIcon} />
        )}

        <div
          className={styles?.confirmAmountDataBalanceWrapper}
          ref={handleReference}
        >
          <Balance
            amount={formattedAmount}
            egldIcon={isEgld}
            showTokenLabel={true}
            showTokenLabelSup={true}
            tokenLabel={isEgld ? egldLabel : ticker}
            className={styles?.confirmAmountDataBalance}
          />
        </div>
      </div>

      {!isNftOrSft && tokenPrice && (
        <UsdValue
          amount={rawAmount}
          usd={tokenPrice}
          data-testid={DataTestIdsEnum.confirmUsdValue}
          className={styles?.confirmAmountDataPrice}
        />
      )}

      {!isNftOrSft && !tokenPrice && (
        <div className={styles?.confirmAmountDataPrice}>Price Unknown</div>
      )}
    </div>
  );
};

export const ConfirmAmountData = withStyles(ConfirmAmountDataComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/components/ConfirmAmountData/confirmAmountDataStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/components/ConfirmAmountData/confirmAmountDataStyles.scss')
      .default
});
