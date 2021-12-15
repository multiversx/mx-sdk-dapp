import React, { Fragment, useState } from 'react';
import { getGeneratedClasses } from 'utils';
import { WalletConnectLoginModal } from '../WalletConnectLoginModal';
import { LoginButtonPropsType } from './types';

export const WalletConnectLoginButton = ({
  callbackRoute,
  loginButtonText,
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  shouldRenderDefaultCss = true,
  className = 'wallect-connect-login',
  lead = 'Scan the QR code using Maiar'
}: LoginButtonPropsType) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: 'btn btn-primary px-sm-4 m-1 mx-sm-3',
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
        <span className={generatedClasses.loginText}>{loginButtonText}</span>
      </button>
      {showLoginModal && (
        <WalletConnectLoginModal
          callbackRoute={callbackRoute}
          loginButtonText={loginButtonText}
          title={title}
          className={className}
          logoutRoute={logoutRoute}
          lead={lead}
          onClose={handleCloseModal}
        />
      )}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
