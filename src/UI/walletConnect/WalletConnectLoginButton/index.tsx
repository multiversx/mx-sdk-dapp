import React, { Fragment, useState } from 'react';
import { getGeneratedClasses } from 'utils';
import { WalletConnectLoginContainer } from '../WalletConnectLoginContainer';
import { WalletConnectLoginButtonPropsType } from './types';

export const WalletConnectLoginButton = ({
  children,
  callbackRoute,
  loginButtonText = 'Maiar App',
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  buttonClassName,
  className = 'wallect-connect-login',
  lead = 'Scan the QR code using Maiar',
  token
}: WalletConnectLoginButtonPropsType) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName}`,
      loginText: 'text-left'
    }
  );

  const handleOpenModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Fragment>
      <button onClick={handleOpenModal} className={generatedClasses.wrapper}>
        {children || (
          <span className={generatedClasses.loginText}>{loginButtonText}</span>
        )}
      </button>
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
          onClose={handleCloseModal}
        />
      )}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
