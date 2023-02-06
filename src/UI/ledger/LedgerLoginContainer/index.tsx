import React, { ReactNode } from 'react';

import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useLedgerLogin } from 'hooks/login/useLedgerLogin';
import { ModalContainer } from 'UI/ModalContainer';

import type { OnProviderLoginType } from '../../../types';
import type { WithClassnameType } from '../../types';
import type { InnerLedgerComponentsClassesType } from './types';

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
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
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
  innerLedgerComponentsClasses
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
    ledgerModalTitleClassName,
    ledgerModalSubtitleClassName,
    ledgerModalConfirmDescriptionClassName,
    ledgerModalConfirmDataClassName,
    ledgerModalConfirmFooterClassName,
    ledgerModalErrorClassName,
    ledgerModalIconClassName,
    ledgerModalButtonClassName,
    ledgerModalFooterLinkClassName,
    ledgerModalTableHeadClassName,
    ledgerModalTableItemClassName,
    ledgerModalTableNavigationButtonClassName,
    ledgerModalTableNavigationButtonDisabledClassName,
    ledgerModalTableSelectedItemClassName
  } = innerLedgerComponentsClasses || {};

  const getContent = () => {
    if (isLoading) {
      return (
        <LedgerLoading
          customSpinnerComponent={customSpinnerComponent}
          customContentComponent={customContentComponent}
          ledgerModalTitleClassName={ledgerModalTitleClassName}
          ledgerModalSubtitleClassName={ledgerModalSubtitleClassName}
        />
      );
    }

    if (ledgerAccount != null && !error) {
      return (
        <ConfirmAddress
          token={token}
          customContentComponent={customContentComponent}
          ledgerModalConfirmDataClassName={ledgerModalConfirmDataClassName}
          ledgerModalConfirmFooterClassName={ledgerModalConfirmFooterClassName}
          ledgerModalConfirmDescriptionClassName={
            ledgerModalConfirmDescriptionClassName
          }
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
          ledgerModalTitleClassName={ledgerModalTitleClassName}
          ledgerModalSubtitleClassName={ledgerModalSubtitleClassName}
          ledgerModalTableHeadClassName={ledgerModalTableHeadClassName}
          ledgerModalTableItemClassName={ledgerModalTableItemClassName}
          ledgerModalButtonClassName={ledgerModalButtonClassName}
          ledgerModalTableNavigationButtonClassName={
            ledgerModalTableNavigationButtonClassName
          }
          ledgerModalTableSelectedItemClassName={
            ledgerModalTableSelectedItemClassName
          }
          ledgerModalTableNavigationButtonDisabledClassName={
            ledgerModalTableNavigationButtonDisabledClassName
          }
        />
      );
    }

    return (
      <LedgerConnect
        error={error}
        onClick={onStartLogin}
        customContentComponent={customContentComponent}
        ledgerModalTitleClassName={ledgerModalTitleClassName}
        ledgerModalSubtitleClassName={ledgerModalSubtitleClassName}
        ledgerModalErrorClassName={ledgerModalErrorClassName}
        ledgerModalIconClassName={ledgerModalIconClassName}
        ledgerModalButtonClassName={ledgerModalButtonClassName}
        ledgerModalFooterLinkClassName={ledgerModalFooterLinkClassName}
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
