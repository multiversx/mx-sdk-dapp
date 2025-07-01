/// <reference types="react" />
import { InitiateLoginFunctionType, LoginHookGenericStateType } from '../../types';
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
export declare type LedgerLoginHookReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType,
    LedgerLoginHookCustomStateType
];
export declare const useAddressScreens: () => {
    accounts: string[];
    defaultAddressesPerPage: number;
    error: string;
    isLoading: boolean;
    onGoToNextPage: () => void;
    onGoToPrevPage: () => void;
    onGoToSpecificPage: (page: number) => void;
    onSelectAddress: (newSelectedAddress: SelectedAddress | null) => void;
    selectedAddress: SelectedAddress | null;
    setAccounts: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    setError: import("react").Dispatch<import("react").SetStateAction<string>>;
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setShowAddressList: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    showAddressList: boolean;
    startIndex: number;
};
//# sourceMappingURL=useAddressScreens.d.ts.map