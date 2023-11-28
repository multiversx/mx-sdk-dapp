import React from 'react';
import classNames from 'classnames';
import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import MultiversXIconSimple from 'assets/icons/mvx-icon-simple.svg';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { trimUsernameDomain } from 'hooks/account/helpers';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';

export interface ReceiverValuePropsType {
  hasUsername: boolean;
  receiverValue: string;
  receiverAddress: string;
}

const ReceiverValueComponent = ({
  hasUsername,
  receiverValue,
  receiverAddress,
  styles
}: ReceiverValuePropsType & WithStylesImportType) => {
  if (hasUsername) {
    return (
      <span className={classNames(styles?.receiverValue, styles?.shrunk)}>
        <MultiversXIconSimple className={styles?.receiverValueIcon} />
        {trimUsernameDomain(receiverValue)}

        <ExplorerLink
          page={`/${ACCOUNTS_ENDPOINT}/${receiverAddress}`}
          className={styles?.receiverValueExplorer}
        />
      </span>
    );
  }

  return (
    <span className={styles?.receiverValue}>
      <Trim text={receiverAddress} />
      <CopyButton
        text={receiverAddress}
        className={styles?.receiverValueCopy}
      />
    </span>
  );
};

export const ReceiverValue = withStyles(ReceiverValueComponent, {
  local: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver/components/ReceiverValue/receiverValueStyles.scss'
    )
});
