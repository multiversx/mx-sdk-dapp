import React, { MouseEvent } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { DataTestIdsEnum } from 'constants/index';
import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';

import styles from './signWaitingScreenModal.styles.scss';

export interface SignWaitingScreenModalPropsType extends SignModalPropsType {
  title: string;
  description: string;
}

export const SignWaitingScreenModal = ({
  handleClose,
  error,
  title,
  description,
  sessionId,
  className = 'dapp-extension-modal',
  modalContentClassName
}: SignWaitingScreenModalPropsType) => {
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

  const classes = {
    wrapper: classNames(styles.modalContainer, styles.extension, className),
    icon: globalStyles.textWhite,
    closeBtn: classNames(
      globalStyles.btn,
      globalStyles.btnCloseLink,
      globalStyles.btnDark,
      globalStyles.textWhite,
      globalStyles.mt2
    )
  };

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
        iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
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
