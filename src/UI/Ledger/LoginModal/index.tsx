import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import PageState from 'UI/PageState';
import { ledgerAccountSelector } from '../../../redux/selectors';
import { useLedgerLogin } from '../../../services/login/useLedgerLogin';
import AddressTable from './AddressTable';
import ConfirmAddress from './ConfirmAddress';
import LedgerConnect from './LedgerConnect';

const ledgerWaitingText = 'Waiting for device';

export function LedgerLoginContainer({
  callbackRoute,
  token
}: {
  callbackRoute: string;
  token?: string;
}) {
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
        iconClass='fa-spin text-primary'
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
