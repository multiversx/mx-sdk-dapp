import React from 'react';
import { getWrapperClassname } from 'utils';

export function DappCoreUIWrapper({ children }: { children: any }) {
  const className = getWrapperClassname();
  return <div className={className}>{children}</div>;
}

export default DappCoreUIWrapper;
