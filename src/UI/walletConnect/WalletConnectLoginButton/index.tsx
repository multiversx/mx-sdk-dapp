import React, { Fragment, useState } from 'react';
import platform from 'platform';
import { useWalletConnectLogin } from 'services/login/useWalletConnectLogin';
import { getGeneratedClasses } from 'utils';
import ModalContainer from '../../ModalContainer';
import { ReactComponent as Lightning } from './lightning.svg';
import { LoginModalPropsType } from './types';

export const WalletConnectLoginButton = ({
  callbackRoute,
  loginButtonText,
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  shouldRenderDefaultCss = true,
  className = 'wallect-connect-login',
  lead = 'Scan the QR code using Maiar'
}: LoginModalPropsType) => {
  const { uri, qrCodeSvg, error } = useWalletConnectLogin({
    logoutRoute,
    callbackRoute
  });

  const [showLoginModal, setShowLoginModal] = useState(false);

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

  const handleOpenModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const modal = (
    <ModalContainer
      title={'Login with Maiar'}
      className={className}
      onClose={handleCloseModal}
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
                    href={uri || undefined}
                    rel='noopener noreferrer nofollow'
                    target='_blank'
                  >
                    <Lightning
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

  return (
    <Fragment>
      <button onClick={handleOpenModal} className={generatedClasses.wrapper}>
        <span className={generatedClasses.loginText}>{loginButtonText}</span>
      </button>
      {showLoginModal && modal}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
