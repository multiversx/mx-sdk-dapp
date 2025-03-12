import React from 'react';
import classNames from 'classnames';
import { EMPTY_PPU } from 'constants/network';
import { withStyles } from 'hocs/withStyles';
import { useSelector } from 'reduxStore/DappProviderContext';
import { networkConfigSelector } from 'reduxStore/selectors';

import { ActiveLedgerTransactionType } from 'types/transactions.types';
import { Balance } from 'UI/Balance';
import { formatAmount } from 'utils';

import {
  GasDetailsPropsType,
  GasMultiplerOptionType,
  GasMultiplierOptionLabelEnum
} from './gasDetails.types';

const GAS_PRICE_MODIFIER_FIELD = 'gasPriceMultiplier';

export const GasDetailsComponent = ({
  transaction,
  ppu,
  isVisible,
  needsSigning,
  updatePPU,
  styles
}: GasDetailsPropsType) => {
  const gasPrice = transaction.getGasPrice().valueOf().toString();
  const gasLimit = transaction.getGasLimit().valueOf().toString();

  const {
    network: { egldLabel, ppuForGasPrice }
  } = useSelector(networkConfigSelector);

  const formattedGasPrice = formatAmount({
    input: gasPrice,
    showLastNonZeroDecimal: true
  });

  const handleMultiplierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updatePPU(Number(event.target.value) as ActiveLedgerTransactionType['ppu']);
  };

  if (!ppuForGasPrice) {
    return null;
  }

  const gasMultiplierOptions: GasMultiplerOptionType[] = [
    {
      label: GasMultiplierOptionLabelEnum.Standard,
      value: EMPTY_PPU
    },
    {
      label: GasMultiplierOptionLabelEnum.Fast,
      value: ppuForGasPrice.fast
    },
    {
      label: GasMultiplierOptionLabelEnum.Faster,
      value: ppuForGasPrice.faster
    }
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
                    [styles?.checked]: ppu === gasMultiplierOption.value
                  })}
                >
                  <input
                    type='radio'
                    disabled={!needsSigning}
                    name={GAS_PRICE_MODIFIER_FIELD}
                    value={gasMultiplierOption.value}
                    onChange={handleMultiplierChange}
                    className={styles?.gasDetailsPriceMultiplierInput}
                    checked={ppu === gasMultiplierOption.value}
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
