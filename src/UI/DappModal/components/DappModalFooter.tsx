import React from 'react';
import classNames from 'classnames';
import { WithClassnameType } from '../../types';
import styles from '../dappModalStyles.scss';

type DappModalFooterProps = {
  visible?: boolean;
  footerText?: string;
  customFooter?: JSX.Element;
} & WithClassnameType;

export const DappModalFooter: React.FC<DappModalFooterProps> = ({
  visible,
  customFooter,
  className,
  footerText
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={classNames(styles.dappModalFooter, className)}>
      {customFooter ?? <div>{footerText}</div>}
    </div>
  );
};
