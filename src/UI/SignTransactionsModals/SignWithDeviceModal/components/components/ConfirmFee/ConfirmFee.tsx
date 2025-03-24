import React, { MouseEvent, useEffect, useState } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import {
  DataTestIdsEnum,
  GAS_PER_DATA_BYTE,
  GAS_PRICE_MODIFIER
} from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccount, useGetEgldPrice } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { networkConfigSelector } from 'reduxStore/selectors';
import { Balance } from 'UI/Balance';
import { LoadingDots } from 'UI/LoadingDots';
import {
  calculateFeeInFiat,
  calculateFeeLimit,
  formatAmount
} from 'utils/operations';

import { GasDetails } from './components';
import { GasDetailsPropsType } from './components/GasDetails/gasDetails.types';
import { getGasPriceDetails } from './components/GasDetails/helpers/getGasPriceDetails';
export type ConfirmFeePropsType = GasDetailsPropsType & WithStylesImportType;

const ConfirmFeeComponent = ({
  transaction,
  ppu,
  needsSigning,
  updatePPU,
  styles
}: ConfirmFeePropsType) => {
  const { price } = useGetEgldPrice();
  const [showGasDetails, setShowGasDetails] = useState(false);
  const { shard } = useGetAccount();

  const nonce = Number(transaction.nonce);

  const [initialGasPriceInfo, setInitialGasPriceInfo] = useState({
    [nonce]: Number(transaction.gasPrice)
  });

  useEffect(() => {
    setInitialGasPriceInfo((existing) => ({
      ...existing,
      [nonce]: Number(transaction.gasPrice)
    }));
  }, [nonce]);

  const {
    network: { egldLabel, gasStationMetadata }
  } = useSelector(networkConfigSelector);

  const feeLimit = calculateFeeLimit({
    gasPerDataByte: String(GAS_PER_DATA_BYTE),
    gasPriceModifier: String(GAS_PRICE_MODIFIER),
    gasLimit: transaction.gasLimit.toString(),
    gasPrice: transaction.gasPrice.toString(),
    data: transaction.data.toString(),
    chainId: transaction.chainID.valueOf()
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

  const initialGasPrice = initialGasPriceInfo[nonce];

  const { areRadiosEditable } = getGasPriceDetails({
    shard,
    gasStationMetadata,
    transaction,
    initialGasPrice
  });

  const handleToggleGasDetails = (event: MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    setShowGasDetails((isDetailsVisible) => !isDetailsVisible);
  };

  return (
    <>
      <div className={styles?.confirmFee}>
        <div className={styles?.confirmFeeLabel}>
          <span className={styles?.confirmFeeLabelText}>Transaction Fee</span>

          {needsSigning && areRadiosEditable && (
            <FontAwesomeIcon
              icon={faGear}
              onClick={handleToggleGasDetails}
              className={classNames(styles?.confirmFeeLabelIcon, {
                [styles?.toggled]: showGasDetails
              })}
            />
          )}
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
      {areRadiosEditable && (
        <GasDetails
          transaction={transaction}
          isVisible={showGasDetails}
          needsSigning={needsSigning}
          ppu={ppu}
          updatePPU={updatePPU}
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
