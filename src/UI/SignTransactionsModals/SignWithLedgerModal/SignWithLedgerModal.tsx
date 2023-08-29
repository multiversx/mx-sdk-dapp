import React from 'react';
import { useGetAccountInfo, useGetLoginInfo } from 'hooks';
import { LoginMethodsEnum, SignModalPropsType } from 'types';
import { getLedgerVersionOptions } from 'utils/operations/ledger';
import { SignWithDeviceModal } from '../SignWithDeviceModal';
import { LedgerGuardianSigningModalError } from './LedgerGuardianSigningModalError';

export const SignWithLedgerModal = (props: SignModalPropsType) => {
  const {
    ledgerAccount,
    account: { isGuarded }
  } = useGetAccountInfo();
  const { loginMethod } = useGetLoginInfo();

  const { ledgerWithGuardians } = getLedgerVersionOptions(
    ledgerAccount?.version ?? ''
  );

  const isProviderAllowed =
    loginMethod === LoginMethodsEnum.ledger ? ledgerWithGuardians : true;

  if (isGuarded && !isProviderAllowed) {
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
