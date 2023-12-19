import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../../types';

export interface DappModalBodyPropsType extends WithClassnameType {
  children?: ReactNode;
}

const DappModalBodyComponent = ({
  className,
  children,
  styles
}: DappModalBodyPropsType & WithStylesImportType) => {
  return (
    <div className={classNames(styles?.dappModalBody, className)}>
      {children}
    </div>
  );
};

export const DappModalBody = withStyles(DappModalBodyComponent, {
  ssrStyles: () => import('UI/DappModal/dappModalStyles.scss'),
  clientStyles: () => require('UI/DappModal/dappModalStyles.scss').default
});
