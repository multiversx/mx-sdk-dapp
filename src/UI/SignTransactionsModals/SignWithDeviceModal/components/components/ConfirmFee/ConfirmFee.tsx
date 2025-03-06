import React, { useState } from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  DataTestIdsEnum,
  GAS_PER_DATA_BYTE,
  GAS_PRICE_MODIFIER
} from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetEgldPrice } from 'hooks';
import { Balance } from 'UI/Balance';
import { LoadingDots } from 'UI/LoadingDots';
import { getEgldLabel } from 'utils';
import {
  calculateFeeInFiat,
  calculateFeeLimit,
  formatAmount
} from 'utils/operations';
import { GasDetails, GasDetailsPropsType } from './components/GasDetails';

const ConfirmFeeComponent = ({
  transaction,
  gasPriceMultiplier,
  updateCurrentTransaction,
  styles
}: GasDetailsPropsType & WithStylesImportType) => {
  const { price } = useGetEgldPrice();
  const [showGasDetails, setShowGasDetails] = useState(false);

  const egldLabel = getEgldLabel();
  const feeLimit = calculateFeeLimit({
    gasPerDataByte: String(GAS_PER_DATA_BYTE),
    gasPriceModifier: String(GAS_PRICE_MODIFIER),
    gasLimit: transaction.getGasLimit().valueOf().toString(),
    gasPrice: transaction.getGasPrice().valueOf().toString(),
    data: transaction.getData().toString(),
    chainId: transaction.getChainID().valueOf()
  });

  const feeLimitFormatted = formatAmount({
    input: feeLimit,
    showLastNonZeroDecimal: true
  });

  const feeInFiatLimit = price
    ? calculateFeeInFiat({
        feeLimit,
        egldPriceInUsd: price,
        hideEqualSign: true
      })
    : null;

  const expandGasDetails = () => {
    setShowGasDetails(true);
  };

  return (
    <>
      <div className={styles?.confirmFee}>
        <div className={styles?.confirmFeeLabel}>
          Transaction Fee
          <FontAwesomeIcon
            icon={faPencil}
            className={styles?.svg}
            onClick={expandGasDetails}
          />
        </div>

        <div className={styles?.confirmFeeData}>
          <Balance
            className={styles?.confirmFeeDataBalance}
            data-testid={DataTestIdsEnum.confirmFee}
            egldIcon
            showTokenLabel
            showTokenLabelSup
            tokenLabel={egldLabel}
            amount={feeLimitFormatted}
          />

          {feeInFiatLimit ? (
            <span className={styles?.confirmFeeDataPriceWrapper}>
              (
              <Balance
                amount={feeInFiatLimit}
                displayAsUsd
                addEqualSign
                className={styles?.confirmFeeDataPrice}
              />
              )
            </span>
          ) : (
            <span className={styles?.confirmFeeDataPriceWrapper}>
              <LoadingDots />
            </span>
          )}
        </div>
      </div>
      {showGasDetails && (
        <GasDetails
          gasPriceMultiplier={gasPriceMultiplier}
          transaction={transaction}
          updateCurrentTransaction={updateCurrentTransaction}
        />
      )}
    </>
  );
};

export const ConfirmFee = withStyles(ConfirmFeeComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmFee/confirmFeeStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmFee/confirmFeeStyles.scss')
      .default
});
