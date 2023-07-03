import React, { MouseEvent, ReactNode } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';

import { SignModalPropsType } from '../../../../types';

import styles from './signWaitingScreenModal.styles.scss';

export interface SignWaitingScreenModalPropsType extends SignModalPropsType {
  title?: ReactNode;
  description: ReactNode;
  providerIcon?: ReactNode;
}

export const SignWaitingScreenModal = ({
  handleClose,
  title,
  description,
  providerIcon,
  sessionId,
  className = 'dapp-extension-modal',
  modalContentClassName
}: SignWaitingScreenModalPropsType) => {
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

  const onClose = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleClose();
    clearTransactionsToSignWithWarning(sessionId);
  };

  return (
    <ModalContainer
      onClose={handleClose}
      modalConfig={{ modalDialogClassName: className }}
      modalInteractionConfig={{ openOnMount: true }}
    >
      <div
        className={classNames(styles.signWaitingScreen, modalContentClassName)}
      >
        <div onClick={onClose} className={styles.signWaitingScreenClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        {title}

        {providerIcon && (
          <div className={styles.signWaitingScreenImageWrapper}>
            {providerIcon}
          </div>
        )}

        <div className={styles.signWaitingScreenText}>{description}</div>
      </div>
    </ModalContainer>
  );
};
