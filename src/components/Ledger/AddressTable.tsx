import React from 'react';
import { HWProvider } from '@elrondnetwork/erdjs';
import {
  faChevronLeft,
  faChevronRight,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useDispatch } from 'context';
import { useHistory } from 'react-router-dom';
import PageState from 'UI/PageState';
import { ledgerErrorCodes } from '../../constants';
import AddressRow from './AddressRow';

const addressesPerPage = 10;

const AddressTable = ({
  setShowAddressTable,
  setError,
  callbackRoute,
  erdAppErrorText,
  failedInitializeErrorText,
  ledgerWaitingText,
  token
}: {
  setShowAddressTable: React.Dispatch<React.SetStateAction<boolean>>;
  setError: (error: string) => void;
  callbackRoute: string;
  erdAppErrorText: string;
  failedInitializeErrorText: string;
  ledgerWaitingText?: string;
  token?: string;
}) => {
  const { dapp } = useContext();
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = React.useState(0);
  const [accounts, setAccounts] = React.useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState<
    number | undefined
  >();
  const [loading, setLoading] = React.useState(true);
  const hwWalletP = new HWProvider(dapp.proxy);
  const history = useHistory();

  const fetchAccounts = () => {
    setLoading(true);

    hwWalletP
      .init()
      .then((success: any) => {
        if (!success) {
          setLoading(false);
          setError(failedInitializeErrorText);
          console.warn(failedInitializeErrorText);
          return;
        }
        hwWalletP
          .getAccounts(startIndex, addressesPerPage)
          .then((accounts) => {
            setAccounts(accounts);
            setLoading(false);
          })
          .catch((err) => {
            setError(erdAppErrorText);
            console.error('error', err);
            setLoading(false);
          });
      })
      .catch((err) => {
        if (err.statusCode in ledgerErrorCodes) {
          setError((ledgerErrorCodes as any)[err.statusCode].message);
        }
        console.error('error', err);
        setLoading(false);
      });
  };

  React.useEffect(fetchAccounts, [startIndex]);

  const goToNext = () => {
    setSelectedAddress('');
    setStartIndex((current) => current + 1);
  };

  const goToPrev = () => {
    setSelectedAddress('');
    setStartIndex((current) => (current === 0 ? 0 : current - 1));
  };

  const login = ({
    provider,
    address,
    index,
    signature
  }: {
    provider: HWProvider;
    address: string;
    index: number;
    signature?: string;
  }) => {
    dispatch({ type: 'setProvider', provider });

    dispatch({
      type: 'ledgerLogin',
      ledgerLogin: { index, loginType: 'ledger' }
    });

    if (signature) {
      dispatch({
        type: 'setTokenLogin',
        tokenLogin: {
          loginToken: String(token),
          signature
        }
      });
    }
    dispatch({ type: 'login', address, loginMethod: 'ledger' });

    history.push(callbackRoute);
  };

  const loginFaield = (err: any, customMessage?: string) => {
    if (err.statusCode in ledgerErrorCodes) {
      setError(
        (ledgerErrorCodes as any)[err.statusCode].message + customMessage
      );
      dispatch({
        type: 'setLedgerAccount',
        ledgerAccount: undefined
      });
    }
    setLoading(false);
    console.warn(err);
  };

  const setAddress = () => {
    if (selectedIndex !== undefined) {
      dispatch({
        type: 'setLedgerAccount',
        ledgerAccount: {
          index: selectedIndex,
          address: selectedAddress
        }
      });
      setLoading(true);
      const hwWalletProvider = new HWProvider(dapp.proxy);
      hwWalletProvider
        .init()
        .then((success: any) => {
          if (!success) {
            setError(failedInitializeErrorText);
            setLoading(false);
            console.warn(failedInitializeErrorText);
            return;
          }

          if (token) {
            hwWalletProvider
              .tokenLogin({
                token: Buffer.from(`${token}{}`),
                addressIndex: selectedIndex
              })
              .then(({ address, signature }) => {
                login({
                  address,
                  provider: hwWalletProvider,
                  index: selectedIndex,
                  signature: signature.hex()
                });
              })
              .catch((err) => {
                loginFaield(err, '. Update Elrond App to continue.');
              });
          } else {
            hwWalletProvider
              .login({ addressIndex: selectedIndex })
              .then((address) => {
                login({
                  address,
                  provider: hwWalletProvider,
                  index: selectedIndex
                });
              })
              .catch((err) => {
                loginFaield(err);
              });
          }
        })
        .catch((err: any) => {
          if (err.statusCode in ledgerErrorCodes) {
            setError((ledgerErrorCodes as any)[err.statusCode].message);
          }
          setLoading(false);
          console.warn(failedInitializeErrorText, err);
        });
      setShowAddressTable(false);
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
    default:
      return (
        <React.Fragment>
          <div className='m-auto'>
            <div className='card my-4 text-center'>
              <div className='card-body p-4 mx-lg-4'>
                <div className='table-responsive' data-testid='ledgerAddresses'>
                  <table className='table m-0 border-bottom'>
                    <thead className='py-2 text-semibold border-bottom'>
                      <tr>
                        <th className='text-left border-0'>Address</th>
                        <th className='text-left border-0'>Balance</th>
                        <th className='text-left border-0'>#</th>
                      </tr>
                    </thead>
                    <tbody data-testid='addressesTable'>
                      {accounts.map((account, index) => {
                        const props = {
                          account,
                          index: index + startIndex * addressesPerPage,
                          selectedAddress,
                          setSelectedAddress,
                          setSelectedIndex
                        };
                        return (
                          <AddressRow
                            key={index + startIndex * addressesPerPage}
                            {...props}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className='d-flex justify-content-center pager mt-2'>
                  <button
                    type='button'
                    className='btn btn-link mx-2'
                    onClick={goToPrev}
                    data-testid='prevBtn'
                    disabled={startIndex === 0}
                  >
                    <FontAwesomeIcon size='sm' icon={faChevronLeft} /> Prev
                  </button>
                  <button
                    type='button'
                    className='btn btn-link mx-2'
                    onClick={goToNext}
                    data-testid='nextBtn'
                  >
                    Next <FontAwesomeIcon size='sm' icon={faChevronRight} />
                  </button>
                </div>
                <button
                  className='btn btn-primary px-4 mt-4'
                  disabled={selectedAddress === ''}
                  onClick={setAddress}
                  data-testid='confirmBtn'
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
};

export default AddressTable;
