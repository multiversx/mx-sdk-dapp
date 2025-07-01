/// <reference types="react" />
import { SignPropsType } from '../types/signTransactionsModals.types';
export interface ExtraConfirmationScreenPropsType {
    Screen?: (signProps: SignPropsType) => JSX.Element;
    GuardianScreen?: SignPropsType['GuardianScreen'];
    verifyReceiverScam?: boolean;
    className?: string;
}
//# sourceMappingURL=confirmationScreen.types.d.ts.map