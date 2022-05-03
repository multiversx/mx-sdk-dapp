import React from 'react';

const Dot = ({ color, dataTestId }: { color: string; dataTestId?: string }) => {
  return <span className={`dot ${color}`} data-testid={dataTestId} />;
};
export default Dot;
