import { useEffect, useState } from 'react';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { setAccountProvider } from 'providers/accountProvider';
import { getLedgerConfiguration } from 'providers/utils';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector, ledgerAccountSelector } from 'redux/selectors';
import {
  updateLedgerAccount,
  setLedgerLogin,
  setTokenLogin,
  setLedgerAccount
} from 'redux/slices';
import { LoginMethodsEnum } from 'types/enums';
import { getLedgerErrorCodes, optionalRedirect } from 'utils/internal';
import { LoginHookGenericStateType, InitiateLoginFunctionType } from '../types';

const failInitializeErrorText =
  'Could not initialise ledger app, make sure Elrond app is open';

const defaultAddressesPerPage = 10;

export interface UseLedgerLoginPropsType {
  callbackRoute: string;
  addressesPerPage?: number;
  token?: string;
  redirectAfterLogin?: boolean;
}

export interface SelectedAddress {
  address: string;
  index: number;
}

export interface LedgerLoginHookCustomStateType {
  accounts: string[];
  showAddressList: boolean;
  startIndex: number;
  selectedAddress: SelectedAddress | null;
  version: string;
  contractDataEnabled: boolean;

  onGoToPrevPage: () => void;
  onGoToNextPage: () => void;
  onSelectAddress: (address: SelectedAddress | null) => void;
  onConfirmSelectedAddress: () => void;
}

export type LedgerLoginHookReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  LedgerLoginHookCustomStateType
];

export function useLedgerLogin({
  callbackRoute,
  token,
  addressesPerPage = defaultAddressesPerPage,
  redirectAfterLogin = false
}: UseLedgerLoginPropsType): LedgerLoginHookReturnType {
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const hwWalletP = new HWProvider();
  const [startIndex, setStartIndex] = useState(0);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [version, setVersion] = useState('');
  const [contractDataEnabled, setContractDataEnabled] = useState(false);
  const [
    selectedAddress,
    setSelectedAddress
  ] = useState<SelectedAddress | null>(null);

  const [showAddressList, setShowAddressList] = useState(false);

  function dispatchLoginActions({
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
    setAccountProvider(provider);

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
    optionalRedirect(callbackRoute, redirectAfterLogin);
  }

  const onLoginFailed = (err: any, customMessage?: string) => {
    const { errorMessage } = getLedgerErrorCodes(err);

    if (errorMessage) {
      setError(errorMessage + customMessage);
    }
    setIsLoading(false);
    console.warn(err);
    dispatch(setLedgerAccount(null));
  };

  async function loginUser(hwWalletProvider: HWProvider) {
    if (selectedAddress == null) {
      return false;
    }
    const { index } = selectedAddress;

    if (token) {
      try {
        const loginInfo = await hwWalletProvider.tokenLogin({
          token: Buffer.from(`${token}{}`),
          addressIndex: index
        });
        dispatchLoginActions({
          address: loginInfo.address,
          provider: hwWalletProvider,
          index: index,
          signature: loginInfo.signature.hex()
        });
      } catch (err) {
        onLoginFailed(err, '. Update Elrond App to continue.');
      }
    } else {
      try {
        const address = await hwWalletProvider.login({ addressIndex: index });
        dispatchLoginActions({
          address,
          provider: hwWalletProvider,
          index
        });
      } catch (err) {
        onLoginFailed(err);
        return false;
      }
    }
    return true;
  }

  async function onConfirmSelectedAddress() {
    try {
      setIsLoading(true);
      if (selectedAddress == null) {
        return false;
      }
      if (ledgerAccount) {
        dispatch(updateLedgerAccount(selectedAddress));
      } else {
        dispatch(
          setLedgerAccount({
            ...selectedAddress,
            version,
            hasContractDataEnabled: contractDataEnabled
          })
        );
      }

      const hwWalletProvider = new HWProvider();
      const initialized = await hwWalletProvider.init();
      if (!initialized) {
        setError(failInitializeErrorText);
        console.warn(failInitializeErrorText);
        return false;
      }
      setIsLoading(false);
      await loginUser(hwWalletProvider);
    } catch (err) {
      const { errorMessage } = getLedgerErrorCodes(err);
      if (errorMessage) {
        setError(errorMessage);
      }
      console.warn(failInitializeErrorText, err);
    } finally {
      setIsLoading(false);
    }
    setShowAddressList(false);
    return true;
  }

  async function fetchAccounts() {
    try {
      setIsLoading(true);
      const initialized = await hwWalletP.init();
      if (!initialized) {
        setError(failInitializeErrorText);
        console.warn(failInitializeErrorText);
        setIsLoading(false);
        return;
      }
      const accounts = await hwWalletP.getAccounts(
        startIndex,
        addressesPerPage
      );
      const ledgerData = await getLedgerConfiguration(hwWalletP);
      setVersion(ledgerData.version);
      setContractDataEnabled(ledgerData.dataEnabled);
      setAccounts(accounts);
      setIsLoading(false);
    } catch (err) {
      const { errorMessage, defaultErrorMessage } = getLedgerErrorCodes(err);
      setError(errorMessage ?? defaultErrorMessage);
      console.error('error', err);
      setIsLoading(false);
    }
  }

  async function onStartLogin() {
    setError('');
    try {
      setIsLoading(true);
      if (ledgerAccount != null) {
        const hwWalletP = new HWProvider();
        const initialized = await hwWalletP.init();
        if (!initialized || !selectedAddress) {
          console.warn(failInitializeErrorText);
          return;
        }

        const address = await hwWalletP.login({
          addressIndex: selectedAddress.index.valueOf()
        });
        setAccountProvider(hwWalletP);
        dispatch(
          loginAction({ address, loginMethod: LoginMethodsEnum.ledger })
        );
        optionalRedirect(callbackRoute, redirectAfterLogin);
      } else {
        if (accounts?.length > 0) {
          setShowAddressList(true);
        } else {
          await fetchAccounts();
          setShowAddressList(true);
        }
      }
    } catch (error) {
      console.error('error ', error);
      const { defaultErrorMessage } = getLedgerErrorCodes();
      setError(defaultErrorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function onSelectAddress(newSelectedAddress: SelectedAddress | null) {
    setSelectedAddress(newSelectedAddress);
  }

  function onGoToNextPage() {
    setSelectedAddress(null);
    setStartIndex((current) => current + 1);
  }

  function onGoToPrevPage() {
    setSelectedAddress(null);
    setStartIndex((current) => (current === 0 ? 0 : current - 1));
  }

  useEffect(() => {
    fetchAccounts();
  }, [startIndex]);

  const loginFailed = Boolean(error);

  return [
    onStartLogin,
    {
      loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed,
      error,
      isLoading: isLoading && !loginFailed
    },
    {
      accounts,
      showAddressList,
      startIndex,
      selectedAddress,
      version,
      contractDataEnabled,

      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress
    }
  ];
}
