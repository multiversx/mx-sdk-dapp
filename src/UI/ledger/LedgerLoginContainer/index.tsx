import React, { ReactNode } from 'react';

import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useLedgerLogin } from 'hooks/login/useLedgerLogin';
import { ModalContainer } from 'UI/ModalContainer';

import type { OnProviderLoginType } from '../../../types';
import type { WithClassnameType } from '../../types';
import type { innerLedgerComponentsClassNameType } from './types';

import { AddressTable } from './AddressTable';
import { ConfirmAddress } from './ConfirmAddress';
import { LedgerLoading } from './LedgerLoading';
import { LedgerConnect } from './LedgerConnect';

import styles from './ledgerLoginContainerStyles.scss';
import classNames from 'classnames';

export interface LedgerLoginContainerPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  wrapContentInsideModal?: boolean;
  onClose?: () => void;
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClassName?: innerLedgerComponentsClassNameType;
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
  innerLedgerComponentsClassName
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

  const getContent = () => {
    if (isLoading) {
      return (
        <LedgerLoading
          customSpinnerComponent={customSpinnerComponent}
          ledgerLoadingComponentsClassName={innerLedgerComponentsClassName}
          customContentComponent={customContentComponent}
        />
      );
    }

    if (ledgerAccount != null && !error) {
      return (
        <ConfirmAddress
          token={token}
          confirmAddressComponentsClassName={innerLedgerComponentsClassName}
          customContentComponent={customContentComponent}
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
          addressTableComponentsClassName={innerLedgerComponentsClassName}
          customContentComponent={customContentComponent}
        />
      );
    }

    return (
      <LedgerConnect
        error={error}
        onClick={onStartLogin}
        ledgerConnectComponentsClassName={innerLedgerComponentsClassName}
        customContentComponent={customContentComponent}
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
      {getContent()}
    </ModalContainer>
  ) : (
    getContent()
  );
};
