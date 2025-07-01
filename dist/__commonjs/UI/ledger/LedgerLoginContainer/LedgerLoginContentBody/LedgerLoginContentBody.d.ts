import { ReactNode } from 'react';
import { SelectedAddress } from 'hooks/login/useLedgerLogin';
import { LedgerAccountType } from 'reduxStore/slices';
import { AddressTablePropsType } from '../AddressTable';
import { ConfirmAddressPropsType } from '../ConfirmAddress';
import { LedgerConnectPropsType } from '../LedgerConnect';
import { LedgerLoadingPropsType } from '../LedgerLoading';
export interface LedgerLoginContentBodyProps {
    accounts: string[];
    addressTableClassNames?: AddressTablePropsType['addressTableClassNames'];
    confirmAddressClassNames?: ConfirmAddressPropsType['confirmAddressClassNames'];
    customContentComponent: ReactNode;
    customSpinnerComponent: ReactNode;
    disabledConnectButton?: boolean;
    error: string;
    isLoading: boolean;
    ledgerAccount: LedgerAccountType | null;
    ledgerConnectClassNames?: LedgerConnectPropsType['ledgerConnectClassNames'];
    ledgerLoadingClassNames?: LedgerLoadingPropsType['ledgerLoadingClassNames'];
    onConfirmSelectedAddress: () => void;
    onGoToSpecificPage: (page: number) => void;
    onGoToNextPage: () => void;
    onGoToPrevPage: () => void;
    onSelectAddress: (address: SelectedAddress | null) => void;
    onStartLogin: () => void;
    selectedAddress: SelectedAddress | null;
    showAddressList: boolean;
    startIndex: number;
    token?: string;
}
export declare const LedgerLoginContentBody: ({ isLoading, customSpinnerComponent, customContentComponent, ledgerLoadingClassNames, ledgerAccount, error, confirmAddressClassNames, token, showAddressList, accounts, addressTableClassNames, onConfirmSelectedAddress, onGoToSpecificPage, onGoToNextPage, onGoToPrevPage, onSelectAddress, selectedAddress, startIndex, disabledConnectButton, ledgerConnectClassNames, onStartLogin }: LedgerLoginContentBodyProps) => JSX.Element;
//# sourceMappingURL=LedgerLoginContentBody.d.ts.map