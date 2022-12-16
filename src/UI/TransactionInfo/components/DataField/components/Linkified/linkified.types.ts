import { HTMLProps, ElementType } from 'react';

export type LinkifiedProps = Omit<HTMLProps<HTMLAnchorElement>, 'href'> & {
  truncate?: number;
};

export type LinkComponentProps = {
  href: string;
} & LinkifiedProps;

export type LinkComponent = ElementType<LinkComponentProps>;
