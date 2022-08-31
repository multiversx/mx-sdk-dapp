import {
  fallbackNetworkConfigurations,
  MAINNET_EGLD_LABEL
} from 'constants/index';
import { InterpreterAmountFormatConfigType } from '../transactionsInterpreter.types';

export const defaultAmountFormatConfig: InterpreterAmountFormatConfigType = {
  egldLabel: MAINNET_EGLD_LABEL
};

export const {
  explorerAddress: defaultInterpreterExplorerAddress
} = fallbackNetworkConfigurations.mainnet;
