import { ReactNode } from 'react';
import { WithClassnameType } from '../../../types';
export interface AddressTablePropsType extends WithClassnameType {
    accounts: string[];
    disabledIndexes?: number[];
    addressTableClassNames?: {
        ledgerModalTitleClassName?: string;
        ledgerModalSubtitleClassName?: string;
        ledgerModalTableHeadClassName?: string;
        ledgerModalTableItemClassName?: string;
        ledgerModalButtonClassName?: string;
        ledgerModalTableNavigationButtonClassName?: string;
        ledgerModalTableSelectedItemClassName?: string;
        ledgerModalTableNavigationButtonDisabledClassName?: string;
    };
    customContentComponent?: ReactNode;
    dataTestId?: string;
    loading: boolean;
    onConfirmSelectedAddress: () => void;
    onGoToSpecificPage: (page: number) => void;
    onGoToNextPage: () => void;
    onGoToPrevPage: () => void;
    onSelectAddress: (address: {
        address: string;
        index: number;
    } | null) => void;
    selectedAddress?: string;
    startIndex: number;
}
export declare const AddressTable: (props: AddressTablePropsType) => JSX.Element;
//# sourceMappingURL=AddressTable.d.ts.map