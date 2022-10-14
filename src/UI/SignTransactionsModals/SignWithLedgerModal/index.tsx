import React from 'react';
import { SignModalPropsType } from 'types';
import { SignWithDeviceModal } from '../SignWithDeviceModal';

export const SignWithLedgerModal = (props: SignModalPropsType) => {
  debugger;
  return (
    <SignWithDeviceModal
      {...props}
      title={props.title || 'Confirm on Ledger'}
      className={props.className || 'dapp-ledger-modal'}
    />
  );
};
