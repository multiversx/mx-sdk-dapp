import React from 'react';
import { HWProvider } from '@elrondnetwork/erdjs';
import { useContext, useDispatch } from 'context';
import { useHistory } from 'react-router-dom';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import AddressTable from './AddressTable';
import ConfirmAddress from './ConfirmAddress';
import LedgerConnect from './LedgerConnect';
import PageState from 'UI/PageState';

const ledgerAppErrorText = 'Check if Elrond app is open on Ledger';
const failedInitializeErrorText =
  'Could not initialise ledger app, make sure Elrond app is open';
const ledgerWaitingText = 'Waiting for device';

const Ledger = ({ callbackRoute }: { callbackRoute: string }) => {
  const { dapp } = useContext();
  const dispatch = useDispatch();
  const history = useHistory();
  const { ledgerAccount } = useContext();
  const [error, setError] = React.useState('');
  const [showAddressTable, setShowAddressTable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onClick = () => {
    setError('');
    if (ledgerAccount !== undefined) {
      const hwWalletP = new HWProvider(dapp.proxy);
      setLoading(true);
      hwWalletP
        .init()
        .then((success: any) => {
          if (!success) {
            console.warn(failedInitializeErrorText);
            setLoading(false);
            return;
          }
          hwWalletP
            .login()
            .then((address) => {
              dispatch({ type: 'setProvider', provider: hwWalletP });
              dispatch({ type: 'login', address, loginMethod: 'ledger' });
              setLoading(false);
              history.push(callbackRoute);
            })
            .catch((err: any) => {
              setLoading(false);
              setError(ledgerAppErrorText);
              console.warn(err);
            });
        })
        .catch((error) => {
          console.error('error ', error);
        });
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
