import React from 'react';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { isContract } from 'utils/smartContracts';

export interface ScAddressIconPropsType {
  initiator: string;
  secondInitiator?: string;
}

const ScAddressIconComponent = ({
  initiator,
  secondInitiator,
  globalStyles
}: ScAddressIconPropsType & WithStylesImportType) => {
  const showIcon = isContract(initiator) || isContract(secondInitiator ?? '');

  if (showIcon) {
    return (
      <FontAwesomeIcon
        title='Smart Contract'
        icon={faFileAlt}
        className={classNames(globalStyles?.mr1, globalStyles?.textSecondary)}
        data-testid={DataTestIdsEnum.scIcon}
      />
    );
  }

  return null;
};

export const ScAddressIcon = withStyles(ScAddressIconComponent, {});
