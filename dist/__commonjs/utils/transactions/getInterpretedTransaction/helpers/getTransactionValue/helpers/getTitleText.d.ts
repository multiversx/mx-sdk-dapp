import { TokenArgumentType } from 'types/serverTransactions.types';
import { EgldValueDataType, NFTValueDataType, TokenValueDataType } from 'utils/transactions/getInterpretedTransaction/helpers/types';
export interface GetTransactionValueReturnType {
    egldValueData?: EgldValueDataType;
    tokenValueData?: TokenValueDataType;
    nftValueData?: NFTValueDataType;
}
export declare const getTitleText: (transactionTokens: TokenArgumentType[]) => string;
//# sourceMappingURL=getTitleText.d.ts.map