import { SetStateAction, Dispatch } from 'react';
import { DecodeMethodEnum } from 'types';
export interface DataDecodeType {
    value: string;
    className?: string;
    initialDecodeMethod?: DecodeMethodEnum | string;
    setDecodeMethod?: Dispatch<SetStateAction<string>>;
    identifier?: string;
}
export declare const useDataDecode: ({ value, initialDecodeMethod, setDecodeMethod, identifier }: DataDecodeType) => {
    displayValue: string;
    validationWarnings: string[];
    setActiveKey: Dispatch<SetStateAction<string>>;
    decodeOptions: {
        label: string;
        value: DecodeMethodEnum;
    }[];
};
//# sourceMappingURL=useDataDecode.d.ts.map