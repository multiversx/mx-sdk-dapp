import { Transaction } from '@multiversx/sdk-core/out';

import { WithStylesImportType } from 'hocs/useStyles';
import { UseSignTransactionsWithDeviceReturnType } from 'hooks';
import { ActiveLedgerTransactionType } from 'types';

export interface GasDetailsPropsType extends WithStylesImportType {
  transaction: Transaction;
  gasPriceMultiplier: ActiveLedgerTransactionType['gasPriceMultiplier'];
  needsSigning: boolean;
  updateGasPriceMultiplier: UseSignTransactionsWithDeviceReturnType['updateGasPriceMultiplier'];
}

export enum GasMultiplierOptionLabelEnum {
  Standard = 'Standard',
  Fast = 'Fast',
  Faster = 'Faster'
}

export interface GasMultiplerOptionType {
  value: 1 | 2 | 3;
  label: `${GasMultiplierOptionLabelEnum}`;
}
