import React from 'react';
import classNames from 'classnames';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { isContract } from 'utils/smartContracts';

import globalStyles from 'assets/sass/main.scss';

interface ScAddressIconPropsTypes {
  initiator: string;
  secondInitiator?: string;
}

const ScAddressIcon = (props: ScAddressIconPropsTypes) => {
  const { initiator, secondInitiator } = props;
  const showIcon = isContract(initiator) || isContract(secondInitiator ?? '');

  if (showIcon) {
    return (
      <FontAwesomeIcon
        title='Smart Contract'
        icon={faFileAlt}
        className={classNames(globalStyles.mr1, globalStyles.textSecondary)}
      />
    );
  }

  return null;
};

export { ScAddressIcon };
