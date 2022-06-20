import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import useDappModal from 'UI/DappModal/hooks/useDappModal';
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
      loginText: styles.loginText
    }
  );

  function handleOpenModal() {
    setCanShowLoginModal(true);
    handleShowModal();
    onModalOpens?.();
  }

  function handleCloseModal() {
    setCanShowLoginModal(false);
    handleHideModal();
    onModalCloses?.();
  }

  const shouldRenderButton = !hideButtonWhenModalOpens || !canShowLoginModal;

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
      {canShowLoginModal && (
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
