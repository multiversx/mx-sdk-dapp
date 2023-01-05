import React, { useState, useEffect } from 'react';
import {
  faCircleNotch,
  faTimes,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { getProviderType } from 'providers/utils';
import { LoginMethodsEnum } from 'types/enums.types';
import { WithClassnameType } from 'UI/types';
import { timeoutPromise } from 'utils/asyncActions';
import { WalletConnectConnectionDescription } from './WalletConnectConnectionDescription';
import { WalletConnectConnectionHint } from './WalletConnectConnectionHint';

const TEN_SECONDS = 10000;

export enum WalletConnectConnectionStatusEnum {
  pending = 'pending',
  waiting = 'waiting',
  success = 'success',
  error = 'error'
}

export interface WalletConnectConnectionStatusType {
  description?: string;
}

export const WalletConnectConnectionStatus = ({
  description,
  className
}: WalletConnectConnectionStatusType & WithClassnameType) => {
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);

  const [connectionStatus, setConnectionStatus] =
    useState<WalletConnectConnectionStatusEnum>(
      WalletConnectConnectionStatusEnum.pending
    );
  const [connectionStatusInterval, setConnectionStatusInterval] =
    useState<number>(TEN_SECONDS);

  const isSigningWithWalletConnectV2 =
    providerType === LoginMethodsEnum.walletconnectv2;

  const getConnectionStatus = async () => {
    const timeoutError = Symbol();
    try {
      const pingResponse = await timeoutPromise(
        provider?.ping?.(),
        TEN_SECONDS,
        timeoutError
      );

      if (pingResponse) {
        setConnectionStatus(WalletConnectConnectionStatusEnum.success);
        setConnectionStatusInterval((existing) => existing * 1.5);
      } else {
        setConnectionStatus(WalletConnectConnectionStatusEnum.error);
        setConnectionStatusInterval(TEN_SECONDS);
      }
    } catch (error) {
      if (error === timeoutError) {
        setConnectionStatus(WalletConnectConnectionStatusEnum.waiting);
      } else {
        setConnectionStatus(WalletConnectConnectionStatusEnum.error);
      }
      setConnectionStatusInterval(TEN_SECONDS);
    }
  };

  useEffect(() => {
    getConnectionStatus();

    const interval = setInterval(async () => {
      await getConnectionStatus();
    }, connectionStatusInterval);

    return () => clearInterval(interval);
  }, []);

  if (!isSigningWithWalletConnectV2) {
    return null;
  }

  switch (connectionStatus) {
    case WalletConnectConnectionStatusEnum.pending:
      return (
        <WalletConnectConnectionDescription
          className={className}
          icon={faCircleNotch}
          iconClassName={classNames(
            globalStyles.textPrimary,
            'fa-spin',
            'slow-spin'
          )}
          description='Checking the connection...'
          details={
            <div className={classNames(globalStyles.mt3)}>{description}</div>
          }
        />
      );

    case WalletConnectConnectionStatusEnum.waiting:
      return (
        <WalletConnectConnectionDescription
          className={className}
          icon={faCircleNotch}
          iconClassName={classNames(
            globalStyles.textPrimary,
            'fa-spin',
            'slow-spin'
          )}
          description='Checking the connection...'
          details={<WalletConnectConnectionHint />}
        />
      );

    case WalletConnectConnectionStatusEnum.success:
      return (
        <WalletConnectConnectionDescription
          className={className}
          icon={faCheckCircle}
          iconClassName={classNames(globalStyles.textSuccess)}
          description='Connected'
          details={
            <div className={classNames(globalStyles.mt3)}>{description}</div>
          }
        />
      );

    default:
    case WalletConnectConnectionStatusEnum.error:
      return (
        <WalletConnectConnectionDescription
          className={className}
          icon={faTimes}
          iconClassName={classNames(globalStyles.textDanger)}
          description='Unable to establish a connection with the device.'
          details={<WalletConnectConnectionHint />}
        />
      );
  }
};
