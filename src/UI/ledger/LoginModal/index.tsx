import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'redux/store';
import { ledgerAccountSelector } from 'redux/selectors';
import { useLedgerLogin } from 'services/login/useLedgerLogin';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'utils';
import AddressTable from './AddressTable';
import ConfirmAddress from './ConfirmAddress';
import LedgerConnect from './LedgerConnect';

const ledgerWaitingText = 'Waiting for device';

export function LedgerLoginContainer({
  callbackRoute,
  className = 'login-modal-content',
  shouldRenderDefaultCss = true,

  token
}: {
  callbackRoute: string;
  className: string;
  shouldRenderDefaultCss: boolean;
  token?: string;
}) {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    { spinner: 'fa-spin text-primary' }
  );
  const ledgerAccount = useSelector(ledgerAccountSelector);
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
  ] = useLedgerLogin({ callbackRoute, token });

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
