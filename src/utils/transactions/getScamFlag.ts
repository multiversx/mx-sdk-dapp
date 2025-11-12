import * as linkify from 'linkifyjs';
import {
  SuspiciousLinkType,
  SuspiciousLinkPropsType,
  TextWithLinksType
} from 'types/suspiciousLink.types';

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
  verified,
  messagePrefix = 'Message hidden due to suspicious content - '
}: SuspiciousLinkPropsType): SuspiciousLinkType => {
  if (verified) {
    return {
      message: '',
      textWithLinks: '',
      isSuspicious: false
    };
  }

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

  return {
    message: '',
    textWithLinks,
    isSuspicious: false
  };
};
