import React from 'react';

import { useGetAccountInfo, useLedgerLogin } from 'hooks';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LedgerLoginContainerPropsType } from '../LedgerLoginContainer';
import {
  LedgerLoginContentBody,
  LedgerLoginContentBodyProps
} from '../LedgerLoginContentBody';
import { LedgerProgressBar } from '../LedgerProgressBar';
import { LedgerScamPhishingAlert } from '../LedgerScamPhishingAlert';

export const LedgerLoginContent = ({
  callbackRoute,
  customSpinnerComponent,
  customContentComponent,
  innerLedgerComponentsClasses,
  nativeAuth,
  onLoginRedirect,
  showProgressBar = true,
  showScamPhishingAlert = true,
  token
}: Partial<LedgerLoginContainerPropsType>) => {
  const { ledgerAccount } = useGetAccountInfo();
  const [
    onStartLogin,
    { error, isLoading },
    {
      accounts,
      onConfirmSelectedAddress,
      onGoToSpecificPage,
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

  const ledgerLoginContentBodyProps: LedgerLoginContentBodyProps = {
    accounts,
    addressTableClassNames,
    confirmAddressClassNames,
    customContentComponent,
    customSpinnerComponent,
    disabledConnectButton,
    error,
    isLoading,
    ledgerAccount,
    ledgerConnectClassNames,
    ledgerLoadingClassNames,
    onConfirmSelectedAddress,
    onGoToSpecificPage,
    onGoToNextPage,
    onGoToPrevPage,
    onSelectAddress,
    onStartLogin,
    selectedAddress,
    showAddressList,
    startIndex,
    token
  };

  return (
    <>
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
      <LedgerLoginContentBody {...ledgerLoginContentBodyProps} />
    </>
  );
};
