/// <reference types="react" />
import { WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../../../types';
export interface AddressRowPropsType extends WithClassnameType, WithStylesImportType {
    selectedAddress?: string;
    index: number;
    address: string;
    balance: string;
    onSelectAddress: (address: {
        address: string;
        index: number;
    } | null) => void;
    ledgerModalTableSelectedItemClassName?: string;
    disabled: boolean;
}
export declare const AddressRow: (props: AddressRowPropsType) => JSX.Element;
//# sourceMappingURL=AddressRow.d.ts.map