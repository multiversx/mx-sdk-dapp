import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../../types';

export interface DappModalHeaderPropsType extends WithClassnameType {
  visible?: boolean;
  headerText?: string;
  customHeader?: JSX.Element | string;
  closeButtonClassName?: string;
  headerTextClassName?: string;
  onHide?: () => void;
}

const DappModalHeaderComponent = ({
  visible,
  headerText,
  customHeader,
  className,
  closeButtonClassName,
  headerTextClassName,
  onHide,
  globalStyles,
  styles
}: DappModalHeaderPropsType & WithStylesImportType) => {
  if (!visible) {
    return null;
  }

  return customHeader ? (
    <div className={classNames(styles?.dappModalHeader, className)}>
      {customHeader}
    </div>
  ) : (
    <div className={classNames(styles?.dappModalHeader, className)}>
      <div
        className={classNames(styles?.dappModalHeaderText, headerTextClassName)}
      >
        {headerText}
      </div>

      <button
        onClick={onHide}
        className={classNames(
          styles?.dappModalCloseButton,
          globalStyles?.btn,
          globalStyles?.btnLight,
          closeButtonClassName
        )}
      >
        <FontAwesomeIcon size='lg' icon={faTimes} />
      </button>
    </div>
  );
};

export const DappModalHeader = withStyles(DappModalHeaderComponent, {
  ssrStyles: () => import('UI/DappModal/dappModalStyles.scss'),
  clientStyles: () => require('UI/DappModal/dappModalStyles.scss').default
});
