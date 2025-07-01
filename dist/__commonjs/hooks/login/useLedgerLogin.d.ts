import { InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from '../../types';
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
export declare type LedgerLoginHookReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType,
    LedgerLoginHookCustomStateType
];
export declare const useLedgerLogin: ({ callbackRoute, token: tokenToSign, addressesPerPage: configuredAddressesPerPage, nativeAuth, onLoginRedirect }: UseLedgerLoginPropsType) => LedgerLoginHookReturnType;
//# sourceMappingURL=useLedgerLogin.d.ts.map