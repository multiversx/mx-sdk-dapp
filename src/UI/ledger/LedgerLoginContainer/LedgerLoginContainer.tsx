import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ModalContainer } from 'UI/ModalContainer';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
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
  showLoginModal?: boolean;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
  wrapContentInsideModal?: boolean;
}

const LedgerLoginContainerComponent = (
  props: LedgerLoginContainerPropsType & WithStylesImportType
) => {
  const {
    onClose,
    className,
    showLoginContent,
    wrapContentInsideModal,
    styles
  } = props;

  if (showLoginContent === false) {
    return null;
  }

  if (!wrapContentInsideModal) {
    return <LedgerLoginContent {...props} />;
  }

  return (
    <ModalContainer
      visible={props.showLoginModal}
      modalConfig={{
        headerText: 'Login with ledger',
        showHeader: true,
        modalContentClassName: styles?.ledgerModalDialogContent,
        modalHeaderClassName: styles?.ledgerModalHeader,
        modalHeaderTextClassName: styles?.ledgerModalHeaderText,
        modalCloseButtonClassName: styles?.ledgerModalCloseButton,
        modalBodyClassName: styles?.ledgerModalBody,
        modalDialogClassName: classNames(
          styles?.ledgerLoginContainer,
          className
        )
      }}
      onClose={onClose}
    >
      <LedgerLoginContent {...props} />
    </ModalContainer>
  );
};

export const LedgerLoginContainer = withStyles(LedgerLoginContainerComponent, {
  local: import(
    'UI/ledger/LedgerLoginContainer/ledgerLoginContainerStyles.scss'
  )
});
