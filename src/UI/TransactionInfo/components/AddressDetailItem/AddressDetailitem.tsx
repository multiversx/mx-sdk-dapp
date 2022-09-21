import React from 'react';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { ScAddressIcon } from 'UI/TransactionsTable/components';
import { Trim } from 'UI/Trim';
import { addressIsValid } from 'utils';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

export const AddressDetailItem = ({ address }: { address: string }) => {
  return (
    <DetailItem title='Address' noBorder>
      <div className='d-flex align-items-center'>
        <ScAddressIcon initiator={address} />
        {addressIsValid(address) && (
          <>
            <ExplorerLink
              page={explorerUrlBuilder.accountDetails(address)}
              className='trim-wrapper'
            >
              <Trim text={address} />
            </ExplorerLink>
            <CopyButton className='mr-2' text={address} />
          </>
        )}
      </div>
    </DetailItem>
  );
};
