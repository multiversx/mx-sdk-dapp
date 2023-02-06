import type { ReactNode } from 'react';
import type { InnerLedgerComponentsClassNamesType } from '../types';

export interface LedgerLoadingPropsType {
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClassNames?: InnerLedgerComponentsClassNamesType;
}
