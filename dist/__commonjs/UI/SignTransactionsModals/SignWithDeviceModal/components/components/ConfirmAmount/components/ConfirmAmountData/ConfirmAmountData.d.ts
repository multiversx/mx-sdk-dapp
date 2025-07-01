/// <reference types="react" />
import { TokenOptionType } from 'hooks';
import { ActiveLedgerTransactionType } from 'types';
import { WithStylesImportType } from '../../../../../../../../hocs/useStyles';
export interface ConfirmAmountDataPropsType extends WithStylesImportType {
    isEgld: boolean;
    tokenPrice?: number;
    isNftOrSft: boolean;
    amount: string;
    handleReference: (element: HTMLElement | null) => void;
    currentTransaction: ActiveLedgerTransactionType;
    tokenDetails: TokenOptionType;
}
export declare const ConfirmAmountData: (props: ConfirmAmountDataPropsType) => JSX.Element;
//# sourceMappingURL=ConfirmAmountData.d.ts.map