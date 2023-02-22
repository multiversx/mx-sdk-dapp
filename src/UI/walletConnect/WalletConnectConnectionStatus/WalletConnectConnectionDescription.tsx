import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { WithClassnameType } from '../../types';

export interface WalletConnectConnectionStatusType {
  icon?: IconProp | IconDefinition | null;
  iconClassName?: string;
  description?: string | ReactNode;
  details?: string | ReactNode;
}

export const WalletConnectConnectionDescription = ({
  icon,
  iconClassName,
  description,
  details,
  className
}: WalletConnectConnectionStatusType & WithClassnameType) => {
  const holderClassName = classNames(
    globalStyles.dFlex,
    globalStyles.flexColumn,
    globalStyles.alignItemsCenter,
    globalStyles.justifyContentCenter,
    globalStyles.my3,
    className
  );
  const textClassName = classNames(
    globalStyles.dFlex,
    globalStyles.alignItemsCenter,
    globalStyles.mr2
  );

  return (
    <div className={holderClassName}>
      <div className={textClassName}>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={classNames(globalStyles.mr2, iconClassName)}
          />
        )}
        {description}
      </div>
      {details}
    </div>
  );
};
