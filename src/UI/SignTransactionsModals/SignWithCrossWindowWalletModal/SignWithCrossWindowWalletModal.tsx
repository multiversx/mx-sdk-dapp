import React from 'react';
import { useNetworkStore } from 'lib/sdkDappCore';
import { SignModalPropsType } from 'types';
import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const SignWithCrossWindowWalletModal = (props: SignModalPropsType) => {
  const {
    network: { walletAddress }
  } = useNetworkStore();

  const description = props.error
    ? props.error
    : props.transactions?.length > 1
    ? 'Check your MultiversX Wallet to sign the transactions'
    : 'Check your MultiversX Wallet to sign the transaction';

  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    description,
    title: `Confirm on ${walletAddress}`
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
