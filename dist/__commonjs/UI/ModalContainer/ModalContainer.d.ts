import { ReactNode } from 'react';
import { DappModalConfig, DappModalInteractionConfig } from 'UI/DappModal';
import { WithClassnameType } from '../types';
export interface ModalContainerPropsType extends WithClassnameType {
    children: ReactNode;
    closeOnEscape?: boolean;
    modalConfig?: DappModalConfig;
    modalInteractionConfig?: DappModalInteractionConfig;
    onClose?: () => void;
    visible?: boolean;
}
export declare const ModalContainer: (props: ModalContainerPropsType) => JSX.Element;
//# sourceMappingURL=ModalContainer.d.ts.map