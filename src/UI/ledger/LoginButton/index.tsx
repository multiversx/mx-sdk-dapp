import React from 'react';
import { getGeneratedClasses, wrapperClassName } from 'utils';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';
import LedgerLoginContainer from '../LoginModal';
import { LedgerLoginButtonPropsType } from './types';

const LedgerLoginButton: (props: LedgerLoginButtonPropsType) => JSX.Element = ({
  token,
  callbackRoute,
  children,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Ledger',
  buttonClassName,
  className = 'ledger-login',
  redirectAfterLogin = false,
  wrapContentInsideModal = true,
  shouldRenderDefaultCss = true,
  shouldRenderDefaultModalCss = true,
  hideButtonWhenModalOpens = false,
  onLoginRedirect
}) => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
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
    <span className={wrapperClassName}>
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
          onLoginRedirect={onLoginRedirect}
          token={token}
          wrapContentInsideModal={wrapContentInsideModal}
          redirectAfterLogin={redirectAfterLogin}
          onClose={handleCloseModal}
        />
      )}
    </span>
  );
};

export default withClassNameWrapper(LedgerLoginButton);
