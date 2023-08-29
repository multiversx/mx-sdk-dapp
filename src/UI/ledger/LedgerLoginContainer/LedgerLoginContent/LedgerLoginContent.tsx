import React, { Fragment } from 'react';

import { useGetAccountInfo, useLedgerLogin } from 'hooks';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { AddressTable } from '../AddressTable';
import { ConfirmAddress } from '../ConfirmAddress';
import { LedgerConnect } from '../LedgerConnect';
import { LedgerLoading } from '../LedgerLoading';
import { LedgerLoginContainerPropsType } from '../LedgerLoginContainer';
import { LedgerProgressBar } from '../LedgerProgressBar';
import { LedgerScamPhishingAlert } from '../LedgerScamPhishingAlert';

export const LedgerLoginContent = ({
  callbackRoute,
  customSpinnerComponent,
  customContentComponent,
  innerLedgerComponentsClasses,
  nativeAuth,
  onLoginRedirect,
  showProgressBar,
  showScamPhishingAlert,
  token
}: Partial<LedgerLoginContainerPropsType>) => {
  const { ledgerAccount } = useGetAccountInfo();
  const [
    onStartLogin,
    { error, isLoading },
    {
      accounts,
      onConfirmSelectedAddress,
      onGoToNextPage,
      onGoToPrevPage,
      onSelectAddress,
      selectedAddress,
      showAddressList,
      startIndex
    }
  ] = useLedgerLogin({ callbackRoute, token, onLoginRedirect, nativeAuth });

  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const {
    addressTableClassNames,
    confirmAddressClassNames,
    ledgerConnectClassNames,
    ledgerLoadingClassNames,
    ledgerProgressBarClassNames,
    ledgerScamPhishingAlertClassName
  } = innerLedgerComponentsClasses || {};

  const LedgerLoginContentBody = () => {
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

  return (
    <Fragment>
      <LedgerScamPhishingAlert
        ledgerScamPhishingAlertClassName={ledgerScamPhishingAlertClassName}
        showScamPhishingAlert={showScamPhishingAlert}
        token={token}
      />
      <LedgerProgressBar
        error={error}
        ledgerAccount={ledgerAccount}
        ledgerProgressBarClassNames={ledgerProgressBarClassNames}
        showAddressList={showAddressList}
        showProgressBar={showProgressBar}
      />
      <LedgerLoginContentBody />
    </Fragment>
  );
};
