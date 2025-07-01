/// <reference types="react" />
import { ActiveLedgerTransactionType, MultiSignTransactionType } from 'types';
export interface SignStepInnerClassesType {
    buttonsWrapperClassName?: string;
    inputGroupClassName?: string;
    inputLabelClassName?: string;
    inputValueClassName?: string;
    errorClassName?: string;
    scamAlertClassName?: string;
    buttonClassName?: string;
    progressClassName?: string;
}
export interface SignStepBodyPropsType {
    error: string | null;
    callbackRoute?: string;
    currentStep: number;
    currentTransaction: ActiveLedgerTransactionType | null;
    allTransactions: MultiSignTransactionType[];
    signStepInnerClasses?: SignStepInnerClassesType;
    isGuarded?: boolean;
}
export declare const SignStepBody: (props: SignStepBodyPropsType) => JSX.Element;
//# sourceMappingURL=SignStepBody.d.ts.map