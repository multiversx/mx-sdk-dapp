import type { ReactNode } from 'react';
import type { innerLedgerComponentsClassNameType } from '../types';

export interface LedgerLoadingPropsType {
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  ledgerLoadingComponentsClassName?: innerLedgerComponentsClassNameType;
}
