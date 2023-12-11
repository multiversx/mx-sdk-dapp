import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CustomToastPropsType } from '../customToast.types';
import { useMemoizedCloseButton } from '../helpers';

const SimpleToastComponent = ({
  onDelete,
  message,
  messageComponent,
  CustomCloseButton,
  className = 'dapp-custom-toast',
  toastId,
  styles: wrapperStyles
}: CustomToastPropsType & WithStylesImportType) => {
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
        {messageComponent ? messageComponent : message}
      </>
    </div>
  );
};

export const SimpleToast = withStyles(SimpleToastComponent, {
  ssrStyles: () =>
    import('UI/TransactionsToastList/transactionsToastList.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsToastList/transactionsToastList.styles.scss')
      .default
});
