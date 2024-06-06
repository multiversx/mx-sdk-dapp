import React from 'react';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { useCrossWindowLogin } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { xAliasAddressSelector } from 'reduxStore/selectors';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { CrossWindowLoginButtonPropsType } from '../CrossWindowLoginButton/CrossWindowLoginButton';

export const XaliasCrossWindowLoginButton: (
  props: CrossWindowLoginButtonPropsType & {
    customWalletAddress?: string;
  }
) => JSX.Element = ({
  token,
  className = 'dapp-cross-window-xalias-login',
  children,
  callbackRoute,
  buttonClassName,
  nativeAuth,
  loginButtonText = 'xAlias',
  onLoginRedirect,
  disabled,
  hasConsentPopup,
  customWalletAddress,
  'data-testid': dataTestId = DataTestIdsEnum.accessCrossWindowWalletBtn
}) => {
  const xAliasAddress = useSelector(xAliasAddressSelector);
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const [onInitiateLogin] = useCrossWindowLogin({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth,
    hasConsentPopup,
    walletAddress: customWalletAddress ?? xAliasAddress
  });

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <LoginButton
      onLogin={handleLogin}
      className={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
      disabled={disabled || disabledConnectButton}
      data-testid={dataTestId}
    >
      {children}
    </LoginButton>
  );
};
