import React, { useEffect, useState, MouseEvent, ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import QRCode from 'qrcode';

import { useWalletConnectLogin } from 'hooks/login/useWalletConnectLogin';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { PageState } from 'UI/PageState';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { ModalContainer } from 'UI/ModalContainer';
import { isMobileEnvironment } from 'utils/environment/isMobileEnvironment';
import Lighting from 'assets/icons/lightning.svg';

import type { InnerWalletConnectComponentsClassesType } from '../types';
import type { OnProviderLoginType } from '../../../types';
import type { WithClassnameType } from '../../types';

import { Pairinglist } from './PairingList';

import globalStyles from 'assets/sass/main.scss';
import styles from './walletConnectLoginContainerStyles.scss';

export interface WalletConnectLoginModalPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  lead?: string;
  title?: string;
  legacyMessage?: string;
  logoutRoute?: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  isWalletConnectV2?: boolean;
  onClose?: () => void;
  innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
  customSpinnerComponent?: ReactNode;
  showScamPhishingAlert?: boolean;
}

export const WalletConnectLoginContainer = ({
  callbackRoute,
  loginButtonText = 'xPortal App',
  title = 'Login using xPortal App',
  logoutRoute = '/unlock',
  className = 'dapp-wallet-connect-login-modal',
  lead = 'Scan the QR code using the xPortal App',
  legacyMessage = 'Unable to login? Use the legacy version',
  wrapContentInsideModal = true,
  isWalletConnectV2 = false,
  token,
  nativeAuth,
  onClose,
  onLoginRedirect,
  innerWalletConnectComponentsClasses,
  customSpinnerComponent,
  showScamPhishingAlert = true
}: WalletConnectLoginModalPropsType) => {
  const [
    initLoginWithWalletConnect,
    { error },
    { uriDeepLink, walletConnectUri, cancelLogin }
  ] = useWalletConnectLogin({
    logoutRoute,
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect
  });

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
    logoutRoute,
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect
  });

  const [qrCodeSvg, setQrCodeSvg] = useState<string>('');
  const [displayWalletConnectV2, setDisplayWalletConnectV2] =
    useState<boolean>(isWalletConnectV2);
  const [showLegacySwitch, setShowLegacySwitch] =
    useState<boolean>(isWalletConnectV2);

  const {
    containerContentClassName,
    containerScamPhishingAlertClassName,
    containerTitleClassName,
    containerSubtitleClassName,
    containerErrorClassName,
    containerQrCodeClassName,
    containerLoaderClassName,
    containerLegacyClassName,
    containerButtonClassName,
    walletConnectPairingListClassNames
  } = innerWalletConnectComponentsClasses || {};

  const isMobileDevice = isMobileEnvironment();
  const activePairings = displayWalletConnectV2
    ? wcPairings?.filter((pairing) => {
        const hasLaterEntry = wcPairings.some(
          (pairing2) =>
            pairing.peerMetadata?.name === pairing2?.peerMetadata?.name &&
            pairing.peerMetadata?.url === pairing2?.peerMetadata?.url &&
            pairing.expiry < pairing2.expiry
        );

        return (
          Boolean(pairing.active) && pairing.peerMetadata && !hasLaterEntry
        );
      }) ?? []
    : [];

  const onVersionSwitch = (event: MouseEvent) => {
    event.preventDefault();
    setDisplayWalletConnectV2(false);
    setShowLegacySwitch(false);
  };

  const generateQRCode = async () => {
    const canGenerateQRCodeForWC2 =
      displayWalletConnectV2 && walletConnectUriV2;
    const canGenerateQRCodeForWC1 = !displayWalletConnectV2 && walletConnectUri;
    const canGenerateQRCode =
      canGenerateQRCodeForWC2 || canGenerateQRCodeForWC1;

    if (!canGenerateQRCode) {
      return;
    }

    const uri = displayWalletConnectV2 ? walletConnectUriV2 : walletConnectUri;
    if (uri) {
      const svg = await QRCode.toString(uri, {
        type: 'svg'
      });

      if (svg) {
        setQrCodeSvg(svg);
      }
    }
  };

  const onCloseModal = () => {
    if (displayWalletConnectV2) {
      cancelLoginV2();
    } else {
      cancelLogin();
    }
    onClose?.();
  };

  useEffect(() => {
    generateQRCode();
  }, [displayWalletConnectV2, walletConnectUri, walletConnectUriV2]);

  useEffect(() => {
    if (displayWalletConnectV2) {
      initLoginWithWalletConnectV2();
    } else {
      initLoginWithWalletConnect();
    }
  }, [displayWalletConnectV2]);

  const content = (
    <>
      {showScamPhishingAlert && (
        <ScamPhishingAlert
          url={window.location.origin}
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
          {error && (
            <p
              className={classNames(
                styles.xPortalContainerError,
                containerErrorClassName
              )}
            >
              {error}
            </p>
          )}

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
            data-testid='accessWalletBtn'
            href={uriDeepLink || walletConnectDeepLinkV2}
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

        {isWalletConnectV2 && showLegacySwitch && (
          <a
            href='/#'
            onClick={onVersionSwitch}
            className={classNames(
              styles.xPortalLegacyLink,
              containerLegacyClassName
            )}
          >
            {legacyMessage}
          </a>
        )}
      </div>
    </>
  );

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onCloseModal}
      modalConfig={{
        headerText: 'Login using xPortal App',
        showHeader: true,
        modalContentClassName: styles.xPortalModalDialogContent,
        modalHeaderClassName: styles.xPortalModalHeader,
        modalHeaderTextClassName: styles.xPortalModalHeaderText,
        modalCloseButtonClassName: styles.xPortalModalCloseButton,
        modalBodyClassName: styles.xPortalModalBody,
        modalDialogClassName: styles.xPortalLoginContainer
      }}
      className={className}
    >
      {content}
    </ModalContainer>
  ) : (
    content
  );
};
