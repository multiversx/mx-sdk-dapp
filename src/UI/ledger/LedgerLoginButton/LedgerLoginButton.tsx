import React, { ReactNode } from 'react';

import { DataTestIdsEnum } from 'constants/index';
import { useGetModalLoginMethods } from 'hooks';
import { LoginButton } from 'UI/LoginButton/LoginButton';

import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { LedgerLoginContainer } from '../LedgerLoginContainer';
import { InnerLedgerComponentsClassesType } from '../LedgerLoginContainer/types';

export interface LedgerLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  buttonClassName?: string;
  children?: ReactNode;
  customSpinnerComponent?: ReactNode;
  disabled?: boolean;
  hideButtonWhenModalOpens?: boolean;
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
  loginButtonText?: string;
  modalClassName?: string;
  onModalCloses?: (props?: any) => void;
  onModalOpens?: (props?: any) => void;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
  wrapContentInsideModal?: boolean;
}

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  buttonClassName = 'dapp-ledger-login-button',
  callbackRoute,
  children,
  className = 'dapp-ledger-login',
  customSpinnerComponent,
  'data-testid': dataTestId = DataTestIdsEnum.ledgerLoginButton,
  disabled,
  hideButtonWhenModalOpens = false,
  innerLedgerComponentsClasses,
  loginButtonText = 'Ledger',
  modalClassName,
  nativeAuth,
  onLoginRedirect,
  onModalCloses,
  onModalOpens,
  showProgressBar = true,
  showScamPhishingAlert = true,
  token,
  wrapContentInsideModal = true
}) => {
  const {
    disabledConnectButton,
    handleCloseModal,
    handleOpenModal,
    shouldRenderButton,
    showContent
  } = useGetModalLoginMethods({
    hideButtonWhenModalOpens,
    onModalCloses,
    onModalOpens,
    token,
    wrapContentInsideModal
  });

  return (
    <>
      {shouldRenderButton && (
        <LoginButton
          btnClassName={buttonClassName}
          className={className}
          data-testid={dataTestId}
          disabled={disabled || disabledConnectButton}
          onLogin={handleOpenModal}
          text={loginButtonText}
        >
          {children}
        </LoginButton>
      )}

      <LedgerLoginContainer
        callbackRoute={callbackRoute}
        className={modalClassName}
        customSpinnerComponent={customSpinnerComponent}
        innerLedgerComponentsClasses={innerLedgerComponentsClasses}
        nativeAuth={nativeAuth}
        onClose={handleCloseModal}
        onLoginRedirect={onLoginRedirect}
        showLoginContent={showContent}
        showProgressBar={showProgressBar}
        showScamPhishingAlert={showScamPhishingAlert}
        token={token}
      />
    </>
  );
};
