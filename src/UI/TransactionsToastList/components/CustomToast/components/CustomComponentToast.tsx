import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ComponentIconToastPropsType } from '../customToast.types';
import { useMemoizedCloseButton } from '../helpers';

const CustomComponentToastComponent = ({
  onDelete,
  message,
  component,
  CustomCloseButton,
  className = 'dapp-custom-toast',
  toastId,
  styles: wrapperStyles
}: ComponentIconToastPropsType & WithStylesImportType) => {
  const closeButton = useMemoizedCloseButton({ onDelete, CustomCloseButton });

  return (
    <div
      id={toastId}
      className={classNames(
        wrapperStyles?.toasts,
        wrapperStyles?.toastWrapper,
        className
      )}
    >
      <>
        {closeButton}
        {component ? component() : message}
      </>
    </div>
  );
};

export const CustomComponentToast = withStyles(CustomComponentToastComponent, {
  ssrStyles: () =>
    import('UI/TransactionsToastList/transactionsToastList.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsToastList/transactionsToastList.styles.scss')
      .default
});
