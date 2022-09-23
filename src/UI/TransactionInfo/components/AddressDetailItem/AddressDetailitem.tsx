import React from 'react';
import classNames from 'classnames';

import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { ScAddressIcon } from 'UI/TransactionsTable/components';
import { Trim } from 'UI/Trim';
import { addressIsValid } from 'utils';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

import globalStyles from 'assets/sass/main.scss';

interface AddressDetailItemPropsTypes {
  address: string;
}

export const AddressDetailItem = (props: AddressDetailItemPropsTypes) => {
  const { address } = props;

  return (
    <DetailItem title='Address' noBorder>
      <div
        className={classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        <ScAddressIcon initiator={address} />

        {addressIsValid(address) && (
          <>
            <ExplorerLink
              page={explorerUrlBuilder.accountDetails(address)}
              className={globalStyles.trimWrapper}
            >
              <Trim text={address} />
            </ExplorerLink>

            <CopyButton className={globalStyles.mr2} text={address} />
          </>
        )}
      </div>
    </DetailItem>
  );
};
