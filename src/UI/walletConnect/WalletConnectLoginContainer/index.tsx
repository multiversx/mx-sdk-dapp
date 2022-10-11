import React, { useEffect, useState, MouseEvent } from 'react';
import classNames from 'classnames';
import QRCode from 'qrcode';

import Lighting from 'assets/icons/lightning.svg';
import { useWalletConnectLogin } from 'hooks/login/useWalletConnectLogin';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { Loader } from 'UI/Loader';
import { ModalContainer } from 'UI/ModalContainer';

import { isMobileEnvironment } from 'utils';
import { WithClassnameType } from '../../types';
import { Pairinglist } from './PairingList';

import globalStyles from 'assets/sass/main.scss';
import styles from './walletConnectLoginContainerStyles.scss';

export interface WalletConnectLoginModalPropsType extends WithClassnameType {
  lead?: string;
  title?: string;
  legacyMessage?: string;
  logoutRoute?: string;
  callbackRoute?: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  isWalletConnectV2?: boolean;
  token?: string;
  onLoginRedirect?: (callbackRoute: string) => void;
  onClose?: () => void;
}

export const WalletConnectLoginContainer = ({
  callbackRoute,
  loginButtonText,
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  className = 'dapp-wallet-connect-login-modal',
  lead = 'Scan the QR code using Maiar',
  legacyMessage = 'Unable to login? Use the legacy version',
  wrapContentInsideModal = true,
  isWalletConnectV2 = false,
  token,
  onClose,
  onLoginRedirect
}: WalletConnectLoginModalPropsType) => {
  const [
    initLoginWithWalletConnect,
    { error },
    { uriDeepLink, walletConnectUri, cancelLogin }
  ] = useWalletConnectLogin({
    logoutRoute,
    callbackRoute,
    token,
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
    onLoginRedirect
  });
  const [qrCodeSvg, setQrCodeSvg] = useState<string>('');
  const [displayWalletConnectV2, setDisplayWalletConnectV2] = useState<boolean>(
    isWalletConnectV2
  );
  const [showLegacySwitch, setShowLegacySwitch] = useState<boolean>(
    isWalletConnectV2
  );
  const isMobileDevice = isMobileEnvironment();
  const activePairings = displayWalletConnectV2
    ? wcPairings?.filter(
        (pairing) => Boolean(pairing.active) && pairing.peerMetadata
      ) ?? []
    : [];

  const generatedClasses = {
    loginText: globalStyles.textLeft,
    container: classNames(globalStyles.mAuto, styles.loginContainer),
    card: classNames(
      globalStyles.card,
      globalStyles.my3,
      globalStyles.textCenter
    ),
    cardBody: classNames(
      globalStyles.cardBody,
      globalStyles.p4,
      globalStyles.mxLg4
    ),
    qrCodeSvgContainer: classNames(
      globalStyles.qrCodeSvgContainer,
      globalStyles.mxAuto,
      globalStyles.mb3
    ),
    title: globalStyles.mb3,
    leadText: classNames(globalStyles.lead, globalStyles.mb0),
    mobileLoginButton: classNames(
      globalStyles.btn,
      globalStyles.btnPrimary,
      globalStyles.dInlineFlex,
      globalStyles.alignItemsCenter,
      globalStyles.px4,
      globalStyles.my4
    ),
    mobileLoginButtonIcon: globalStyles.mr2,
    errorMessage: classNames(
      globalStyles.textDanger,
      globalStyles.dFlex,
      globalStyles.justifyContentCenter,
      globalStyles.alignItemsCenter
    ),
    legacyMessageContainer: classNames(
      globalStyles.linkStyle,
      globalStyles.mt4,
      globalStyles.dFlex,
      globalStyles.justifyContentCenter,
      globalStyles.alignItemsCenter
    )
  };

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
    <div className={generatedClasses.container}>
      <div className={generatedClasses.card}>
        <div className={generatedClasses.cardBody}>
          {qrCodeSvg ? (
            <div
              className={generatedClasses.qrCodeSvgContainer}
              dangerouslySetInnerHTML={{
                __html: qrCodeSvg
              }}
            />
          ) : (
            <Loader />
          )}

          <h4 className={classNames([globalStyles.h4, globalStyles.title])}>
            {title}
          </h4>

          {isMobileDevice ? (
            <>
              <p className={generatedClasses.leadText}>{loginButtonText}</p>

              <a
                id='accessWalletBtn'
                data-testid='accessWalletBtn'
                className={generatedClasses.mobileLoginButton}
                href={uriDeepLink || walletConnectDeepLinkV2}
                rel='noopener noreferrer nofollow'
                target='_blank'
              >
                <Lighting
                  className={generatedClasses.mobileLoginButtonIcon}
                  style={{
                    width: '0.9rem',
                    height: '0.9rem'
                  }}
                />
                {title}
              </a>
            </>
          ) : (
            <p className={generatedClasses.leadText}>{lead}</p>
          )}

          {activePairings.length > 0 && (
            <Pairinglist
              activePairings={activePairings}
              connectExisting={connectExisting}
              removeExistingPairing={removeExistingPairing}
              className={className}
            />
          )}

          {isWalletConnectV2 && showLegacySwitch && (
            <a
              href='/#'
              className={generatedClasses.legacyMessageContainer}
              onClick={onVersionSwitch}
            >
              {legacyMessage}
            </a>
          )}

          <div>
            {error && <p className={generatedClasses.errorMessage}>{error}</p>}

            {walletConnectErrorV2 && (
              <p className={generatedClasses.errorMessage}>
                {walletConnectErrorV2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onCloseModal}
      modalConfig={{
        headerText: 'Login with Maiar',
        showHeader: true,
        modalDialogClassName: className
      }}
      className={className}
    >
      {content}
    </ModalContainer>
  ) : (
    content
  );
};
