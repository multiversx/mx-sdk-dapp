import React from 'react';
import classNames from 'classnames';

import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import MultiversXIconSimple from 'assets/icons/mvx-icon-simple.svg';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';

import { trimReceiverDomain } from '../../helpers';
import styles from './receiverValueStyles.scss';

export interface ReceiverValuePropsType {
  hasUsername: boolean;
  receiverValue: string;
  receiverAddress: string;
}

export const ReceiverValue = ({
  hasUsername,
  receiverValue,
  receiverAddress
}: ReceiverValuePropsType) => {
  if (hasUsername) {
    return (
      <span className={classNames(styles.receiverValue, styles.shrunk)}>
        <MultiversXIconSimple className={styles.receiverValueIcon} />
        {trimReceiverDomain(receiverValue)}

        <ExplorerLink
          page={`/${ACCOUNTS_ENDPOINT}/${receiverAddress}`}
          className={styles.receiverValueExplorer}
        />
      </span>
    );
  }

  return (
    <span className={styles.receiverValue}>
      <Trim text={receiverAddress} />
      <CopyButton text={receiverAddress} className={styles.receiverValueCopy} />
    </span>
  );
};
