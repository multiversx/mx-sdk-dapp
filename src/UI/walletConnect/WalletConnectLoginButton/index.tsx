import React, { Fragment, useEffect } from 'react';
import { getGeneratedClasses } from 'utils';
import useDappModal from '../../DappModal/hooks/useDappModal';
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
  buttonClassName,
  className = 'wallect-connect-login',
  lead = 'Scan the QR code using Maiar',
  token,
  hideButtonWhenModalOpens = false
}: WalletConnectLoginButtonPropsType) => {
  const {
    show: showModal,
    hide: hideModal,
    setModalConfig,
    visible
  } = useDappModal();

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
    showModal();
    onModalOpens?.();
  };

  const handleCloseModal = () => {
    hideModal();
    onModalCloses?.();
  };

  const shouldRenderButton = !hideButtonWhenModalOpens || !visible;

  useEffect(() => {
    setModalConfig({
      showHeader: false
    });
  }, [setModalConfig]);

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
        onClose={handleCloseModal}
      />
    </Fragment>
  );
};

export default WalletConnectLoginButton;
