import React, { ReactNode } from 'react';
import { sharedActions } from '@multiversx/sdk-dapp-core/out/store/actions/sharedActions';
import { useStore as useAccountStore } from '@multiversx/sdk-dapp-core/out/store/slices/account';

import { useStore as useNetworkStore } from '@multiversx/sdk-dapp-core/out/store/slices/network/network';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp-core/out/types/enums.types';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { useCrossWindowLogin } from 'hooks';

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
  const { chainID, setChainID } = useNetworkStore();
  const { address, setAddress } = useAccountStore();

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <>
      <table>
        <tr>
          <td>Address: </td>
          <td>{address}</td>
        </tr>
        <tr>
          <td>ChainID: </td>
          <td>{chainID}</td>
        </tr>
      </table>
      <button
        onClick={() => {
          chainID === EnvironmentsEnum.devnet
            ? setChainID(EnvironmentsEnum.mainnet)
            : setChainID(EnvironmentsEnum.devnet);
          setAddress('111');
        }}
      >
        [ Change network ]
      </button>
      <button
        onClick={() => {
          sharedActions.logout();
        }}
      >
        [ LOGOUT ]
      </button>
      <br />
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
