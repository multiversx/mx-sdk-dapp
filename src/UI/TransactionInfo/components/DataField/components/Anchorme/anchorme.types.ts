import { HTMLProps, ElementType } from 'react';

export type AnchorProps = Omit<HTMLProps<HTMLAnchorElement>, 'href'> & {
  truncate?: number;
};

export type LinkComponentProps = {
  href: string;
} & AnchorProps;

export type LinkComponent = ElementType<LinkComponentProps>;
