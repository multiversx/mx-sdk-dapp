import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { ModalContainer } from 'UI/ModalContainer';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import styles from './ledgerLoginContainerStyles.scss';

import { LedgerLoginContent } from './LedgerLoginContent';
import { InnerLedgerComponentsClassesType } from './types';

export interface LedgerLoginContainerPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  onClose?: () => void;
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
  showLoginContent?: boolean;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
  wrapContentInsideModal?: boolean;
}

export const LedgerLoginContainer = (props: LedgerLoginContainerPropsType) => {
  const { onClose, className, showLoginContent, wrapContentInsideModal } =
    props;

  if (showLoginContent === false) {
    return null;
  }

  if (!wrapContentInsideModal) {
    return <LedgerLoginContent {...props} />;
  }

  return (
    <ModalContainer
      modalConfig={{
        headerText: 'Login with ledger',
        showHeader: true,
        modalContentClassName: styles.ledgerModalDialogContent,
        modalHeaderClassName: styles.ledgerModalHeader,
        modalHeaderTextClassName: styles.ledgerModalHeaderText,
        modalCloseButtonClassName: styles.ledgerModalCloseButton,
        modalBodyClassName: styles.ledgerModalBody,
        modalDialogClassName: classNames(styles.ledgerLoginContainer, className)
      }}
      onClose={onClose}
    >
      <LedgerLoginContent {...props} />
    </ModalContainer>
  );
};
