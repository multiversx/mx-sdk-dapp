import React, { useEffect, useState } from 'react';
import platform from 'platform';
import QRCode from 'qrcode';
import Lighting from 'assets/icons/lightning.svg';
import globalStyles from 'assets/sass/main.scss';
import { useWalletConnectLogin } from 'hooks/login/useWalletConnectLogin';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { Loader } from 'UI/Loader';
import { ModalContainer } from 'UI/ModalContainer';
import { getGeneratedClasses } from 'UI/utils';
import styles from './wallet-connect-login-container.scss';
import { Pairinglist } from './PairingList';

export interface WalletConnectLoginModalPropsType {
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute?: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  shouldRenderDefaultCss?: boolean;
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
  className = 'wallet-connect-login-modal',
  lead = 'Scan the QR code using Maiar',
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  isWalletConnectV2 = false,
  token,
  onClose,
  onLoginRedirect
}: WalletConnectLoginModalPropsType) => {
  const [
    initLoginWithWalletConnect,
    { error },
    { uriDeepLink, walletConnectUri }
  ] = useWalletConnectLogin({
    logoutRoute,
    callbackRoute,
    token,
    onLoginRedirect
  });
  const [
    initLoginWithWalletConnectV2,
    connectExisting,
    { error: walletConnectErrorV2 },
    {
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
  const isMobileDevice =
    platform?.os?.family === 'iOS' || platform?.os?.family === 'Android';
  const activePairings =
    isWalletConnectV2 && wcPairings && wcPairings?.length > 0
      ? wcPairings.filter((pairing) => !!pairing.active && pairing.peerMetadata)
      : [];

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `${globalStyles.btn} ${globalStyles.btnPrimary} ${globalStyles.px4} ${globalStyles.m1} ${globalStyles.mx3}`,
      loginText: globalStyles.textLeft,
      container: `${globalStyles.mAuto} ${styles.loginContainer}`,
      card: `${globalStyles.card} ${globalStyles.my3} ${globalStyles.textCenter}`,
      cardBody: `${globalStyles.cardBody} ${globalStyles.p4} ${globalStyles.mxLg4}`,
      qrCodeSvgContainer: `${globalStyles.qrCodeSvgContainer} ${globalStyles.mxAuto} ${globalStyles.mb3}`,
      title: globalStyles.mb3,
      leadText: `${globalStyles.lead} ${globalStyles.mb0}`,
      mobileLoginButton: `${globalStyles.btn} ${globalStyles.btnPrimary} ${globalStyles.dInlineFlex} ${globalStyles.alignItemsCenter} ${globalStyles.px4} ${globalStyles.mt4}`,
      mobileLoginButtonIcon: globalStyles.mr2,
      errorMessage: `${globalStyles.textDanger} ${globalStyles.dFlex} ${globalStyles.justifyContentCenter} ${globalStyles.alignItemsCenter}`,
      pairList: ` ${globalStyles.dFlex} ${globalStyles.flexColumn} ${globalStyles.mt3} ${globalStyles.pairList}`,
      pairButton: `${globalStyles.btn} ${globalStyles.btnLight} ${globalStyles.dFlex} ${globalStyles.flexRow} ${globalStyles.alignItemsCenter} ${globalStyles.border} ${globalStyles.rounded} ${globalStyles.mb2}`,
      pairImage: globalStyles.pairImage,
      pairDetails: `${globalStyles.dFlex} ${globalStyles.flexColumn} ${globalStyles.alignItemsStart} ${globalStyles.ml3}`
    }
  );

  const generateQRCode = async () => {
    const canGenerateQRCodeForWC2 = isWalletConnectV2 && walletConnectUriV2;
    const canGenerateQRCodeForWC1 = !isWalletConnectV2 && walletConnectUri;
    const canGenerateQRCode =
      canGenerateQRCodeForWC2 || canGenerateQRCodeForWC1;

    if (!canGenerateQRCode) {
      return;
    }

    const uri = isWalletConnectV2 ? walletConnectUriV2 : walletConnectUri;
    if (uri) {
      const svg = await QRCode.toString(uri, {
        type: 'svg'
      });
      if (svg) {
        setQrCodeSvg(svg);
      }
    }
  };

  useEffect(() => {
    generateQRCode();
  }, [walletConnectUri, walletConnectUriV2]);

  useEffect(() => {
    if (isWalletConnectV2) {
      initLoginWithWalletConnectV2();
    } else {
      initLoginWithWalletConnect();
    }
  }, []);

  const content = (
    <div className={generatedClasses.container}>
      <div className={generatedClasses.root}>
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

            <h4 className={generatedClasses.title}>{title}</h4>
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
            {isWalletConnectV2 &&
              activePairings &&
              activePairings?.length > 0 && (
                <Pairinglist
                  activePairings={activePairings}
                  connectExisting={connectExisting}
                  className={className}
                  shouldRenderDefaultCss={shouldRenderDefaultCss}
                />
              )}
            <div>
              {error && (
                <p className={generatedClasses.errorMessage}>{error}</p>
              )}
              {walletConnectErrorV2 && (
                <p className={generatedClasses.errorMessage}>
                  {walletConnectErrorV2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onClose}
      modalConfig={{
        headerText: 'Login with Maiar',
        showHeader: true,
        modalDialogClassName: className
      }}
    >
      {content}
    </ModalContainer>
  ) : (
    content
  );
};
