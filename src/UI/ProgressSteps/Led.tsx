import React from 'react';

const Led = ({
  color,
  'data-testid': dataTestId
}: {
  color: string;
  'data-testid'?: string;
}) => {
  return <span className={`led ${color}`} data-testid={dataTestId} />;
};
export default Led;
