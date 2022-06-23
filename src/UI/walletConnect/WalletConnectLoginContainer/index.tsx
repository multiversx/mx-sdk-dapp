import React, { useEffect, useState } from 'react';
import platform from 'platform';
import QRCode from 'qrcode';
import Lighting from 'assets/icons/lightning.svg';
import globalStyles from 'assets/sass/main.scss';
import { useWalletConnectLogin } from 'hooks/login/useWalletConnectLogin';
import { ModalContainer } from 'UI/ModalContainer';
import { getGeneratedClasses } from 'UI/utils';
import styles from './wallet-connect-login-container.scss';

export interface WalletConnectLoginModalPropsType {
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  shouldRenderDefaultCss?: boolean;
  redirectAfterLogin?: boolean;
  token?: string;
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
  redirectAfterLogin,
  token,
  onClose
}: WalletConnectLoginModalPropsType) => {
  const [
    initLoginWithWalletConnect,
    { error },
    { uriDeepLink, walletConnectUri }
  ] = useWalletConnectLogin({
    logoutRoute,
    callbackRoute,
    token,
    redirectAfterLogin,
    shouldLoginUser: true
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
    redirectAfterLogin,
    shouldLoginUser: true
  });
  const [qrCodeSvg, setQrCodeSvg] = useState<string>('');
  const isMobileDevice =
    platform?.os?.family === 'iOS' || platform?.os?.family === 'Android';
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `${globalStyles.btn} ${globalStyles.btnPrimary} ${globalStyles.px4} ${globalStyles.m1} ${globalStyles.mx3}`,
      loginText: globalStyles.textLeft,
      container: `${globalStyles.mAuto} ${styles.loginContainer}`,
      card: `${globalStyles.card} ${globalStyles.my3} ${globalStyles.textCenter}`,
      cardBody: `${globalStyles.cardBody} ${globalStyles.p4} ${globalStyles.mxLg4}`,
      qrCodeSvgContainer: `${globalStyles.mxAuto} ${globalStyles.mb3}`,
      title: globalStyles.mb3,
      leadText: `${globalStyles.lead} ${globalStyles.mb0}`,
      mobileLoginButton: `${globalStyles.btn} ${globalStyles.btnPrimary} ${globalStyles.dInlineFlex} ${globalStyles.alignItemsCenter} ${globalStyles.px4} ${globalStyles.mt4}`,
      mobileLoginButtonIcon: globalStyles.mr2,
      errorMessage: `${globalStyles.textDanger} ${globalStyles.dFlex} ${globalStyles.justifyContentCenter} ${globalStyles.alignItemsCenter} `
    }
  );

  const generateQRCode = async () => {
    if (isWalletConnectV2) {
      if (!walletConnectUriV2) {
        return;
      }
    } else {
      if (!walletConnectUri) {
        return;
      }
    }

    const svg = await QRCode.toString(
      isWalletConnectV2 ? walletConnectUriV2 : walletConnectUri,
      {
        type: 'svg'
      }
    );

    setQrCodeSvg(svg);
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
            {(walletConnectUriV2 || walletConnectUri) && (
              <span>
                URI:{' '}
                {walletConnectUri && <CopyButton text={walletConnectUri} />}
                {isWalletConnectV2 && walletConnectUriV2 && (
                  <CopyButton text={walletConnectUriV2} />
                )}
              </span>
            )}

            {qrCodeSvg ? (
              <div
                className={generatedClasses.qrCodeSvgContainer}
                dangerouslySetInnerHTML={{
                  __html: qrCodeSvg
                }}
                style={{
                  width: '15rem',
                  height: '15rem'
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
                  href={uriDeepLink || walletConnectDeepLinkV2 || undefined}
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
            {isWalletConnectV2 && wcPairings && wcPairings?.length > 0 && (
              <React.Fragment>
                <p className={generatedClasses.leadText}>
                  or choose an existing pairing:
                </p>
                {wcPairings
                  .filter((pairing) => !!pairing.active)
                  .map((pairing) => (
                    <button
                      type='button'
                      key={pairing.topic}
                      onClick={() => connectExisting(pairing)}
                      className='btn d-flex flex-row  w-100 border align-items-center rounded mb-2'
                    >
                      {pairing.peerMetadata ? (
                        <>
                          <img
                            src={pairing.peerMetadata.icons[0]}
                            alt={pairing.peerMetadata.name}
                            className='img-thumbnail ml-3'
                            style={{ height: '48px' }}
                          />
                          <div className='d-flex flex-column align-items-start ml-3'>
                            <strong>{pairing.peerMetadata.name}</strong>
                            <span>{pairing.peerMetadata.description}</span>
                            <span>{pairing.peerMetadata.url}</span>
                          </div>
                        </>
                      ) : (
                        <div className='text-left' style={{ width: '400px' }}>
                          no metadata: debug pairing details:{' '}
                          <code>{JSON.stringify(pairing)}</code>
                        </div>
                      )}
                    </button>
                  ))}
              </React.Fragment>
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
