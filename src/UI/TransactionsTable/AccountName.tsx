import * as React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { AssetType } from 'types/account.types';
import { Trim } from '../Trim';

export type AccountNamePropsType = {
  address: string;
  assets?: AssetType;
  dataTestId?: string;
  color?: 'muted' | 'secondary' | string;
};

export const AccountName = ({
  address,
  assets,
  dataTestId,
  color
}: AccountNamePropsType) => {
  if (assets && assets.name) {
    const name = assets.name.replace(/\p{Emoji}/gu, '');
    const description = `${name} (${address})`;
    return (
      <span
        className={classNames(globalStyles.textTruncate, {
          [`text-${color}`]: color
        })}
        {...(dataTestId
          ? {
              dataTestId
            }
          : {})}
        title={description}
      >
        {name}
      </span>
    );
  }

  return (
    <Trim
      text={address}
      color={color}
      {...(dataTestId
        ? {
            dataTestId
          }
        : {})}
    />
  );
};
