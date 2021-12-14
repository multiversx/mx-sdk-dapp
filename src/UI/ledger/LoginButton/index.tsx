import React from 'react';
import { getGeneratedClasses } from 'utils';
import ModalContainer from '../../ModalContainer';
import { LedgerLoginContainer } from '../LoginModal';
import { LedgerLoginButtonPropsType } from './types';

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  token,
  callbackRoute,
  loginButtonText,
  className = 'ledger-login',
  renderContentInsideModal = true,
  shouldRenderDefaultCss = true
}) => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    { wrapper: 'btn btn-primary px-sm-4 m-1 mx-sm-3', loginText: 'text-left' }
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
        <span className={generatedClasses.loginText}>{loginButtonText}</span>
      </button>
      {showLoginModal && content}
    </React.Fragment>
  );
};

export default LedgerLoginButton;
