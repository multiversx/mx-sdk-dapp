import React from 'react';
import { getGeneratedClasses } from 'utils';
import LedgerLoginContainer from '../LoginModal';
import styles from '../styles/ledger.scss';
import { LedgerLoginButtonPropsType } from './types';

const LedgerLoginButton: (props: LedgerLoginButtonPropsType) => JSX.Element = ({
  token,
  callbackRoute,
  children,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Ledger',
  buttonClassName,
  className = styles.ledgerLogin,
  redirectAfterLogin = false,
  wrapContentInsideModal = true,
  shouldRenderDefaultCss = true,
  shouldRenderDefaultModalCss = true,
  hideButtonWhenModalOpens = false
}) => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `${styles.wrapper} ${
        buttonClassName != null ? buttonClassName : ''
      }`,
      loginText: styles.loginText
    }
  );

  function handleOpenModal() {
    setShowLoginModal(true);
    onModalOpens?.();
  }

  function handleCloseModal() {
    setShowLoginModal(false);
    onModalCloses?.();
  }

  const shouldRenderButton = !hideButtonWhenModalOpens || !showLoginModal;

  return (
    <>
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
        <LedgerLoginContainer
          className={className}
          shouldRenderDefaultCss={shouldRenderDefaultModalCss}
          callbackRoute={callbackRoute}
          token={token}
          wrapContentInsideModal={wrapContentInsideModal}
          redirectAfterLogin={redirectAfterLogin}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default LedgerLoginButton;
