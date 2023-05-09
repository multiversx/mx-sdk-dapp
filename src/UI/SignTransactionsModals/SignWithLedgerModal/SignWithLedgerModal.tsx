import React from 'react';
import { useGetAccountInfo } from 'hooks';
import { SignModalPropsType } from 'types';
import { getLedgerVersionOptions } from 'utils';
import { SignWithDeviceModal } from '../SignWithDeviceModal';
import { LedgerGuardianSigningModalError } from './LedgerGuardianSigningModalError';

export const SignWithLedgerModal = (props: SignModalPropsType) => {
  const {
    ledgerAccount,
    account: { isGuarded }
  } = useGetAccountInfo();
  const { ledgerWithGuardians } = getLedgerVersionOptions(
    ledgerAccount?.version ?? ''
  );

  if (isGuarded && !ledgerWithGuardians) {
    return <LedgerGuardianSigningModalError {...props} />;
  }

  return (
    <SignWithDeviceModal
      {...props}
      title={props.title || 'Confirm on Ledger'}
      className={props.className || 'dapp-ledger-modal'}
    />
  );
};
