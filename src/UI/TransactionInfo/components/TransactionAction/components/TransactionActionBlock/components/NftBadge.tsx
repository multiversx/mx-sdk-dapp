import React from 'react';

export const NftBadge = ({
  text,
  className
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`badge badge-secondary badge-pill font-weight-light ${
        className ? className : ''
      }`}
    >
      {text}
    </div>
  );
};
