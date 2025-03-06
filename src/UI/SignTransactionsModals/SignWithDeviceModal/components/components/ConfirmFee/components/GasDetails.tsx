import React from 'react';
import { Transaction } from '@multiversx/sdk-core/out';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { UseSignTransactionsWithDeviceReturnType } from 'hooks/transactions/useSignTransactionsWithDevice';
import { ActiveLedgerTransactionType } from 'types/transactions.types';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';

export interface GasDetailsPropsType {
  transaction: Transaction;
  gasPriceMultiplier: ActiveLedgerTransactionType['gasPriceMultiplier'];
  updateGasPriceMultiplier: UseSignTransactionsWithDeviceReturnType['updateGasPriceMultiplier'];
}

const FIELD_NAME = 'gasPriceMultiplier';

export const GasDetailsComponent = ({
  transaction,
  gasPriceMultiplier,
  updateGasPriceMultiplier,
  styles
}: GasDetailsPropsType & WithStylesImportType) => {
  const gasPrice = transaction.getGasPrice().valueOf().toString();
  const gasLimit = transaction.getGasLimit().valueOf().toString();

  const handleMultiplierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateGasPriceMultiplier(
      Number(
        event.target.value
      ) as ActiveLedgerTransactionType['gasPriceMultiplier']
    );
  };

  return (
    <div className={styles?.gasDetails}>
      <div className={styles?.topSection}>
        <div className={styles?.priceSection}>
          <label className={styles?.label}>Gas Price</label>
          <p className={styles?.value}>
            <FormatAmount
              value={gasPrice}
              showLastNonZeroDecimal
              egldLabel=''
            />
          </p>
        </div>

        <div className={styles?.radioGroup}>
          <div className={styles?.radioOption}>
            <input
              type='radio'
              id='multiplier1'
              name={FIELD_NAME}
              value={1}
              checked={gasPriceMultiplier === 1}
              onChange={handleMultiplierChange}
            />
            <label htmlFor='multiplier1'>x1 (Normal)</label>
          </div>

          <div className={styles?.radioOption}>
            <input
              type='radio'
              id='multiplier2'
              name={FIELD_NAME}
              value={2}
              checked={gasPriceMultiplier === 2}
              onChange={handleMultiplierChange}
            />
            <label htmlFor='multiplier2'>x2 (Fast)</label>
          </div>

          <div className={styles?.radioOption}>
            <input
              type='radio'
              id='multiplier3'
              name={FIELD_NAME}
              value={3}
              checked={gasPriceMultiplier === 3}
              onChange={handleMultiplierChange}
            />
            <label htmlFor='multiplier3'>x3 (Faster)</label>
          </div>
        </div>
      </div>

      <div className={styles?.section}>
        <label className={styles?.label}>Gas Limit</label>
        <p className={styles?.value}>{gasLimit}</p>
      </div>
    </div>
  );
};

export const GasDetails = withStyles(GasDetailsComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmFee/components/gasDetailsStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmFee/components/gasDetailsStyles.scss')
      .default
});
