import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { isContract } from 'components/TransactionsInterpreter/helpers/isContract';
import { NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS } from 'constants/transaction-interpreter';

interface ScAddressIconType {
  initiator: string;
  secondInitiator?: string;
  numberOfCharactersForScAddress?: number;
}

export const ScAddressIcon = ({
  initiator,
  secondInitiator,
  numberOfCharactersForScAddress = NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS
}: ScAddressIconType) => {
  const showIcon =
    isContract(initiator, numberOfCharactersForScAddress) ||
    isContract(secondInitiator, numberOfCharactersForScAddress);

  return showIcon ? (
    <FontAwesomeIcon
      title={'Smart Contract'}
      icon={faFileAlt}
      className='mr-1 text-secondary'
    />
  ) : null;
};
