import React from 'react';

export type AnchorProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> & {
  truncate?: number;
};

export type LinkComponentProps = {
  href: string;
} & AnchorProps;

export type LinkComponent = React.ElementType<LinkComponentProps>;
