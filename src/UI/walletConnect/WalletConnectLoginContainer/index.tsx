import React, { useEffect, useState, ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import QRCode from 'qrcode';

import Lighting from 'assets/icons/lightning.svg';
import globalStyles from 'assets/sass/main.scss';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { getAuthorizationInfo } from 'services/nativeAuth/helpers';
import { ModalContainer } from 'UI/ModalContainer';
import { PageState } from 'UI/PageState';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { isMobileEnvironment } from 'utils/environment/isMobileEnvironment';

import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';
import { OnProviderLoginType } from './../../../types';

import { Pairinglist } from './PairingList';

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
  title = 'Login with the xPortal App',
  logoutRoute = '/unlock',
  className = 'dapp-wallet-connect-login-modal',
  lead = 'Scan the QR code using the xPortal App',
  wrapContentInsideModal = true,
  token,
  nativeAuth,
  onClose,
  onLoginRedirect,
  innerWalletConnectComponentsClasses,
  customSpinnerComponent,
  showScamPhishingAlert = true
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
    logoutRoute,
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect
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
    ? getAuthorizationInfo(token)
    : undefined;

  const content = (
    <>
      {showScamPhishingAlert && (
        <ScamPhishingAlert
          url={window?.location.origin}
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
            data-testid='accessWalletBtn'
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

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onCloseModal}
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
      className={className}
    >
      {content}
    </ModalContainer>
  ) : (
    content
  );
};
