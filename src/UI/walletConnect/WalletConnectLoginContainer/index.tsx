import React, { useEffect, useState } from 'react';

import platform from 'optionalPackages/platform';
import QRCode from 'optionalPackages/qrcode';
import { useWalletConnectLogin, useWalletConnectV2Login } from 'services';
import CopyButton from 'UI/CopyButton';
import Loader from 'UI/Loader';
import ModalContainer from 'UI/ModalContainer';
import { getGeneratedClasses } from 'utils';
import { ReactComponent as Lighting } from '../WalletConnectLoginButton/lightning.svg';
import { LoginModalPropsType } from './types';

function WalletConnectLoginContainer({
  callbackRoute,
  loginButtonText,
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  className = 'wallect-connect-login-modal',
  lead = 'Scan the QR code using Maiar',
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin,
  token,
  onClose,
  isWalletConnectV2 = false
}: LoginModalPropsType) {
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
      wrapper: 'btn btn-primary px-sm-4 m-1 mx-sm-3',
      loginText: 'text-left',
      container: 'm-auto login-container',
      card: 'card my-3 text-center',
      cardBody: 'card-body p-4 mx-lg-4',
      qrCodeSvgContainer: 'mx-auto mb-3',
      title: 'mb-3',
      leadText: 'lead mb-0',
      mobileLoginButton:
        'btn btn-primary d-inline-flex align-items-center px-4 mt-4',
      mobileLoginButtonIcon: 'mr-2',
      errorMessage:
        'text-danger d-flex justify-content-center align-items-center'
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
              <React.Fragment>
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
              </React.Fragment>
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
      title={'Login with Maiar'}
      className={className}
      onClose={onClose}
    >
      {content}
    </ModalContainer>
  ) : (
    content
  );
}

export default WalletConnectLoginContainer;
