import { AddressTablePropsType } from './AddressTable';
import { ConfirmAddressPropsType } from './ConfirmAddress';
import { LedgerConnectPropsType } from './LedgerConnect';
import { LedgerLoadingPropsType } from './LedgerLoading';
import { LedgerProgressBarPropsType } from './LedgerProgressBar';
export interface InnerLedgerComponentsClassesType {
    confirmAddressClassNames?: ConfirmAddressPropsType['confirmAddressClassNames'];
    addressTableClassNames?: AddressTablePropsType['addressTableClassNames'];
    ledgerLoadingClassNames?: LedgerLoadingPropsType['ledgerLoadingClassNames'];
    ledgerConnectClassNames?: LedgerConnectPropsType['ledgerConnectClassNames'];
    ledgerProgressBarClassNames?: LedgerProgressBarPropsType['ledgerProgressBarClassNames'];
    ledgerScamPhishingAlertClassName?: string;
}
//# sourceMappingURL=types.d.ts.map