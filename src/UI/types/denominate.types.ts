import { WithClassnameType } from './withClassname.types';

export interface DenominateType extends WithClassnameType {
  value: string;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
  decimals?: number;
  denomination?: number;
  egldLabel?: string;
  'data-testid'?: string;
}
