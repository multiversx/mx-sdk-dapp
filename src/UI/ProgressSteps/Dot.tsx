import React from 'react';

const Dot = ({
  color,
  'data-testid': dataTestId
}: {
  color: string;
  'data-testid'?: string;
}) => {
  return <span className={`dot ${color}`} data-testid={dataTestId} />;
};
export default Dot;
