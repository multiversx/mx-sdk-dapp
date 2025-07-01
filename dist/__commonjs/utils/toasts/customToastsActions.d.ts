/// <reference types="react" />
import { CustomToastType } from '../../types/toasts.types';
export declare const getRegisteredCustomIconComponents: (id: string) => () => JSX.Element;
export declare const getRegisteredToastCloseHandler: (id: string) => () => void;
export declare const addNewCustomToast: (props: CustomToastType) => CustomToastType;
export declare const deleteCustomToast: (toastId: string) => {
    payload: string;
    type: string;
};
//# sourceMappingURL=customToastsActions.d.ts.map