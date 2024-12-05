import React, { ReactNode } from 'react';
import { SelectedAddress } from 'hooks/login/useLedgerLogin';
import { LedgerAccountType } from 'reduxStore/slices';
import { AddressTable, AddressTablePropsType } from '../AddressTable';
import { ConfirmAddress, ConfirmAddressPropsType } from '../ConfirmAddress';
import { LedgerConnect, LedgerConnectPropsType } from '../LedgerConnect';
import { LedgerLoading, LedgerLoadingPropsType } from '../LedgerLoading';

export interface LedgerLoginContentBodyProps {
  accounts: string[];
  addressTableClassNames?: AddressTablePropsType['addressTableClassNames'];
  confirmAddressClassNames?: ConfirmAddressPropsType['confirmAddressClassNames'];
  customContentComponent: ReactNode;
  customSpinnerComponent: ReactNode;
  disabledConnectButton?: boolean;
  error: string;
  isLoading: boolean;
  ledgerAccount: LedgerAccountType | null; // Please define the appropriate type
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

export const LedgerLoginContentBody = ({
  isLoading,
  customSpinnerComponent,
  customContentComponent,
  ledgerLoadingClassNames,
  ledgerAccount,
  error,
  confirmAddressClassNames,
  token,
  showAddressList,
  accounts,
  addressTableClassNames,
  onConfirmSelectedAddress,
  onGoToSpecificPage,
  onGoToNextPage,
  onGoToPrevPage,
  onSelectAddress,
  selectedAddress,
  startIndex,
  disabledConnectButton,
  ledgerConnectClassNames,
  onStartLogin
}: LedgerLoginContentBodyProps) => {
  if (isLoading) {
    return (
      <LedgerLoading
        customSpinnerComponent={customSpinnerComponent}
        customContentComponent={customContentComponent}
        ledgerLoadingClassNames={ledgerLoadingClassNames}
      />
    );
  }

  if (ledgerAccount != null && !error) {
    return (
      <ConfirmAddress
        confirmAddressClassNames={confirmAddressClassNames}
        customContentComponent={customContentComponent}
        token={token}
      />
    );
  }

  if (showAddressList && !error) {
    return (
      <AddressTable
        accounts={accounts}
        addressTableClassNames={addressTableClassNames}
        customContentComponent={customContentComponent}
        loading={isLoading}
        onConfirmSelectedAddress={onConfirmSelectedAddress}
        onGoToSpecificPage={onGoToSpecificPage}
        onGoToNextPage={onGoToNextPage}
        onGoToPrevPage={onGoToPrevPage}
        onSelectAddress={onSelectAddress}
        selectedAddress={selectedAddress?.address}
        startIndex={startIndex}
      />
    );
  }

  return (
    <LedgerConnect
      customContentComponent={customContentComponent}
      disabled={disabledConnectButton}
      error={error}
      ledgerConnectClassNames={ledgerConnectClassNames}
      onClick={onStartLogin}
    />
  );
};
