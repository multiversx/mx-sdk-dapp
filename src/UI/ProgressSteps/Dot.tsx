import React from 'react';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';

const Dot = ({
  color,
  'data-testid': dataTestId
}: {
  color: string;
  'data-testid'?: string;
}) => {
  return <span className={`dot ${color}`} data-testid={dataTestId} />;
};
export default withClassNameWrapper(Dot);
