import React, { useState, useEffect } from 'react';
import {
  faCircleNotch,
  faTimes,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from 'types/enums.types';
import { WithClassnameType } from 'UI/types';
import { getProviderType } from 'utils';

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

const timeoutPromise = async (
  promise: Promise<boolean> | undefined,
  time: number,
  exception: symbol
) => {
  let timer: NodeJS.Timeout;
  return Promise.race([
    promise,
    new Promise((_r, rej) => (timer = setTimeout(rej, time, exception)))
  ]).finally(() => clearTimeout(timer));
};

export const WalletConnectConnectionStatus = ({
  description,
  className
}: WalletConnectConnectionStatusType & WithClassnameType) => {
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);

  const [connectionStatus, setConnectionStatus] = useState<
    WalletConnectConnectionStatusEnum
  >(WalletConnectConnectionStatusEnum.pending);
  const [connectionStatusInterval, setConnectionStatusInterval] = useState<
    number
  >(TEN_SECONDS);

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

  const Hint = () => (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.flexColumn,
        globalStyles.alignItemsCenter,

        globalStyles.mt2
      )}
    >
      <small className={globalStyles.textSecondary}>
        Make sure that the phone is unlocked and the app is opened.
      </small>
      <small>
        Hint:{' '}
        <span className={globalStyles.textSecondary}>
          Battery saving mode might have an effect on the connection quality.
        </span>
      </small>
    </div>
  );

  const holderClassName = classNames(
    globalStyles.dFlex,
    globalStyles.flexColumn,
    globalStyles.alignItemsCenter,
    globalStyles.justifyContentCenter,
    globalStyles.my3,
    className
  );
  const textClassName = classNames(
    globalStyles.dFlex,
    globalStyles.alignItemsCenter,
    globalStyles.mr2
  );

  switch (connectionStatus) {
    case WalletConnectConnectionStatusEnum.pending:
      return (
        <div className={holderClassName}>
          <div className={textClassName}>
            <FontAwesomeIcon
              icon={faCircleNotch}
              className={classNames(
                globalStyles.mr2,
                globalStyles.textPrimary,
                'fa-spin',
                'slow-spin'
              )}
            />
            Checking the connection...
          </div>
          {description && (
            <div className={classNames(globalStyles.mt3)}>{description}</div>
          )}
        </div>
      );

    case WalletConnectConnectionStatusEnum.waiting:
      return (
        <div className={holderClassName}>
          <div className={textClassName}>
            <FontAwesomeIcon
              icon={faCircleNotch}
              className={classNames(
                globalStyles.mr2,
                globalStyles.textPrimary,
                'fa-spin',
                'slow-spin'
              )}
            />
            Checking the connection...
          </div>
          <Hint />
        </div>
      );

    case WalletConnectConnectionStatusEnum.success:
      return (
        <div className={holderClassName}>
          <div className={textClassName}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={classNames(globalStyles.mr2, globalStyles.textSuccess)}
            />
            Connected
          </div>
          {description && (
            <div className={classNames(globalStyles.mt3)}>{description}</div>
          )}
        </div>
      );

    default:
    case WalletConnectConnectionStatusEnum.error:
      return (
        <div className={holderClassName}>
          <div className={textClassName}>
            <FontAwesomeIcon
              icon={faTimes}
              className={classNames(globalStyles.mr2, globalStyles.textDanger)}
            />
            Unable to establish a connection with the device.
          </div>
          <Hint />
        </div>
      );
  }
};
