import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../../types';

export interface DappModalFooterPropsType extends WithClassnameType {
  visible?: boolean;
  footerText?: string;
  customFooter?: JSX.Element;
}

const DappModalFooterComponent = ({
  visible,
  customFooter,
  className,
  footerText,
  styles
}: DappModalFooterPropsType & WithStylesImportType) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={classNames(styles?.dappModalFooter, className)}>
      {customFooter ?? <div>{footerText}</div>}
    </div>
  );
};

export const DappModalFooter = withStyles(DappModalFooterComponent, {
  local: () => import('UI/DappModal/dappModalStyles.scss'),
  localSync: () => require('UI/DappModal/dappModalStyles.scss').default
});
