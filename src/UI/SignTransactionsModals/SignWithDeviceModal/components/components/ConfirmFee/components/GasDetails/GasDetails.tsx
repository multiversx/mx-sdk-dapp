import React from 'react';
import classNames from 'classnames';

import { withStyles } from 'hocs/withStyles';
import { ActiveLedgerTransactionType } from 'types/transactions.types';
import { Balance } from 'UI/Balance';
import { formatAmount, getEgldLabel } from 'utils';

import {
  GasDetailsPropsType,
  GasMultiplerOptionType
} from './gasDetails.types';

const GAS_PRICE_MODIFIER_FIELD = 'gasPriceMultiplier';
const DEFAULT_GAS_PRICE_MULTIPLIER = 1;

export const GasDetailsComponent = ({
  transaction,
  gasPriceMultiplier,
  isVisible,
  needsSigning,
  updateGasPriceMultiplier,
  styles
}: GasDetailsPropsType) => {
  const gasPrice = transaction.getGasPrice().valueOf().toString();
  const gasLimit = transaction.getGasLimit().valueOf().toString();
  const egldLabel = getEgldLabel();

  const formattedGasPrice = formatAmount({
    input: gasPrice,
    showLastNonZeroDecimal: true
  });

  const handleMultiplierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateGasPriceMultiplier(
      Number(
        event.target.value
      ) as ActiveLedgerTransactionType['gasPriceMultiplier']
    );
  };

  const gasMultiplierOptions: GasMultiplerOptionType[] = [
    { label: 'Standard', value: DEFAULT_GAS_PRICE_MULTIPLIER },
    { label: 'Fast', value: 2 },
    { label: 'Faster', value: 3 }
  ];

  return (
    <div
      className={classNames(styles?.gasDetails, {
        [styles?.visible]: isVisible
      })}
    >
      <div className={styles?.gasDetailsWrapper}>
        <div className={styles?.gasDetailsPrice}>
          <div className={styles?.gasDetailsPriceLabel}>
            <span className={styles?.gasDetailsPriceLabelText}>
              Gas Price (per Gas Unit)
            </span>

            <div className={styles?.gasDetailsPriceMultipliers}>
              {gasMultiplierOptions.map((gasMultiplierOption) => (
                <div
                  key={gasMultiplierOption.label}
                  className={classNames(styles?.gasDetailsPriceMultiplier, {
                    [styles?.checked]:
                      gasPriceMultiplier === gasMultiplierOption.value
                  })}
                >
                  <input
                    type='radio'
                    disabled={!needsSigning}
                    name={GAS_PRICE_MODIFIER_FIELD}
                    value={gasMultiplierOption.value}
                    onChange={handleMultiplierChange}
                    className={styles?.gasDetailsPriceMultiplierInput}
                    checked={gasPriceMultiplier === gasMultiplierOption.value}
                    id={`${GAS_PRICE_MODIFIER_FIELD}-${gasMultiplierOption.value}`}
                  />

                  <label
                    className={styles?.gasDetailsPriceMultiplierLabel}
                    htmlFor={`${GAS_PRICE_MODIFIER_FIELD}-${gasMultiplierOption.value}`}
                  >
                    {gasMultiplierOption.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Balance
            className={styles?.gasDetailsPriceValue}
            egldIcon
            showTokenLabel
            showTokenLabelSup
            tokenLabel={egldLabel}
            amount={formattedGasPrice}
          />
        </div>

        <div className={styles?.gasDetailsLimit}>
          <div className={styles?.gasDetailsLimitLabel}>Gas Limit</div>

          <Balance
            className={styles?.gasDetailsLimitValue}
            showTokenLabel={false}
            amount={gasLimit}
            egldIcon
          />
        </div>
      </div>
    </div>
  );
};

export const GasDetails = withStyles(GasDetailsComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmFee/components/GasDetails/gasDetailsStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmFee/components/GasDetails/gasDetailsStyles.scss')
      .default
});
