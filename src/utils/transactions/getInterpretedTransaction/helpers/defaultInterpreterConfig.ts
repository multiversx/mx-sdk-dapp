import {
  fallbackNetworkConfigurations,
  MAINNET_EGLD_LABEL
} from 'constants/index';
import { FormatAmountPropsType } from 'UI/FormatAmount/formatAmount.types';

export type TransactionAmountFormatConfigType = Omit<
  FormatAmountPropsType,
  'value'
>;

export const defaultAmountFormatConfig: TransactionAmountFormatConfigType = {
  egldLabel: MAINNET_EGLD_LABEL,
  showLastNonZeroDecimal: false
};

export const {
  explorerAddress: defaultInterpreterExplorerAddress
} = fallbackNetworkConfigurations.mainnet;
