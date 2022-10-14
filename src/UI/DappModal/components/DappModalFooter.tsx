import React from 'react';
import classNames from 'classnames';

import { WithClassnameType } from '../../types';

import styles from '../dappModalStyles.scss';

export interface DappModalFooterPropsType extends WithClassnameType {
  visible?: boolean;
  footerText?: string;
  customFooter?: JSX.Element;
}

export const DappModalFooter = ({
  visible,
  customFooter,
  className,
  footerText
}: DappModalFooterPropsType) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={classNames(styles.dappModalFooter, className)}>
      {customFooter ?? <div>{footerText}</div>}
    </div>
  );
};
