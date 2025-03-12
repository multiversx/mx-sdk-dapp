import { Transaction } from '@multiversx/sdk-core/out';

import { WithStylesImportType } from 'hocs/useStyles';
import { UseSignTransactionsWithDeviceReturnType } from 'hooks';
import { ActiveLedgerTransactionType } from 'types';

export interface GasDetailsPropsType extends WithStylesImportType {
  isVisible?: boolean;
  needsSigning: boolean;
  transaction: Transaction;
  ppu: ActiveLedgerTransactionType['ppu'];
  updatePPU: UseSignTransactionsWithDeviceReturnType['updatePPU'];
}

export enum GasMultiplierOptionLabelEnum {
  Standard = 'Standard',
  Fast = 'Fast',
  Faster = 'Faster'
}

export interface GasMultiplerOptionType {
  value: number;
  label: `${GasMultiplierOptionLabelEnum}`;
}
