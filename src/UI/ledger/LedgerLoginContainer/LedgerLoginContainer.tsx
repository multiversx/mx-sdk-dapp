import React, { Fragment, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useLedgerLogin } from 'hooks/login/useLedgerLogin';
import {
  getIsNativeAuthSingingForbidden,
  getAuthorizationInfo
} from 'services/nativeAuth/helpers';
import { ModalContainer } from 'UI/ModalContainer';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

import { AddressTable } from './AddressTable';
import { ConfirmAddress } from './ConfirmAddress';
import { LedgerConnect } from './LedgerConnect';
import { LedgerLoading } from './LedgerLoading';
import styles from './ledgerLoginContainerStyles.scss';
import { LedgerProgressBar } from './LedgerProgressBar';

import { InnerLedgerComponentsClassesType } from './types';

export interface LedgerLoginContainerPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  onClose?: () => void;
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
  showLoginContent: boolean;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
}

export const LedgerLoginContainer = ({
  callbackRoute,
  className = 'dapp-ledger-login-container',
  onClose,
  onLoginRedirect,
  token,
  nativeAuth,
  customSpinnerComponent,
  customContentComponent,
  innerLedgerComponentsClasses,
  showLoginContent,
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
    ledgerProgressBarClassNames,
    ledgerScamPhishingAlertClassName
  } = innerLedgerComponentsClasses || {};

  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const ScamPhishingAlertComponent = () => {
    if (!showScamPhishingAlert) {
      return null;
    }

    const authorizationInfo = getAuthorizationInfo(
      token,
      ledgerScamPhishingAlertClassName
    );

    return (
      <ScamPhishingAlert
        url={getWindowLocation().origin}
        authorizationInfo={authorizationInfo}
        className={ledgerScamPhishingAlertClassName}
      />
    );
  };

  const ProgressBar = () => {
    const progressStep = [
      {
        percentage: 33,
        conditions: !showAddressList && !ledgerAccount
      },
      {
        conditions: showAddressList && !error && !ledgerAccount,
        percentage: 66
      },
      {
        conditions: ledgerAccount != null && !error,
        percentage: 100
      }
    ];

    const currentProgress = useMemo(
      () => progressStep.find((step) => step.conditions),
      []
    );

    const percentage = currentProgress ? currentProgress.percentage : 33;

    if (!showProgressBar) {
      return null;
    }

    return (
      <LedgerProgressBar
        percentage={percentage}
        ledgerProgressBarClassNames={ledgerProgressBarClassNames}
      />
    );
  };

  const Content = () => {
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

  const LedgerLoginContent = () => (
    <>
      <ScamPhishingAlertComponent />
      <ProgressBar />
      <Content />
    </>
  );

  return (
    <Fragment>
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
          modalDialogClassName: classNames(
            styles.ledgerLoginContainer,
            className
          )
        }}
      >
        <LedgerLoginContent />
      </ModalContainer>

      {showLoginContent && <LedgerLoginContent />}
    </Fragment>
  );
};
