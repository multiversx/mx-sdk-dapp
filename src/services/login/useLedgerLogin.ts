import React from 'react';
import { HWProvider } from '@elrondnetwork/erdjs';
import { ledgerErrorCodes } from 'constants/index';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  isLoggedInSelector,
  ledgerAccountSelector,
  proxySelector
} from 'redux/selectors';
import {
  setLedgerAccount,
  setLedgerLogin,
  setProvider,
  setTokenLogin
} from 'redux/slices';
import { LoginMethodsEnum } from 'types/enums';
import { optionalRedirect } from 'utils/internal';
import { LoginHookGenericStateType, InitiateLoginFunctionType } from '../types';

const ledgerAppErrorText = 'Check if Elrond app is open on Ledger';
const failedInitializeErrorText =
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
  const proxy = useSelector(proxySelector);
  const dispatch = useDispatch();
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const hwWalletP = new HWProvider(proxy);
  const [startIndex, setStartIndex] = React.useState(0);
  const [accounts, setAccounts] = React.useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] =
    React.useState<SelectedAddress | null>(null);

  const [showAddressList, setShowAddressList] = React.useState(false);

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
    optionalRedirect(callbackRoute, redirectAfterLogin);
  }

  const loginFailed = (err: any, customMessage?: string) => {
    if (err.statusCode in ledgerErrorCodes) {
      setError(
        (ledgerErrorCodes as any)[err.statusCode].message + customMessage
      );
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
        loginFailed(err, '. Update Elrond App to continue.');
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
        loginFailed(err);
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
      const { address, index } = selectedAddress;
      dispatch(
        setLedgerAccount({
          index,
          address
        })
      );
      const hwWalletProvider = new HWProvider(proxy);
      const initialized = await hwWalletProvider.init();
      if (!initialized) {
        setError(failedInitializeErrorText);
        console.warn(failedInitializeErrorText);
        return false;
      }
      setIsLoading(false);
      await loginUser(hwWalletProvider);
    } catch (err) {
      if ((err as any).statusCode in ledgerErrorCodes) {
        setError((ledgerErrorCodes as any)[(err as any).statusCode].message);
      }
      console.warn(failedInitializeErrorText, err);
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
        setError(failedInitializeErrorText);
        console.warn(failedInitializeErrorText);
        setIsLoading(false);
        return;
      }
      const accounts = await hwWalletP.getAccounts(
        startIndex,
        addressesPerPage
      );
      setAccounts(accounts);
      setIsLoading(false);
    } catch (err) {
      if ((err as any).statusCode in ledgerErrorCodes) {
        setError((ledgerErrorCodes as any)[(err as any).statusCode].message);
      } else {
        setError(ledgerAppErrorText);
      }
      console.error('error', err);
      setIsLoading(false);
    }
  }

  async function onStartLogin() {
    setError('');
    try {
      setIsLoading(true);
      if (ledgerAccount != null) {
        const hwWalletP = new HWProvider(proxy);
        const initialized = await hwWalletP.init();
        if (!initialized) {
          console.warn(failedInitializeErrorText);
          return;
        }
        const address = await hwWalletP.login();
        dispatch(setProvider(hwWalletP));
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
      setError(ledgerAppErrorText);
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

  React.useEffect(() => {
    fetchAccounts();
  }, [startIndex]);
  const isFailed = Boolean(error);
  return [
    onStartLogin,
    {
      isFailed,
      isLoggedIn: isLoggedIn && !isFailed,
      error,
      isLoading: isLoading && !isFailed
    },
    {
      accounts,
      showAddressList,
      startIndex,
      selectedAddress,

      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress
    }
  ];
}
