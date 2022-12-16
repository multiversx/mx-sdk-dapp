import * as linkify from 'linkifyjs';
import {
  SuspiciousLinkType,
  SuspiciousLinkPropsType,
  TextWithLinksType
} from 'types';

export const getTextWithLinks = (text: string): TextWithLinksType => {
  const links = linkify.find(text);

  // If no links are present in the text, return the text unmodified
  if (!links.length) {
    return {
      textWithLinks: text,
      hasLinks: false
    };
  }

  let textWithLinks = text;

  // Replace the previous links in text with normalized links
  for (const link of links) {
    const previousLink = text.substring(link.start, link.end);
    textWithLinks = textWithLinks.replace(previousLink, link.value);
  }

  return {
    textWithLinks,
    hasLinks: true
  };
};

/**
 * @description It checks if an asset contains suspicious info
 * If it contains text with links inside, it contains scam info, or it is marked as NSFW,
 * then it has suspicious info and may be a scam
 */
export const getScamFlag = ({
  message,
  scamInfo,
  isNsfw,
  uris,
  messagePrefix = 'Message hidden due to suspicious content - '
}: SuspiciousLinkPropsType): SuspiciousLinkType => {
  const outputMessage = `${messagePrefix}${
    scamInfo?.info ?? 'suspicious content'
  }`;
  const { textWithLinks, hasLinks } = getTextWithLinks(message);

  if (hasLinks || isNsfw || scamInfo) {
    return {
      message: outputMessage,
      textWithLinks,
      isSuspicious: true
    };
  }

  if (uris?.length) {
    for (const uri of uris) {
      const suspiciousInfo = getScamFlag({ message: uri, messagePrefix });

      if (suspiciousInfo.isSuspicious) {
        return suspiciousInfo;
      }
    }
  }

  if (!hasLinks && !scamInfo && !isNsfw) {
    return {
      message: '',
      textWithLinks,
      isSuspicious: false
    };
  }

  return { message: outputMessage, textWithLinks, isSuspicious: true };
};
