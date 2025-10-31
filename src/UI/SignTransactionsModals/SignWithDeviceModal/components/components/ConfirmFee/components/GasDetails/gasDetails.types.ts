import { Transaction } from '@multiversx/sdk-core';

import { WithStylesImportType } from 'hocs/useStyles';
import { UseSignTransactionsWithDeviceReturnType } from 'hooks';

export interface GasDetailsPropsType extends WithStylesImportType {
  isVisible?: boolean;
  needsSigning: boolean;
  initialGasPrice: number;
  transaction: Transaction;
  updateGasPriceOption: UseSignTransactionsWithDeviceReturnType['updateGasPriceOption'];
}

export enum GasMultiplierOptionLabelEnum {
  Standard = 'Standard',
  Fast = 'Fast',
  Faster = 'Faster'
}
