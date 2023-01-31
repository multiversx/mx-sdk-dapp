import { useState } from 'react';
import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from '../../types';

const defaultAddressesPerPage = 10;

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

export const useAddressScreens = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] =
    useState<SelectedAddress | null>(null);

  const [showAddressList, setShowAddressList] = useState(false);

  const onSelectAddress = (newSelectedAddress: SelectedAddress | null) => {
    setSelectedAddress(newSelectedAddress);
  };

  const onGoToNextPage = () => {
    setSelectedAddress(null);
    setStartIndex((current) => current + 1);
  };

  const onGoToPrevPage = () => {
    setSelectedAddress(null);
    setStartIndex((current) => (current === 0 ? 0 : current - 1));
  };

  return {
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
    onSelectAddress,
    error,
    setError,
    defaultAddressesPerPage
  };
};
