import { DecodeMethodEnum, DecodedDisplayType } from 'types';
interface GetDecodedPartsPropsType {
    parts: string[];
    decodeMethod: DecodeMethodEnum;
    identifier?: string;
    display: DecodedDisplayType;
}
export declare const getDisplayValueAndValidationWarnings: ({ parts, decodeMethod, identifier, display }: GetDecodedPartsPropsType) => string[];
export {};
//# sourceMappingURL=getDisplayValueAndValidationWarnings.d.ts.map