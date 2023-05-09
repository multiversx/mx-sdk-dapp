import React from 'react';
import { SignModalPropsType } from 'types';

import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const SignWithExtensionModal = (props: SignModalPropsType) => {
  const description = props.error
    ? props.error
    : props.transactions?.length > 1
    ? 'Check your MultiversX Wallet Extension to sign the transactions'
    : 'Check your MultiversX Wallet Extension to sign the transaction';

  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    description,
    title: 'Confirm on MultiversX DeFi Wallet'
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
