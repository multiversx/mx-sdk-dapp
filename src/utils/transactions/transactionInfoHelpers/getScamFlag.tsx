import anchorme from 'anchorme';
import { ScamInfoType } from 'types/account.types';

const cleanLink = (input: string) =>
  input.toLocaleLowerCase().replace(/[^\x00-\x7F]/g, '');

export const getScamFlag = (
  input: string,
  scamInfo?: ScamInfoType
): { output: string; stringWithLinks: string; found: boolean } => {
  if (!scamInfo) {
    return { output: input, stringWithLinks: '', found: false };
  } else {
    const output = `[Message hidden due to suspicious content - ${scamInfo.info}]`;
    if (input.length > 1000) {
      return { output, stringWithLinks: input, found: true };
    }

    const clean = cleanLink(input.normalize('NFKC'));
    const allLinks = anchorme.list(clean);

    const parts = [];

    if (allLinks.length > 0) {
      let remainingOutput = input;

      allLinks.forEach((entry, index) => {
        const { string: foundLink } = entry;
        let firstPart = '';
        let lastPart = '';
        const link = foundLink;

        for (let i = 0; i < remainingOutput.length; i++) {
          const start = remainingOutput.slice(i);
          const [newFoundLink] = anchorme.list(cleanLink(start));
          if (newFoundLink && foundLink === newFoundLink.string) {
            firstPart = remainingOutput.substring(0, i);
          }
        }
        for (let i = input.length; i > 0; i--) {
          const start = remainingOutput.slice(0, i);
          const [newFoundLink] = anchorme.list(cleanLink(start));
          if (newFoundLink && foundLink === newFoundLink.string) {
            lastPart = remainingOutput.substring(i);
          }
        }
        parts.push(firstPart);
        parts.push(link);
        remainingOutput = lastPart;

        if (index === allLinks.length - 1) {
          parts.push(lastPart);
        }
      });
    } else {
      parts.push(input);
    }

    return { output, stringWithLinks: parts.join(''), found: true };
  }
};
