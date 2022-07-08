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
  callbackRoute?: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  shouldRenderDefaultCss?: boolean;
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
    shouldLoginUser: true,
    onLoginRedirect
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

  const content = (
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
              <>
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
            <div>
              {error && (
                <p className={generatedClasses.errorMessage}>{error}</p>
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
