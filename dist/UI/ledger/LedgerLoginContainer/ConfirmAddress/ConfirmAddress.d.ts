import { ReactNode } from 'react';
import { WithClassnameType } from '../../../types';
export interface ConfirmAddressPropsType extends WithClassnameType {
    token?: string;
    noBorder?: boolean;
    customContentComponent?: ReactNode;
    confirmAddressClassNames?: {
        ledgerModalTitleClassName?: string;
        ledgerModalConfirmDescriptionClassName?: string;
        ledgerModalConfirmDataClassName?: string;
        ledgerModalConfirmFooterClassName?: string;
        ledgerModalConfirmContentClassName?: string;
    };
}
export declare const ConfirmAddress: (props: ConfirmAddressPropsType) => JSX.Element;
//# sourceMappingURL=ConfirmAddress.d.ts.map