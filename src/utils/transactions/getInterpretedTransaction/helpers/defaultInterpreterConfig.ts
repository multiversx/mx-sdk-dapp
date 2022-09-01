import {
  fallbackNetworkConfigurations,
  MAINNET_EGLD_LABEL
} from 'constants/index';
import { InterpreterAmountFormatConfigType } from 'types/serverTransactions.types';

export const defaultAmountFormatConfig: InterpreterAmountFormatConfigType = {
  egldLabel: MAINNET_EGLD_LABEL,
  showLastNonZeroDecimal: false
};

export const {
  explorerAddress: defaultInterpreterExplorerAddress
} = fallbackNetworkConfigurations.mainnet;
