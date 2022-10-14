import React from 'react';

import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { ScAddressIcon } from 'UI/TransactionsTable/components';
import { Trim } from 'UI/Trim';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';

import { DetailItem } from '../DetailItem';

import styles from './styles.scss';

export const AddressDetailItem = ({ address }: { address: string }) => (
  <DetailItem title='Address' noBorder={true}>
    <div className={styles.addressDetailItem}>
      <ScAddressIcon initiator={address} />

      {addressIsValid(address) && (
        <>
          <ExplorerLink
            page={explorerUrlBuilder.accountDetails(address)}
            className={styles.explorer}
          >
            <Trim text={address} />
          </ExplorerLink>

          <CopyButton text={address} className={styles.copy} />
        </>
      )}
    </div>
  </DetailItem>
);
