import React, { MouseEvent } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';

const SignWithOperaModalComponent = ({
  handleClose,
  error,
  transactions,
  sessionId,
  className = 'dapp-opera-modal',
  modalContentClassName,
  globalStyles,
  styles
}: SignModalPropsType & WithStylesImportType) => {
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

  const classes = {
    wrapper: classNames(styles?.modalContainer, styles?.opera, className),
    icon: globalStyles?.textWhite,
    closeBtn: classNames(
      globalStyles?.btn,
      globalStyles?.btnCloseLink,
      globalStyles?.btnDark,
      globalStyles?.textWhite,
      globalStyles?.mt2
    )
  };

  const description = error
    ? error
    : transactions && transactions.length > 1
    ? 'Check your Opera Crypto Wallet to sign the transactions'
    : 'Check your Opera Crypto Wallet to sign the transaction';

  const close = (event: MouseEvent) => {
    event.preventDefault();
    handleClose();
    clearTransactionsToSignWithWarning(sessionId);
  };

  return (
    <ModalContainer
      onClose={handleClose}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
      visible
    >
      <PageState
        icon={error ? faTimes : null}
        iconClass={classes.icon}
        className={modalContentClassName}
        iconBgClass={error ? globalStyles?.bgDanger : globalStyles?.bgWarning}
        iconSize='3x'
        title='Confirm on Opera Crypto Wallet'
        description={description}
        action={
          <button
            id='closeButton'
            data-testid={DataTestIdsEnum.closeButton}
            onClick={close}
            className={classes.closeBtn}
          >
            Close
          </button>
        }
      />
    </ModalContainer>
  );
};

export const SignWithOperaModal = withStyles(SignWithOperaModalComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithOperaModal/signWithOperaModalStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithOperaModal/signWithOperaModalStyles.scss')
      .default
});
