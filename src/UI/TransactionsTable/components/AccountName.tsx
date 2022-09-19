import * as React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { AssetType } from 'types/account.types';
import { Trim } from '../../Trim';

export type AccountNamePropsType = {
  address: string;
  assets?: AssetType;
  color?: 'muted' | 'secondary' | string;
  ['data-testid']?: string;
};

export const AccountName = ({
  address,
  assets,
  color,
  ...rest // data-testid
}: AccountNamePropsType) => {
  if (assets && assets.name) {
    const name = assets.name.replace(/\p{Emoji}/gu, '');
    const description = `${name} (${address})`;
    return (
      <span
        className={classNames(globalStyles.textTruncate, {
          [`text-${color}`]: color
        })}
        {...rest}
        title={description}
      >
        {name}
      </span>
    );
  }

  return <Trim text={address} color={color} {...rest} />;
};
