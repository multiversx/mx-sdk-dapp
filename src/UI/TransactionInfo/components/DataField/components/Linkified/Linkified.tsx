import React from 'react';
import Linkify from 'linkify-react';
import { Opts } from 'linkifyjs';
import { Link } from './Link';
import { LinkifiedProps, LinkComponent } from './linkified.types';

export interface LinkifiedPropsType extends LinkifiedProps {
  children: string;
  linkComponent?: LinkComponent;
}

export const Linkified = ({ children, ...rest }: LinkifiedPropsType) => {
  const renderLink = ({ attributes }: Opts) => {
    const { href } = attributes as any;

    return <Link {...rest} href={href} />;
  };

  return <Linkify options={{ render: renderLink }}>{children}</Linkify>;
};
