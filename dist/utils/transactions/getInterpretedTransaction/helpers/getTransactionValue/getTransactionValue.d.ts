import { EgldValueDataType, NFTValueDataType, TokenValueDataType } from 'utils/transactions/getInterpretedTransaction/helpers/types';
import { WithTransactionType } from '../../../../../UI/types';
export interface GetTransactionValueReturnType {
    egldValueData?: EgldValueDataType;
    tokenValueData?: TokenValueDataType;
    nftValueData?: NFTValueDataType;
}
export interface GetTransactionValueType extends WithTransactionType {
    hideMultipleBadge?: boolean;
}
export declare const getTransactionValue: ({ transaction, hideMultipleBadge }: GetTransactionValueType) => GetTransactionValueReturnType;
//# sourceMappingURL=getTransactionValue.d.ts.map