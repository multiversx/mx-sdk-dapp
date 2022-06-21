import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import globalStyles from 'assets/sass/main.scss';
import { useGetAccountInfo } from 'hooks';
import { useLedgerLogin } from 'services';
import { ModalContainer } from 'UI/ModalContainer';
import { PageState } from 'UI/PageState';
import { getGeneratedClasses } from 'UI/utils';
import { AddressTable } from './AddressTable';
import { ConfirmAddress } from './ConfirmAddress';
import { LedgerConnect } from './LedgerConnect';
import styles from './login-modal.scss';

const ledgerWaitingText = 'Waiting for device';

interface LedgerLoginContainerPropsType {
  callbackRoute: string;
  className?: string;
  shouldRenderDefaultCss?: boolean;
  wrapContentInsideModal?: boolean;
  redirectAfterLogin?: boolean;
  token?: string;
  onClose?: () => void;
}

export const LedgerLoginContainer = ({
  callbackRoute,
  className = styles.loginModalContent,
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin,
  onClose,
  token
}: LedgerLoginContainerPropsType) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    { spinner: `fa-spin ${globalStyles.textPrimary}` }
  );
  const { ledgerAccount } = useGetAccountInfo();
  const [
    onStartLogin,
    { error, isLoading },
    {
      showAddressList,
      accounts,
      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress,
      startIndex,
      selectedAddress
    }
  ] = useLedgerLogin({ callbackRoute, token, redirectAfterLogin });

  function getContent() {
    if (isLoading) {
      return (
        <PageState
          icon={faCircleNotch}
          iconClass={generatedClasses.spinner}
          title={ledgerWaitingText}
        />
      );
    }
    if (ledgerAccount != null && !error) {
      return <ConfirmAddress token={token} />;
    }

    if (showAddressList && !error) {
      return (
        <AddressTable
          accounts={accounts}
          loading={isLoading}
          className={className}
          shouldRenderDefaultCss={shouldRenderDefaultCss}
          onGoToNextPage={onGoToNextPage}
          onGoToPrevPage={onGoToPrevPage}
          onSelectAddress={onSelectAddress}
          startIndex={startIndex}
          selectedAddress={selectedAddress?.address}
          onConfirmSelectedAddress={onConfirmSelectedAddress}
        />
      );
    }

    return <LedgerConnect onClick={onStartLogin} error={error} />;
  }

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onClose}
      modalConfig={{
        headerText: 'Login with ledger',
        showHeader: true,
        modalDialogClassName: className
      }}
    >
      {getContent()}
    </ModalContainer>
  ) : (
    getContent()
  );
};

export default LedgerLoginContainer;
