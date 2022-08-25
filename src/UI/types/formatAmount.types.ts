import { WithClassnameType } from './withClassname.types';

export interface DenominateType extends WithClassnameType {
  value: string;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
  digits?: number;
  decimals?: number;
  egldLabel?: string;
  'data-testid'?: string;
}
