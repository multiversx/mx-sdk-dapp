import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { WithStylesImportType } from '../../../../../../hocs/useStyles';
export interface ConfirmReceiverPropsType extends WithStylesImportType {
    amount: string;
    label?: ReactNode;
    customCopyIcon?: IconProp;
    customExplorerIcon?: IconProp;
    receiver: string;
    receiverUsername?: string;
    scamReport: string | null;
}
export declare const ConfirmReceiver: (props: ConfirmReceiverPropsType) => JSX.Element;
//# sourceMappingURL=ConfirmReceiver.d.ts.map