import React from 'react';
import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { isContract } from 'utils';

export interface ReceiverSubValuePropsType {
  hasUsername: boolean;
  receiver: string;
}

const ReceiverSubValueComponent = ({
  hasUsername,
  receiver,
  styles
}: ReceiverSubValuePropsType & WithStylesImportType) => {
  const isSmartContract = isContract(receiver);

  if (hasUsername) {
    return (
      <span className={styles?.subValue}>
        <Trim text={receiver} className={styles?.subValueTrim} />
        <CopyButton text={receiver} className={styles?.subValueCopy} />
      </span>
    );
  }

  if (isSmartContract) {
    return (
      <span className={styles?.subValue}>
        <Trim text='Smart Contract' className={styles?.subValueTrim} />

        <ExplorerLink
          page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
          className={styles?.subValueExplorer}
        />
      </span>
    );
  }

  return (
    <span className={styles?.subValue}>
      <Trim text='View in Explorer' className={styles?.subValueTrim} />

      <ExplorerLink
        page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
        className={styles?.subValueExplorer}
      />
    </span>
  );
};

export const ReceiverSubValue = withStyles(ReceiverSubValueComponent, {
  local: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver/components/ReceiverSubValue/receiverSubValueStyles.scss'
    )
});
