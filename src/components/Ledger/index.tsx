import React from 'react';
import { HWProvider } from '@elrondnetwork/erdjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import PageState from 'UI/PageState';
import { loginAction } from '../../redux/commonActions';
import { ledgerAccountSelector, proxySelector } from '../../redux/selectors';
import { setProvider } from '../../redux/slices';
import { LoginMethodsEnum } from '../../types';
import AddressTable from './AddressTable';
import ConfirmAddress from './ConfirmAddress';
import LedgerConnect from './LedgerConnect';

const ledgerAppErrorText = 'Check if Elrond app is open on Ledger';
const failedInitializeErrorText =
  'Could not initialise ledger app, make sure Elrond app is open';
const ledgerWaitingText = 'Waiting for device';

const Ledger = ({ callbackRoute }: { callbackRoute: string }) => {
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const proxy = useSelector(proxySelector);
  const dispatch = useDispatch();
  const [error, setError] = React.useState('');
  const [showAddressTable, setShowAddressTable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onClick = async () => {
    setError('');
    if (ledgerAccount !== undefined) {
      try {
        const hwWalletP = new HWProvider(proxy);
        setLoading(true);
        const initialized = await hwWalletP.init();

        if (!initialized) {
          console.warn(failedInitializeErrorText);
          setLoading(false);
          return;
        }

        const address = await hwWalletP.login();

        dispatch(setProvider(hwWalletP));
        dispatch(
          loginAction({ address, loginMethod: LoginMethodsEnum.ledger })
        );
        setLoading(false);
        window.history.pushState({}, document.title, callbackRoute);
      } catch (error) {
        console.error('error ', error);
        console.warn(error);
        setError(ledgerAppErrorText);
      }
    } else {
      setShowAddressTable(true);
    }
  };

  switch (true) {
    case loading:
      return (
        <PageState
          icon={faCircleNotch}
          iconClass='fa-spin text-primary'
          title={ledgerWaitingText}
        />
      );
    case ledgerAccount !== undefined && !error:
      return <ConfirmAddress />;
    case showAddressTable && !error:
      return (
        <AddressTable
          setShowAddressTable={setShowAddressTable}
          setError={setError}
          callbackRoute={callbackRoute}
          erdAppErrorText={ledgerAppErrorText}
          failedInitializeErrorText={failedInitializeErrorText}
        />
      );
    case error !== '':
      return <LedgerConnect onClick={onClick} error={error} />;
    default:
      return <LedgerConnect onClick={onClick} error={error} />;
  }
};

export default Ledger;
