import React from 'react';
import ModalContainer from 'UI/ModalContainer';
import { getGeneratedClasses } from 'utils';
import { LedgerLoginContainer } from '../LoginModal';
import { LedgerLoginButtonPropsType } from './types';

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  token,
  callbackRoute,
  children,
  loginButtonText = 'Ledger',
  buttonClassName,
  className = 'ledger-login',
  renderContentInsideModal = true,
  shouldRenderDefaultCss = true
}) => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName}`,
      loginText: 'text-left'
    }
  );

  function handleOpenModal() {
    setShowLoginModal(true);
  }

  function handleCloseModal() {
    setShowLoginModal(false);
  }

  const content = renderContentInsideModal ? (
    <ModalContainer
      title={'Login with ledger'}
      className={className}
      onClose={handleCloseModal}
    >
      <LedgerLoginContainer
        className={className}
        shouldRenderDefaultCss={shouldRenderDefaultCss}
        callbackRoute={callbackRoute}
        token={token}
      />
    </ModalContainer>
  ) : (
    <LedgerLoginContainer
      className={className}
      shouldRenderDefaultCss={shouldRenderDefaultCss}
      callbackRoute={callbackRoute}
      token={token}
    />
  );

  return (
    <React.Fragment>
      <button onClick={handleOpenModal} className={generatedClasses.wrapper}>
        {children || (
          <span className={generatedClasses.loginText}>{loginButtonText}</span>
        )}
      </button>
      {showLoginModal && content}
    </React.Fragment>
  );
};

export default LedgerLoginButton;
