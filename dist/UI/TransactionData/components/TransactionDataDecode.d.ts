/// <reference types="react" />
import { WithClassnameType } from '../../types';
interface TransactionDataDecodePropsType extends WithClassnameType {
    data: string;
    onDecode: (decodedData: string) => void;
    onDecodeError: (errors: string[]) => void;
}
export declare const TransactionDataDecode: ({ className, data, onDecodeError, onDecode }: TransactionDataDecodePropsType) => JSX.Element;
export {};
//# sourceMappingURL=TransactionDataDecode.d.ts.map