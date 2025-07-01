import { ReactNode } from 'react';
import { WithClassnameType } from '../../types';
import { DappModalConfig } from '../dappModal.types';
export interface DappModalPropsType extends WithClassnameType {
    children?: ReactNode;
    closeOnEscape?: boolean;
    config?: DappModalConfig;
    id?: string;
    onHide?: () => void;
    parentElement?: Element;
    visible?: boolean;
}
export declare const DappModal: (props: DappModalPropsType) => JSX.Element;
//# sourceMappingURL=DappModal.d.ts.map