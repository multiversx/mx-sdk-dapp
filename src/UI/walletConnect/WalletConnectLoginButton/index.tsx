import React, { Fragment, useState } from 'react';
import globalStyles from 'assets/sass/main.scss';
import useDappModal from 'UI/DappModal/hooks/useDappModal';
import { getGeneratedClasses } from 'utils';
import WalletConnectLoginContainer from '../WalletConnectLoginContainer';
import { WalletConnectLoginButtonPropsType } from './types';
import styles from './wallet-connect-login-button.scss';

export const WalletConnectLoginButton = ({
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
  className = styles.wallectConnectLogin,
  lead = 'Scan the QR code using Maiar',
  token,
  hideButtonWhenModalOpens = false
}: WalletConnectLoginButtonPropsType) => {
  const [canShowLoginModal, setCanShowLoginModal] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `${globalStyles.btn} ${globalStyles.btnPrimary} ${
        globalStyles.px4
      } ${globalStyles.m1} ${globalStyles.mx3} ${
        buttonClassName != null ? buttonClassName : ''
      }`,
      loginText: globalStyles.textLeft
    }
  );

  const handleOpenModal = () => {
    setCanShowLoginModal(true);
    handleShowModal();
    onModalOpens?.();
  };

  const handleCloseModal = () => {
    setCanShowLoginModal(false);
    handleHideModal();
    onModalCloses?.();
  };

  const shouldRenderButton = !hideButtonWhenModalOpens || !canShowLoginModal;
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
      {canShowLoginModal && (
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
      )}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
