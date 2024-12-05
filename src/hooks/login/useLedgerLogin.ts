import { useEffect, useState } from 'react';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { getAccountProvider, getLedgerConfiguration } from 'providers';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { ledgerAccountSelector } from 'reduxStore/selectors';
import {
  setLedgerAccount,
  setLedgerLogin,
  updateLedgerAccount
} from 'reduxStore/slices';
import { LoginMethodsEnum } from 'types/enums.types';
import { getLedgerErrorCodes, optionalRedirect } from 'utils/internal';
import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from '../../types';
import { getIsLoggedIn } from '../../utils';
import { clearInitiatedLogins } from './helpers';
import { useAddressScreens } from './useAddressScreens';
import { useLoginService } from './useLoginService';
const failInitializeErrorText = 'Check if the MultiversX App is open on Ledger';

export interface UseLedgerLoginPropsType extends OnProviderLoginType {
  addressesPerPage?: number;
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
  onGoToSpecificPage: (page: number) => void;
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

export const useLedgerLogin = ({
  callbackRoute,
  token: tokenToSign,
  addressesPerPage: configuredAddressesPerPage,
  nativeAuth,
  onLoginRedirect
}: UseLedgerLoginPropsType): LedgerLoginHookReturnType => {
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const hwProvider = getAccountProvider() as unknown as HWProvider;
  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();
  const hasNativeAuth = nativeAuth != null;
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;

  const {
    accounts,
    setAccounts,
    isLoading,
    setIsLoading,
    setShowAddressList,
    showAddressList,
    startIndex,
    selectedAddress,
    onGoToPrevPage,
    onGoToNextPage,
    onGoToSpecificPage,
    onSelectAddress,
    error,
    setError,
    defaultAddressesPerPage
  } = useAddressScreens();

  const addressesPerPage =
    configuredAddressesPerPage ?? defaultAddressesPerPage;

  const [version, setVersion] = useState('');
  const [contractDataEnabled, setContractDataEnabled] = useState(false);

  const dispatchLoginActions = ({
    address,
    index,
    signature
  }: {
    address: string;
    index: number;
    signature?: string;
  }) => {
    dispatch(setLedgerLogin({ index, loginType: LoginMethodsEnum.ledger }));

    if (signature) {
      loginService.setTokenLoginInfo({ signature, address });
    }

    dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.ledger }));

    optionalRedirect({
      callbackRoute,
      onLoginRedirect,
      options: { address, signature }
    });
  };

  const onLoginFailed = (err: any, customMessage = '') => {
    // Show errors only if the user initiated the login process (isLoading is true)
    if (isLoading) {
      const { errorMessage, defaultErrorMessage } = getLedgerErrorCodes(err);

      const message =
        errorMessage ?? defaultErrorMessage ?? failInitializeErrorText;

      setError(`${message}.${customMessage}`);
      setIsLoading(false);
      dispatch(setLedgerAccount(null));
    }
  };

  const isHWProviderInitialized = async () => {
    try {
      if (hwProvider instanceof HWProvider && hwProvider.isInitialized()) {
        return hwProvider.isConnected();
      }
    } catch (e) {
      onLoginFailed(e);
    }

    return false;
  };

  const initHWProvider = async () => {
    const isInitialized = await isHWProviderInitialized();

    if (isInitialized) {
      setError('');
      setIsLoading(false);
      return;
    }

    try {
      const hwWalletP = new HWProvider();
      const initialized = await hwWalletP.init();

      if (initialized) {
        setAccountProvider(hwWalletP);
      }

      setError('');
      setIsLoading(false);
    } catch (e) {
      onLoginFailed(e);
    }
  };

  const loginUser = async () => {
    const isInitialized = await isHWProviderInitialized();

    if (!selectedAddress || !isInitialized) {
      return onLoginFailed(failInitializeErrorText);
    }

    const { index } = selectedAddress;

    if (hasNativeAuth && !token) {
      token = await loginService.getNativeAuthLoginToken();
      // Fetching block failed
      if (!token) {
        console.warn('Fetching block failed. Login cancelled.');
        return;
      }
    }

    if (token) {
      loginService.setLoginToken(token);

      try {
        const loginInfo = await hwProvider.tokenLogin({
          token: Buffer.from(`${token}{}`),
          addressIndex: index
        });

        dispatchLoginActions({
          address: loginInfo.address,
          index,
          signature: loginInfo.signature.toString('hex')
        });
      } catch (err) {
        onLoginFailed(err, '. Update MultiversX App to continue.');
      }
    } else {
      try {
        const { address } = await hwProvider.login({ addressIndex: index });

        dispatchLoginActions({
          address,
          index
        });
      } catch (err) {
        onLoginFailed(err);

        return false;
      }
    }

    return true;
  };

  const onConfirmSelectedAddress = async () => {
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

      setIsLoading(false);
      await loginUser();
    } catch (err) {
      onLoginFailed(err);
    }

    setShowAddressList(false);

    return true;
  };

  const fetchAccounts = async () => {
    const isInitialized = await isHWProviderInitialized();

    if (!isInitialized) {
      return onLoginFailed(error);
    }

    try {
      setIsLoading(true);

      const accounts = await hwProvider.getAccounts(
        startIndex,
        addressesPerPage
      );

      const ledgerData = await getLedgerConfiguration(hwProvider);
      setVersion(ledgerData.version);
      setContractDataEnabled(ledgerData.dataEnabled);
      setAccounts(accounts);
      setIsLoading(false);
    } catch (err) {
      onLoginFailed(err);
    }
  };

  const onStartLogin = async () => {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    clearInitiatedLogins();
    setError('');

    try {
      setIsLoading(true);
      const isInitialized = await isHWProviderInitialized();

      if (!isInitialized) {
        return onLoginFailed(failInitializeErrorText);
      }

      if (ledgerAccount != null) {
        if (!selectedAddress) {
          return onLoginFailed(failInitializeErrorText);
        }

        const { address } = await hwProvider.login({
          addressIndex: selectedAddress.index.valueOf()
        });

        if (!address) {
          return onLoginFailed('Login cancelled.');
        }

        dispatch(
          loginAction({ address, loginMethod: LoginMethodsEnum.ledger })
        );

        optionalRedirect({
          callbackRoute,
          onLoginRedirect
        });
      } else {
        if (!accounts?.length) {
          await fetchAccounts();
        }

        setShowAddressList(true);
      }

      setIsLoading(false);
    } catch (err) {
      onLoginFailed(err);
    }
  };

  // Need to initialise the HWProvider before starting the login process
  // and fetch the accounts immediately afterward only once or if the address page changes
  const initProviderAndAccounts = async () => {
    try {
      let isInitialized = await isHWProviderInitialized();

      if (!isInitialized) {
        await initHWProvider();
      }

      isInitialized = await isHWProviderInitialized();

      if (!isInitialized) {
        return onLoginFailed(failInitializeErrorText);
      }

      if (accounts.length === 0 || startIndex >= 0) {
        await fetchAccounts();
      }
    } catch (err) {
      onLoginFailed(err);
    }
  };

  useEffect(() => {
    initProviderAndAccounts();
  }, [startIndex, showAddressList, hwProvider]);

  useEffect(() => {
    const shouldShowAddressList = accounts?.length > 0 && !showAddressList;

    if (shouldShowAddressList) {
      setShowAddressList(true);
    }
  }, [accounts]);

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
      onGoToSpecificPage,
      onSelectAddress,
      onConfirmSelectedAddress
    }
  ];
};
