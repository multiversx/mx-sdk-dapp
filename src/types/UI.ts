export type WithClassname = {
  className?: string;
};

export interface DenominateType extends WithClassname {
  value: string;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
  decimals?: number;
  denomination?: number;
  egldLabel?: string;
  'data-testid'?: string;
}
