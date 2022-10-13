import React, { useCallback, useMemo, memo } from 'react';
import anchorme from 'anchorme';

import { AnchorProps, LinkComponent } from './anchorme.types';
import { Link } from './Link';

interface AnchormePropsType extends AnchorProps {
  children: string;
  linkComponent?: LinkComponent;
}

const Anchorme = ({ children, ...rest }: AnchormePropsType) => {
  const text = children;

  const parse = useCallback(() => {
    const matches = anchorme.list(text);
    if (matches.length === 0) return text;

    const elements = [];
    let lastIndex = 0;
    matches.forEach((match, index) => {
      // Push text located before matched string
      if (match.start > lastIndex) {
        elements.push(text.substring(lastIndex, match.start));
      }

      // Push Link component
      elements.push(<Link {...rest} key={index} href={match.string} />);

      lastIndex = match.end;
    });

    // Push remaining text
    if (text.length > lastIndex) {
      elements.push(text.substring(lastIndex));
    }

    return elements.length === 1 ? elements[0] : elements;
  }, [text, rest]);

  const parsedText = useMemo(() => parse(), [parse]);

  return parsedText;
};

export default memo(Anchorme);
