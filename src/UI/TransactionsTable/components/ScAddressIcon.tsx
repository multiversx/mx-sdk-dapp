import React from 'react';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { isContract } from 'utils/smartContracts';

export interface ScAddressIconPropsType {
  initiator: string;
  secondInitiator?: string;
}

const ScAddressIcon = ({
  initiator,
  secondInitiator
}: ScAddressIconPropsType) => {
  const showIcon = isContract(initiator) || isContract(secondInitiator ?? '');

  if (showIcon) {
    return (
      <FontAwesomeIcon
        title='Smart Contract'
        icon={faFileAlt}
        className={classNames(globalStyles.mr1, globalStyles.textSecondary)}
        data-testid='scIcon'
      />
    );
  }

  return null;
};

export { ScAddressIcon };
