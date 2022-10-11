import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import styles from './styles.scss';

export interface ResultWrapperPropsType {
  children: JSX.Element | JSX.Element[] | string;
  label: string;
}

const ResultWrapper = ({ label, children }: ResultWrapperPropsType) => (
  <div className={classNames(globalStyles.row, styles.scResultWrapper)}>
    <div className={classNames(globalStyles.colSm2, styles.label)}>{label}</div>

    <div className={classNames(globalStyles.colSm10, styles.data)}>
      {children}
    </div>
  </div>
);

export default ResultWrapper;
