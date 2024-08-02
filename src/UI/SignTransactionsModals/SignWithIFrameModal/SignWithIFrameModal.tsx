import React from 'react';
import { SignModalPropsType } from 'types';

import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const SignWithIFrameModal = (props: SignModalPropsType) => {
  const description = props.error
    ? props.error
    : props.transactions?.length > 1
    ? 'Check your Wallet Window to sign the transactions'
    : 'Check your Wallet Window to sign the transaction';

  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    description,
    title: 'Confirm on Metamask Extension'
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
