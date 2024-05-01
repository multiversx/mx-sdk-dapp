import React from 'react';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { useXaliasLogin } from 'hooks/login/useXaliasLogin';
import { useNetworkStore } from 'lib/sdkDappCore';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from '../../LoginButton/LoginButton';
import { WebWalletLoginButtonPropsType } from '../WebWalletLoginButton';

export const XaliasLoginButton: (
  props: WebWalletLoginButtonPropsType
) => JSX.Element = ({
  children,
  token,
  className = 'dapp-xalias-login',
  callbackRoute,
  buttonClassName,
  nativeAuth,
  'data-testid': dataTestId = DataTestIdsEnum.xAliasLoginButton,
  loginButtonText = 'xAlias',
  disabled,
  customWalletAddress: customXaliasAddress
}) => {
  const xAliasAddress = useNetworkStore().network.xAliasAddress;

  // if network has no configured xAlias address, disable the button
  const xAliasUrl = customXaliasAddress ?? xAliasAddress;

  const [onInitiateLogin] = useXaliasLogin({
    callbackRoute,
    nativeAuth,
    token,
    customWalletAddress: xAliasUrl
  });

  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <LoginButton
      onLogin={handleLogin}
      className={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
      data-testid={dataTestId}
      disabled={disabled || disabledConnectButton || !xAliasUrl}
    >
      {children}
    </LoginButton>
  );
};
