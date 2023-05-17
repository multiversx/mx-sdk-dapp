import React from 'react';

// import { calculateFeeInFiat } from 'operations';
import { Transaction } from '@multiversx/sdk-core/out';
import { GAS_PER_DATA_BYTE, GAS_PRICE_MODIFIER, ZERO } from 'constants/index';

// import { TransactionTypeEnum } from 'types';
import { useGetEgldPrice } from 'hooks';
import { FormatAmount } from 'UI/FormatAmount';

// import { TokenAvatar } from '../TokenAvatar';
import { calculateFeeInFiat, calculateFeeLimit } from 'utils';

import { TokenAvatar } from '../TokenAvatar';
import styles from './confirmFeeStyles.scss';

export interface FeePropsType {
  transaction: Transaction;
  egldLabel: string;
  tokenAvatar?: string;
}

export const ConfirmFee = ({
  transaction,
  tokenAvatar,
  egldLabel
}: FeePropsType) => {
  const { price } = useGetEgldPrice();

  const feeLimit = calculateFeeLimit({
    gasPerDataByte: String(GAS_PER_DATA_BYTE),
    gasPriceModifier: String(GAS_PRICE_MODIFIER),
    gasLimit: transaction.getGasLimit().valueOf().toString(),
    gasPrice: transaction.getGasPrice().valueOf().toString(),
    data: transaction.getData().toString(),
    chainId: transaction.getChainID().valueOf()
  });

  return (
    <div className={styles.fee}>
      <span className={styles.label}>Fee</span>

      <div className={styles.token}>
        <TokenAvatar type='EGLD' avatar={tokenAvatar} />

        <div className={styles.value}>
          <FormatAmount
            egldLabel={egldLabel}
            value={feeLimit}
            showLastNonZeroDecimal={true}
            data-testid='confirmFee'
          />
        </div>
      </div>

      {feeLimit !== ZERO && price && (
        <span className={styles.price}>
          {calculateFeeInFiat({
            feeLimit,
            egldPriceInUsd: price
          })}
        </span>
      )}
    </div>
  );
};
