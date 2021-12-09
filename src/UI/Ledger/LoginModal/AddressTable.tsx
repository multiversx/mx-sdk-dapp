import React from 'react';
import { HWProvider } from '@elrondnetwork/erdjs';
import {
  faChevronLeft,
  faChevronRight,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { setProvider } from 'redux/slices/networkConfigSlice';
import PageState from 'UI/PageState';
import { ledgerErrorCodes } from '../../../constants';
import { loginAction } from '../../../redux/commonActions';
import { proxySelector } from '../../../redux/selectors';
import {
  setLedgerAccount,
  setLedgerLogin,
  setTokenLogin
} from '../../../redux/slices';
import { LoginMethodsEnum } from '../../../types';
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
  const dispatch = useDispatch();
  const proxy = useSelector(proxySelector);
  const hwWalletP = new HWProvider(proxy);

  const [startIndex, setStartIndex] = React.useState(0);
  const [accounts, setAccounts] = React.useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState<number>();
  const [loading, setLoading] = React.useState(true);

  async function fetchAccounts() {
    try {
      setLoading(true);
      const initialized = await hwWalletP.init();
      if (!initialized) {
        setLoading(false);
        setError(failedInitializeErrorText);
        console.warn(failedInitializeErrorText);
        return;
      }
      const accounts = await hwWalletP.getAccounts(
        startIndex,
        addressesPerPage
      );
      setAccounts(accounts);
      setLoading(false);
    } catch (err) {
      if (err.statusCode in ledgerErrorCodes) {
        setError((ledgerErrorCodes as any)[err.statusCode].message);
      } else {
        setError(erdAppErrorText);
      }
      console.error('error', err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchAccounts();
  }, [startIndex]);

  function goToNextPage() {
    setSelectedAddress('');
    setStartIndex((current) => current + 1);
  }

  function goToPrevPage() {
    setSelectedAddress('');
    setStartIndex((current) => (current === 0 ? 0 : current - 1));
  }

  function login({
    provider,
    address,
    index,
    signature
  }: {
    provider: HWProvider;
    address: string;
    index: number;
    signature?: string;
  }) {
    dispatch(setProvider(provider));

    dispatch(setLedgerLogin({ index, loginType: LoginMethodsEnum.ledger }));

    if (signature) {
      dispatch(
        setTokenLogin({
          loginToken: String(token),
          signature
        })
      );
    }
    dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.ledger }));
    window.location.href = callbackRoute;
  }

  const loginFailed = (err: any, customMessage?: string) => {
    if (err.statusCode in ledgerErrorCodes) {
      setError(
        (ledgerErrorCodes as any)[err.statusCode].message + customMessage
      );
      dispatch(setLedgerAccount(null));
    }
    setLoading(false);
    console.warn(err);
  };

  const setAddress = () => {
    if (selectedIndex != null) {
      dispatch(
        setLedgerAccount({
          index: selectedIndex,
          address: selectedAddress
        })
      );
      setLoading(true);
      const hwWalletProvider = new HWProvider(proxy);
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
                loginFailed(err, '. Update Elrond App to continue.');
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
                loginFailed(err);
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
                    onClick={goToPrevPage}
                    data-testid='prevBtn'
                    disabled={startIndex === 0}
                  >
                    <FontAwesomeIcon size='sm' icon={faChevronLeft} /> Prev
                  </button>
                  <button
                    type='button'
                    className='btn btn-link mx-2'
                    onClick={goToNextPage}
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
