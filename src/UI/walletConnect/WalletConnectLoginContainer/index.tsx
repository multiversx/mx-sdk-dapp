import React, { useEffect, useState, ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import QRCode from 'qrcode';

import Lighting from 'assets/icons/lightning.svg';
import globalStyles from 'assets/sass/main.scss';
import { DataTestIdsEnum } from 'constants/index';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { getAuthorizationInfo } from 'services/nativeAuth/helpers';
import { ModalContainer } from 'UI/ModalContainer';
import { PageState } from 'UI/PageState';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { isMobileEnvironment } from 'utils/environment/isMobileEnvironment';
import { getWindowLocation } from 'utils/window/getWindowLocation';

import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';
import { OnProviderLoginType } from './../../../types';

import { Pairinglist } from './PairingList';

import styles from './walletConnectLoginContainerStyles.scss';

export interface WalletConnectLoginModalPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  customSpinnerComponent?: ReactNode;
  innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
  isWalletConnectV2?: boolean;
  lead?: string;
  legacyMessage?: string;
  loginButtonText: string;
  logoutRoute?: string;
  onClose?: () => void;
  showLoginContent?: boolean;
  showScamPhishingAlert?: boolean;
  title?: string;
  wrapContentInsideModal?: boolean;
}

export const WalletConnectLoginContainer = ({
  callbackRoute,
  className = 'dapp-wallet-connect-login-modal',
  customSpinnerComponent,
  innerWalletConnectComponentsClasses,
  lead = 'Scan the QR code using the xPortal App',
  loginButtonText = 'xPortal App',
  logoutRoute,
  nativeAuth,
  onClose,
  onLoginRedirect,
  showLoginContent,
  showScamPhishingAlert = true,
  title = 'Login with the xPortal App',
  token,
  wrapContentInsideModal
}: WalletConnectLoginModalPropsType) => {
  const [
    initLoginWithWalletConnectV2,
    { error: walletConnectErrorV2 },
    {
      connectExisting,
      removeExistingPairing,
      cancelLogin: cancelLoginV2,
      uriDeepLink: walletConnectDeepLinkV2,
      walletConnectUri: walletConnectUriV2,
      wcPairings
    }
  ] = useWalletConnectV2Login({
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect,
    logoutRoute
  });

  const [qrCodeSvg, setQrCodeSvg] = useState<string>('');

  const {
    containerContentClassName,
    containerScamPhishingAlertClassName,
    containerTitleClassName,
    containerSubtitleClassName,
    containerErrorClassName,
    containerQrCodeClassName,
    containerLoaderClassName,
    containerButtonClassName,
    walletConnectPairingListClassNames
  } = innerWalletConnectComponentsClasses || {};

  const isMobileDevice = isMobileEnvironment();
  const activePairings =
    wcPairings?.filter((pairing) => {
      const hasLaterEntry = wcPairings.some(
        (pairing2) =>
          pairing.peerMetadata?.name === pairing2?.peerMetadata?.name &&
          pairing.peerMetadata?.url === pairing2?.peerMetadata?.url &&
          pairing.expiry < pairing2.expiry
      );

      return Boolean(pairing.active) && pairing.peerMetadata && !hasLaterEntry;
    }) ?? [];

  const generateQRCode = async () => {
    if (!walletConnectUriV2) {
      return;
    }

    const svg = await QRCode.toString(walletConnectUriV2, {
      type: 'svg'
    });

    if (svg) {
      setQrCodeSvg(svg);
    }
  };

  const onCloseModal = () => {
    cancelLoginV2();
    onClose?.();
  };

  useEffect(() => {
    generateQRCode();
  }, [walletConnectUriV2]);

  useEffect(() => {
    initLoginWithWalletConnectV2();
  }, []);

  const authorizationInfo = showScamPhishingAlert
    ? getAuthorizationInfo(token, containerScamPhishingAlertClassName)
    : undefined;

  const content = (
    <>
      {showScamPhishingAlert && (
        <ScamPhishingAlert
          url={getWindowLocation().origin}
          authorizationInfo={authorizationInfo}
          className={containerScamPhishingAlertClassName}
        />
      )}

      <div
        className={classNames(styles.xPortalContent, containerContentClassName)}
      >
        <div
          className={classNames(
            styles.xPortalContainerHeading,
            containerTitleClassName
          )}
        >
          {title}
        </div>

        <div
          className={classNames(
            styles.xPortalContainerSubheading,
            containerSubtitleClassName
          )}
        >
          {lead}
        </div>

        <div>
          {walletConnectErrorV2 && (
            <p
              className={classNames(
                styles.xPortalContainerError,
                containerErrorClassName
              )}
            >
              {walletConnectErrorV2}
            </p>
          )}
        </div>

        {qrCodeSvg ? (
          <div
            className={classNames(
              styles.xPortalQrCode,
              containerQrCodeClassName
            )}
            dangerouslySetInnerHTML={{
              __html: qrCodeSvg
            }}
          />
        ) : (
          <div
            className={classNames(
              styles.xPortalLoader,
              containerLoaderClassName
            )}
          >
            {customSpinnerComponent ? (
              customSpinnerComponent
            ) : (
              <PageState
                iconSize='10x'
                icon={faCircleNotch}
                iconClass={classNames('fa-spin', globalStyles.textPrimary)}
              />
            )}
          </div>
        )}

        {isMobileDevice && (
          <a
            id='accessWalletBtn'
            data-testid={DataTestIdsEnum.accessWalletBtn}
            href={walletConnectDeepLinkV2}
            rel='noopener noreferrer nofollow'
            target='_blank'
            className={classNames(
              globalStyles.btn,
              globalStyles.btnPrimary,
              styles.xPortalContainerButton,
              containerButtonClassName
            )}
          >
            <Lighting className={styles.xPortalContainerButtonIcon} />
            {loginButtonText}
          </a>
        )}

        {activePairings.length > 0 && (
          <Pairinglist
            activePairings={activePairings}
            connectExisting={connectExisting}
            removeExistingPairing={removeExistingPairing}
            className={className}
            pairingListClasses={walletConnectPairingListClassNames}
          />
        )}
      </div>
    </>
  );

  if (showLoginContent === false) {
    return null;
  }

  if (!wrapContentInsideModal) {
    return <>{content}</>;
  }

  return (
    <ModalContainer
      className={className}
      modalConfig={{
        headerText: 'Login using the xPortal App',
        showHeader: true,
        modalContentClassName: styles.xPortalModalDialogContent,
        modalHeaderClassName: styles.xPortalModalHeader,
        modalHeaderTextClassName: styles.xPortalModalHeaderText,
        modalCloseButtonClassName: styles.xPortalModalCloseButton,
        modalBodyClassName: styles.xPortalModalBody,
        modalDialogClassName: styles.xPortalLoginContainer
      }}
      onClose={onCloseModal}
    >
      {content}
    </ModalContainer>
  );
};
