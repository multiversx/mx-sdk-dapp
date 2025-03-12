import React, { MouseEvent } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { useCancelActionAndDispose } from 'hooks/transactions/useCancelActionAndDispose';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';

export interface SignWaitingScreenModalPropsType extends SignModalPropsType {
  title: string;
  description: string;
}

const SignWaitingScreenModalComponent = ({
  handleClose,
  error,
  title,
  description,
  sessionId,
  className = 'dapp-extension-modal',
  modalContentClassName,
  globalStyles,
  styles
}: SignWaitingScreenModalPropsType & WithStylesImportType) => {
  const cancelAction = useCancelActionAndDispose();

  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

  const classes = {
    wrapper: classNames(styles?.modalContainer, styles?.extension, className),
    icon: globalStyles?.textWhite,
    closeBtn: classNames(
      globalStyles?.btn,
      globalStyles?.btnCloseLink,
      globalStyles?.btnDark,
      globalStyles?.textWhite,
      globalStyles?.mt2
    )
  };

  const close = async (event: MouseEvent) => {
    event.preventDefault();
    clearTransactionsToSignWithWarning(sessionId);
    await cancelAction();
    handleClose();
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
        title={title}
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

export const SignWaitingScreenModal = withStyles(
  SignWaitingScreenModalComponent,
  {
    ssrStyles: () =>
      import(
        'UI/SignTransactionsModals/components/SignWaitingScreenModal/signWaitingScreenModal.styles.scss'
      ),
    clientStyles: () =>
      require('UI/SignTransactionsModals/components/SignWaitingScreenModal/signWaitingScreenModal.styles.scss')
        .default
  }
);
