import React, { Fragment, ReactNode, useState } from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { useDappModal } from 'UI/DappModal';
import { getGeneratedClasses } from 'UI/utils';
import { WalletConnectLoginContainer } from '../WalletConnectLoginContainer';

export interface WalletConnectLoginButtonPropsType {
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText?: string;
  buttonClassName?: string;
  shouldRenderDefaultCss?: boolean;
  wrapContentInsideModal?: boolean;
  redirectAfterLogin?: boolean;
  hideButtonWhenModalOpens?: boolean;
  token?: string;
}

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
  buttonClassName = 'wallet-connect-login-button',
  className = 'wallet-connect-login',
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
      wrapper: `${classNames(
        globalStyles.btn,
        globalStyles.btnPrimary,
        globalStyles.px4,
        globalStyles.m1,
        globalStyles.mx3,
        {
          [buttonClassName]: buttonClassName != null
        }
      )} `,
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
