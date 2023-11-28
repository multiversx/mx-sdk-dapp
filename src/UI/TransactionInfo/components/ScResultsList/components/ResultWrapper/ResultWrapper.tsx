import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';

export interface ResultWrapperPropsType {
  children: ReactNode;
  label: string;
}

const ResultWrapperComponent = ({
  label,
  children,
  globalStyles,
  styles
}: ResultWrapperPropsType & WithStylesImportType) => (
  <div className={classNames(globalStyles?.row, styles?.scResultWrapper)}>
    <div className={classNames(globalStyles?.colSm2, styles?.label)}>
      {label}
    </div>

    <div className={classNames(globalStyles?.colSm10, styles?.data)}>
      {children}
    </div>
  </div>
);

const ResultWrapper = withStyles(ResultWrapperComponent, {
  local: () =>
    import(
      'UI/TransactionInfo/components/ScResultsList/components/ResultWrapper/styles.scss'
    )
});

export default ResultWrapper;
