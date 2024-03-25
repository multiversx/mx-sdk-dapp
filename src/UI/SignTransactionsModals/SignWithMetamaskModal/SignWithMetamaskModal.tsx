import React from 'react';
import { SignModalPropsType } from 'types';

import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const SignWithMetamaskModal = (props: SignModalPropsType) => {
  const description = props.error
    ? props.error
    : props.transactions?.length > 1
    ? 'Check your Metamask to sign the transactions'
    : 'Check your Metamask to sign the transaction';

  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    description,
    title: 'Confirm on Metamask Wallet'
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
