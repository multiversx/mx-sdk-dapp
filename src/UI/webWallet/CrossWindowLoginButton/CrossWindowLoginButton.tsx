import React, { ReactNode } from 'react';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp-core/dist/types/enums.types';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { useCrossWindowLogin } from 'hooks';
import { useSessionNetworkStore } from 'hooks/login/helpers/useGetNetwork';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface CrossWindowLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
  hasConsentPopup?: boolean;
}

export const CrossWindowLoginButton: (
  props: CrossWindowLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'dapp-window-wallet-login',
  children,
  callbackRoute,
  buttonClassName,
  nativeAuth,
  loginButtonText = 'Window Wallet',
  onLoginRedirect,
  disabled,
  hasConsentPopup,
  'data-testid': dataTestId = DataTestIdsEnum.accessCrossWindowWalletBtn
}) => {
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const [onInitiateLogin] = useCrossWindowLogin({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth,
    hasConsentPopup
  });
  const { environment, setEnvironment } = useSessionNetworkStore();

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <>
      <button
        onClick={() => {
          environment === EnvironmentsEnum.testnet
            ? setEnvironment(EnvironmentsEnum.mainnet)
            : setEnvironment(EnvironmentsEnum.testnet);
        }}
        className={buttonClassName}
      >
        Change network
      </button>
      <br />
      <h2>{environment}</h2>
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
    </>
  );
};
