import { SuspiciousLinkType, SuspiciousLinkPropsType, TextWithLinksType } from 'types';
export declare const getTextWithLinks: (text: string) => TextWithLinksType;
/**
 * @description It checks if an asset contains suspicious info
 * If it contains text with links inside, it contains scam info, or it is marked as NSFW,
 * then it has suspicious info and may be a scam
 */
export declare const getScamFlag: ({ message, scamInfo, isNsfw, verified, messagePrefix }: SuspiciousLinkPropsType) => SuspiciousLinkType;
//# sourceMappingURL=getScamFlag.d.ts.map