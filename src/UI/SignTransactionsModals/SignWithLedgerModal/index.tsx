import React from 'react';
import { SignModalPropsType, WithClassname } from 'types';
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
