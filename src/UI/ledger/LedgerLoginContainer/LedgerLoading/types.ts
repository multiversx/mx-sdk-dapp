import type { ReactNode } from 'react';
import type { InnerLedgerComponentsClassesType } from '../types';

export interface LedgerLoadingPropsType {
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  ledgerLoadingComponentsClasses?: InnerLedgerComponentsClassesType;
}
