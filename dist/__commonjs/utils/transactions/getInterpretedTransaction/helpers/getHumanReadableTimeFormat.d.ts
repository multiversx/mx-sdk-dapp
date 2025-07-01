export interface GetHumanReadableTimeFormatType {
    value: number;
    noSeconds?: boolean;
    utc?: boolean;
    meridiem?: boolean;
}
/**
 * @param value - UNIX timestamp
 * */
export declare function getHumanReadableTimeFormat({ value, noSeconds, utc, meridiem }: GetHumanReadableTimeFormatType): string;
//# sourceMappingURL=getHumanReadableTimeFormat.d.ts.map