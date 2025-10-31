import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'hocs/withStyles';
import { useGetAccount } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { networkConfigSelector } from 'reduxStore/selectors';

import { Balance } from 'UI/Balance';
import { formatAmount } from 'utils';

import { GasDetailsPropsType } from './gasDetails.types';
import { getGasPriceOptions } from './helpers/getGasPriceOptions';

const GAS_PRICE_MODIFIER_FIELD = 'gasPriceMultiplier';

export const GasDetailsComponent = ({
  transaction,
  isVisible,
  needsSigning,
  updateGasPriceOption,
  initialGasPrice,
  styles
}: GasDetailsPropsType) => {
  const gasPrice = transaction.gasPrice.valueOf().toString();
  const gasLimit = transaction.gasLimit.valueOf().toString();
  const { shard } = useGetAccount();

  const {
    network: { egldLabel, gasStationMetadata }
  } = useSelector(networkConfigSelector);

  const formattedGasPrice = formatAmount({
    input: gasPrice,
    showLastNonZeroDecimal: true
  });

  const handleGasPriceOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedOption = Number(event.target.value);
    updateGasPriceOption(selectedOption);
  };

  if (!gasStationMetadata) {
    return null;
  }

  const gasPriceOptions = getGasPriceOptions({
    shard,
    gasStationMetadata,
    initialGasPrice,
    transaction: transaction.toPlainObject()
  });

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
              {gasPriceOptions.map((option) => (
                <div
                  key={option.label}
                  className={classNames(styles?.gasDetailsPriceMultiplier, {
                    [styles?.checked]:
                      transaction.gasPrice.toString() ===
                      option.value.toString(),
                    [styles?.disabled]: !needsSigning
                  })}
                >
                  <input
                    type='radio'
                    disabled={!needsSigning}
                    name={GAS_PRICE_MODIFIER_FIELD}
                    value={option.value}
                    onChange={handleGasPriceOptionChange}
                    className={styles?.gasDetailsPriceMultiplierInput}
                    checked={
                      transaction.gasPrice.toString() ===
                      option.value.toString()
                    }
                    id={`${GAS_PRICE_MODIFIER_FIELD}-${option.value}`}
                  />

                  <label
                    className={styles?.gasDetailsPriceMultiplierLabel}
                    htmlFor={`${GAS_PRICE_MODIFIER_FIELD}-${option.value}`}
                  >
                    {option.label}
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
