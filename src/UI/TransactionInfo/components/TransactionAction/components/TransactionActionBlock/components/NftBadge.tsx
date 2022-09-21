import React from 'react';

export const NftBadge = ({
  text,
  className,
  'data-testid': dataTestId = 'nftBadge'
}: {
  text: string;
  className?: string;
  ['data-testid']?: string;
}) => {
  return (
    <div
      className={`badge badge-secondary badge-pill font-weight-light ${
        className ? className : ''
      }`}
      data-testid={dataTestId}
    >
      {text}
    </div>
  );
};
