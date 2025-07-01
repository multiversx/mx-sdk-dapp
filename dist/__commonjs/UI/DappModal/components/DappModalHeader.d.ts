/// <reference types="react" />
import { WithClassnameType } from '../../types';
export interface DappModalHeaderPropsType extends WithClassnameType {
    visible?: boolean;
    headerText?: string;
    customHeader?: JSX.Element | string;
    closeButtonClassName?: string;
    headerTextClassName?: string;
    onHide?: () => void;
}
export declare const DappModalHeader: (props: DappModalHeaderPropsType) => JSX.Element;
//# sourceMappingURL=DappModalHeader.d.ts.map