import React from 'react';
import { SignModalPropsType } from 'types';
import { WithClassname } from 'UI/types/with-classname';
import { SignWithDeviceModal } from '../SignWithDeviceModal';

export const SignWithLedgerModal = (
  props: SignModalPropsType & WithClassname
) => {
  return (
    <SignWithDeviceModal
      {...props}
      title={props.title || 'Confirm on Ledger'}
      className={props.className || 'dapp-ledger-modal'}
    />
  );
};
