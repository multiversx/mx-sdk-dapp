import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useLedgerLogin } from 'hooks/login/useLedgerLogin';
import {
  getIsNativeAuthSingingForbidden,
  getAuthorizationInfo
} from 'services/nativeAuth/helpers';
import { ModalContainer } from 'UI/ModalContainer';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { WithClassnameType } from '../../types';
import { OnProviderLoginType } from './../../../types';

import { AddressTable } from './AddressTable';
import { ConfirmAddress } from './ConfirmAddress';
import { LedgerConnect } from './LedgerConnect';
import { LedgerLoading } from './LedgerLoading';
import styles from './ledgerLoginContainerStyles.scss';
import { LedgerProgressSteps } from './LedgerProgressSteps';

import type { InnerLedgerComponentsClassesType } from './types';

export interface LedgerLoginContainerPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  wrapContentInsideModal?: boolean;
  onClose?: () => void;
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
}

export const LedgerLoginContainer = ({
  callbackRoute,
  className = 'dapp-ledger-login-container',
  wrapContentInsideModal = true,
  onClose,
  onLoginRedirect,
  token,
  nativeAuth,
  customSpinnerComponent,
  customContentComponent,
  innerLedgerComponentsClasses,
  showProgressBar = true,
  showScamPhishingAlert = true
}: LedgerLoginContainerPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const [
    onStartLogin,
    { error, isLoading },
    {
      showAddressList,
      accounts,
      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress,
      startIndex,
      selectedAddress
    }
  ] = useLedgerLogin({ callbackRoute, token, onLoginRedirect, nativeAuth });

  const {
    addressTableClassNames,
    confirmAddressClassNames,
    ledgerConnectClassNames,
    ledgerLoadingClassNames,
    ledgerProgressStepsClassNames,
    ledgerScamPhishingAlertClassName
  } = innerLedgerComponentsClasses || {};

  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const getScamPhishingAlert = () => {
    if (!showScamPhishingAlert) {
      return null;
    }

    const authorizationInfo = getAuthorizationInfo(token);

    return (
      <ScamPhishingAlert
        url={window?.location.origin}
        authorizationInfo={authorizationInfo}
        className={ledgerScamPhishingAlertClassName}
      />
    );
  };

  const getProgressSteps = () => {
    const progressSteps = [
      {
        count: 1,
        active: !showAddressList && !ledgerAccount
      },
      {
        active: showAddressList && !error && !ledgerAccount,
        count: 2
      },
      {
        active: ledgerAccount != null && !error,
        count: 3
      }
    ];

    const currentProgress = progressSteps.find((step) => step.active);
    const step = currentProgress ? currentProgress.count : 1;

    if (!showProgressBar) {
      return null;
    }

    return (
      <LedgerProgressSteps
        active={step}
        total={progressSteps.length}
        ledgerProgressStepsClassNames={ledgerProgressStepsClassNames}
      />
    );
  };

  const getContent = () => {
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
          token={token}
          customContentComponent={customContentComponent}
          confirmAddressClassNames={confirmAddressClassNames}
        />
      );
    }

    if (showAddressList && !error) {
      return (
        <AddressTable
          accounts={accounts}
          loading={isLoading}
          onGoToNextPage={onGoToNextPage}
          onGoToPrevPage={onGoToPrevPage}
          onSelectAddress={onSelectAddress}
          startIndex={startIndex}
          selectedAddress={selectedAddress?.address}
          onConfirmSelectedAddress={onConfirmSelectedAddress}
          customContentComponent={customContentComponent}
          addressTableClassNames={addressTableClassNames}
        />
      );
    }

    return (
      <LedgerConnect
        error={error}
        disabled={disabledConnectButton}
        onClick={onStartLogin}
        customContentComponent={customContentComponent}
        ledgerConnectClassNames={ledgerConnectClassNames}
      />
    );
  };

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onClose}
      modalConfig={{
        headerText: 'Login with ledger',
        showHeader: true,
        modalContentClassName: styles.ledgerModalDialogContent,
        modalHeaderClassName: styles.ledgerModalHeader,
        modalHeaderTextClassName: styles.ledgerModalHeaderText,
        modalCloseButtonClassName: styles.ledgerModalCloseButton,
        modalBodyClassName: styles.ledgerModalBody,
        modalDialogClassName: classNames(styles.ledgerLoginContainer, className)
      }}
    >
      {getScamPhishingAlert()}
      {getProgressSteps()}
      {getContent()}
    </ModalContainer>
  ) : (
    <>
      {getScamPhishingAlert()}
      {getProgressSteps()}
      {getContent()}
    </>
  );
};
