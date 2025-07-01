/// <reference types="react" />
import { TokenOptionType } from 'hooks';
import { NftEnumType } from 'types/tokens.types';
import { WithStylesImportType } from '../../../../../../../../hocs/useStyles';
export interface ConfirmAmountNftSftPropsType extends WithStylesImportType {
    type?: NftEnumType;
    amount: string;
    tokenDetails: TokenOptionType;
}
export declare const ConfirmAmountNftSft: (props: ConfirmAmountNftSftPropsType) => JSX.Element;
//# sourceMappingURL=ConfirmAmountNftSft.d.ts.map