import React, { ReactNode } from 'react';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp-core/dist/types/enums.types';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { useCrossWindowLogin } from 'hooks';
import { useStore } from 'hooks/login/helpers/useStore';
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
  const { chainID, setChainID } = useStore();

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <>
      <button
        onClick={() => {
          chainID === EnvironmentsEnum.devnet
            ? setChainID(EnvironmentsEnum.mainnet)
            : setChainID(EnvironmentsEnum.devnet);
        }}
        className={buttonClassName}
      >
        Change network
      </button>
      <br />
      <h2>{chainID}</h2>
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
