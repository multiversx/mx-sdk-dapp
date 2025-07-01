/// <reference types="react" />
import { WithClassnameType } from 'UI/types';
import { WithStylesImportType } from '../../hocs/useStyles';
interface BalancePropsType extends WithClassnameType, WithStylesImportType {
    amount: string;
    addEqualSign?: boolean;
    displayAsUsd?: boolean;
    egldIcon?: boolean;
    showTokenLabel?: boolean;
    tokenLabel?: string;
    showTokenLabelSup?: boolean;
}
export declare const BalanceComponent: ({ amount, displayAsUsd, addEqualSign, egldIcon, className, showTokenLabel, styles, tokenLabel, showTokenLabelSup, "data-testid": dataTestId }: BalancePropsType) => JSX.Element;
export declare const Balance: (props: BalancePropsType) => JSX.Element;
export {};
//# sourceMappingURL=Balance.d.ts.map