import type { AddressTablePropsType } from './AddressTable';
import type { ConfirmAddressPropsType } from './ConfirmAddress';
import type { LedgerConnectPropsType } from './LedgerConnect';
import type { LedgerLoadingPropsType } from './LedgerLoading';
import type { LedgerProgressStepsPropsType } from './LedgerProgressSteps';

export interface InnerLedgerComponentsClassesType {
  confirmAddressClassNames?: ConfirmAddressPropsType['confirmAddressClassNames'];
  addressTableClassNames?: AddressTablePropsType['addressTableClassNames'];
  ledgerLoadingClassNames?: LedgerLoadingPropsType['ledgerLoadingClassNames'];
  ledgerConnectClassNames?: LedgerConnectPropsType['ledgerConnectClassNames'];
  ledgerProgressStepsClassNames?: LedgerProgressStepsPropsType['ledgerProgressStepsClassNames'];
  ledgerScamPhishingAlertClassName?: string;
}
