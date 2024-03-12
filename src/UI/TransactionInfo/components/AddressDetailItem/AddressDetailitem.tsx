import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { ScAddressIcon } from 'UI/TransactionsTable/components';
import { Trim } from 'UI/Trim';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

const AddressDetailItemComponent = ({
  address,
  styles
}: { address: string } & WithStylesImportType) => (
  <DetailItem title='Address' noBorder>
    <div className={styles?.addressDetailItem}>
      <ScAddressIcon initiator={address} />

      {addressIsValid(address) && (
        <>
          <ExplorerLink
            page={explorerUrlBuilder.accountDetails(address)}
            className={styles?.explorer}
          >
            <Trim text={address} />
          </ExplorerLink>

          <CopyButton text={address} className={styles?.copy} />
        </>
      )}
    </div>
  </DetailItem>
);

export const AddressDetailItem = withStyles(AddressDetailItemComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/AddressDetailItem/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/AddressDetailItem/styles.scss')
      .default
});
