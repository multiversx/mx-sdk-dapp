import React, { Fragment, useState } from 'react';
import { getGeneratedClasses } from 'utils';
import WalletConnectLoginContainer from '../WalletConnectLoginContainer';
import { WalletConnectLoginButtonPropsType } from './types';

const WalletConnectLoginButton = ({
  children,
  callbackRoute,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Maiar App',
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin = false,
  isWalletConnectV2 = false,
  buttonClassName,
  className = 'wallect-connect-login',
  lead = 'Scan the QR code using Maiar',
  token,
  hideButtonWhenModalOpens = false
}: WalletConnectLoginButtonPropsType) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${
        buttonClassName != null ? buttonClassName : ''
      }`,
      loginText: 'text-left'
    }
  );

  const handleOpenModal = () => {
    setShowLoginModal(true);
    onModalOpens?.();
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    onModalCloses?.();
  };

  const shouldRenderButton = !hideButtonWhenModalOpens || !showLoginModal;
  return (
    <Fragment>
      {shouldRenderButton && (
        <button onClick={handleOpenModal} className={generatedClasses.wrapper}>
          {children || (
            <span className={generatedClasses.loginText}>
              {loginButtonText}
            </span>
          )}
        </button>
      )}
      {showLoginModal && (
        <WalletConnectLoginContainer
          callbackRoute={callbackRoute}
          loginButtonText={loginButtonText}
          title={title}
          token={token}
          className={className}
          logoutRoute={logoutRoute}
          lead={lead}
          wrapContentInsideModal={wrapContentInsideModal}
          redirectAfterLogin={redirectAfterLogin}
          isWalletConnectV2={isWalletConnectV2}
          onClose={handleCloseModal}
        />
      )}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
