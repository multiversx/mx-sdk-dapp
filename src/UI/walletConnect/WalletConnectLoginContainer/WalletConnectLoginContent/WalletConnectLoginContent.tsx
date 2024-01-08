import React, { useEffect, useState } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import QRCode from 'qrcode';
import Lighting from 'assets/icons/lightning.svg';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { getAuthorizationInfo } from 'services/nativeAuth/helpers';
import { PageState } from 'UI/PageState';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { isMobileEnvironment } from 'utils/environment/isMobileEnvironment';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { Pairinglist } from '../PairingList';
import { WalletConnectLoginModalPropsType } from '../types';

const WalletConnectLoginContentComponent = ({
  callbackRoute,
  className = 'dapp-wallet-connect-login-modal',
  customSpinnerComponent,
  innerWalletConnectComponentsClasses,
  lead = 'Scan the QR code using the xPortal App',
  loginButtonText = 'xPortal App',
  logoutRoute,
  nativeAuth,
  onLoginRedirect,
  showScamPhishingAlert = true,
  title = 'Login with the xPortal App',
  token,
  canLoginRef,
  globalStyles,
  styles,
  customRequestMethods = []
}: WalletConnectLoginModalPropsType & WithStylesImportType) => {
  const [
    initLoginWithWalletConnectV2,
    { error: walletConnectErrorV2 },
    {
      connectExisting,
      removeExistingPairing,
      uriDeepLink: walletConnectDeepLinkV2,
      walletConnectUri: walletConnectUriV2,
      wcPairings
    }
  ] = useWalletConnectV2Login({
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect,
    logoutRoute,
    canLoginRef,
    customRequestMethods
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

  useEffect(() => {
    generateQRCode();
  }, [walletConnectUriV2]);

  useEffect(() => {
    initLoginWithWalletConnectV2();
  }, []);

  const authorizationInfo = showScamPhishingAlert
    ? getAuthorizationInfo(token, containerScamPhishingAlertClassName)
    : undefined;

  return (
    <>
      {showScamPhishingAlert && (
        <ScamPhishingAlert
          url={getWindowLocation().origin}
          authorizationInfo={authorizationInfo}
          className={containerScamPhishingAlertClassName}
        />
      )}

      <div
        className={classNames(
          styles?.xPortalContent,
          containerContentClassName
        )}
      >
        <div
          className={classNames(
            styles?.xPortalContainerHeading,
            containerTitleClassName
          )}
        >
          {title}
        </div>

        <div
          className={classNames(
            styles?.xPortalContainerSubheading,
            containerSubtitleClassName
          )}
        >
          {lead}
        </div>

        <div>
          {walletConnectErrorV2 && (
            <p
              className={classNames(
                styles?.xPortalContainerError,
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
              styles?.xPortalQrCode,
              containerQrCodeClassName
            )}
            dangerouslySetInnerHTML={{
              __html: qrCodeSvg
            }}
          />
        ) : (
          <div
            className={classNames(
              styles?.xPortalLoader,
              containerLoaderClassName
            )}
          >
            {customSpinnerComponent ? (
              customSpinnerComponent
            ) : (
              <PageState
                iconSize='10x'
                icon={faCircleNotch}
                iconClass={classNames('fa-spin', globalStyles?.textPrimary)}
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
              globalStyles?.btn,
              globalStyles?.btnPrimary,
              styles?.xPortalContainerButton,
              containerButtonClassName
            )}
          >
            <Lighting className={styles?.xPortalContainerButtonIcon} />
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
};

export const WalletConnectLoginContent = withStyles(
  WalletConnectLoginContentComponent,
  {
    ssrStyles: () =>
      import(
        'UI/walletConnect/WalletConnectLoginContainer/walletConnectLoginContainerStyles.scss'
      ),
    clientStyles: () =>
      require('UI/walletConnect/WalletConnectLoginContainer/walletConnectLoginContainerStyles.scss')
        .default
  }
);
