import React, { useEffect, useState } from 'react';
import { useWalletConnectLogin } from 'services';
import ModalContainer from 'UI/ModalContainer';
import { getGeneratedClasses, optionalImport } from 'utils';
import { ReactComponent as Lighting } from '../WalletConnectLoginButton/lightning.svg';
import { LoginModalPropsType } from './types';

const platform = optionalImport('platform');
const QRCode = optionalImport('qrcode');

export function WalletConnectLoginModal({
  callbackRoute,
  loginButtonText,
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  className = 'wallect-connect-login-modal',
  lead = 'Scan the QR code using Maiar',
  shouldRenderDefaultCss = true,
  token,
  onClose
}: LoginModalPropsType) {
  const [
    initLoginWithWalletConnect,
    { error },
    { uriDeepLink, walletConnectUri }
  ] = useWalletConnectLogin({
    logoutRoute,
    callbackRoute,
    token,
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
      mobileLoginButton: 'btn btn-primary px-4 mt-4',
      errorMessage:
        'text-danger d-flex justify-content-center align-items-center'
    }
  );

  const generateQRCode = async () => {
    if (!walletConnectUri) {
      return;
    }

    const svg = await QRCode.toString(walletConnectUri, {
      type: 'svg'
    });

    setQrCodeSvg(svg);
  };

  useEffect(() => {
    generateQRCode();
  }, [walletConnectUri]);

  useEffect(() => {
    initLoginWithWalletConnect();
  }, []);

  return (
    <ModalContainer
      title={'Login with Maiar'}
      className={className}
      onClose={onClose}
    >
      <div className={generatedClasses.container}>
        <div className={generatedClasses.root}>
          <div className={generatedClasses.card}>
            <div className={generatedClasses.cardBody}>
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
              <h4 className={generatedClasses.title}>{title}</h4>
              {isMobileDevice ? (
                <React.Fragment>
                  <p className={generatedClasses.leadText}>{loginButtonText}</p>
                  <a
                    id='accessWalletBtn'
                    data-testid='accessWalletBtn'
                    className={generatedClasses.mobileLoginButton}
                    href={uriDeepLink || undefined}
                    rel='noopener noreferrer nofollow'
                    target='_blank'
                  >
                    <Lighting
                      className={generatedClasses.cardBody}
                      style={{
                        width: '0.7rem',
                        height: '0.7rem'
                      }}
                    />
                    {title}
                  </a>
                </React.Fragment>
              ) : (
                <p className={generatedClasses.leadText}>{lead}</p>
              )}
              <div>
                {error && (
                  <p className={generatedClasses.errorMessage}>{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
