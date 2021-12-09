import React from 'react';
import classNames from 'classnames';
import ModalContainer from '../../ModalContainer';
import { LedgerLoginContainer } from '../LoginModal';
import { LedgerLoginButtonPropsType } from './types';

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'web-wallet-login',
  callbackRoute,
  loginButtonText,
  shouldRenderDefaultCss = true
}) => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const generatedClasses = {
    wrapper: classNames(className, {
      'btn btn-primary px-sm-4 m-1 mx-sm-3': shouldRenderDefaultCss
    }),

    loginText: classNames(`${className}_login-text`, {
      'text-left': shouldRenderDefaultCss
    })
  };

  function handleOpenModal() {
    setShowLoginModal(true);
  }

  function handleCloseModal() {
    setShowLoginModal(false);
  }

  return (
    <React.Fragment>
      <button onClick={handleOpenModal} className={generatedClasses.wrapper}>
        <span className={generatedClasses.loginText}>{loginButtonText}</span>
      </button>
      {showLoginModal && (
        <ModalContainer title={'Login with ledger'} onClose={handleCloseModal}>
          <LedgerLoginContainer callbackRoute={callbackRoute} token={token} />
        </ModalContainer>
      )}
    </React.Fragment>
  );
};

export default LedgerLoginButton;
