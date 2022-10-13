import React from 'react';

import { LinkComponent, LinkComponentProps } from './anchorme.types';
import { getProtocol, truncateText } from './utils';

export interface LinkPropsType extends LinkComponentProps {
  linkComponent?: LinkComponent;
}

export const Link = ({
  href,
  linkComponent,
  truncate,
  ...rest
}: LinkPropsType): JSX.Element => {
  const Component = linkComponent ?? 'a';
  const protocol = getProtocol(href);
  const text = truncate ? truncateText(href, truncate) : href;

  return (
    <Component {...rest} href={`${protocol}${href}`}>
      {text}
    </Component>
  );
};
