import React from 'react';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { isContract } from 'utils/smartContracts';

interface ScAddressIconType {
  initiator: string;
  secondInitiator?: string;
}

export const ScAddressIcon = ({
  initiator,
  secondInitiator
}: ScAddressIconType) => {
  const showIcon = isContract(initiator) || isContract(secondInitiator ?? '');

  return showIcon ? (
    <FontAwesomeIcon
      data-testid='scIcon'
      title={'Smart Contract'}
      icon={faFileAlt}
      className={classNames(globalStyles.mr1, globalStyles.textSecondary)}
    />
  ) : null;
};
