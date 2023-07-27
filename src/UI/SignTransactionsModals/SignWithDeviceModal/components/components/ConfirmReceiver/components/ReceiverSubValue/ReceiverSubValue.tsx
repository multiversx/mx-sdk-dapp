import React from 'react';

import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { isContract } from 'utils';

import styles from './receiverSubValueStyles.scss';

export interface ReceiverSubValuePropsType {
  hasUsername: boolean;
  receiver: string;
}

export const ReceiverSubValue = ({
  hasUsername,
  receiver
}: ReceiverSubValuePropsType) => {
  const isSmartContract = isContract(receiver);

  if (hasUsername) {
    return (
      <span className={styles.subValue}>
        <Trim text={receiver} className={styles.subValueTrim} />
        <CopyButton text={receiver} className={styles.subValueCopy} />
      </span>
    );
  }

  if (isSmartContract) {
    return (
      <span className={styles.subValue}>
        <Trim text='Smart Contract Call' className={styles.subValueTrim} />

        <ExplorerLink
          page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
          className={styles.subValueExplorer}
        />
      </span>
    );
  }

  return (
    <span className={styles.subValue}>
      <Trim text='View in Explorer' className={styles.subValueTrim} />

      <ExplorerLink
        page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
        className={styles.subValueExplorer}
      />
    </span>
  );
};
