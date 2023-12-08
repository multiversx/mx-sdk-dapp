import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { AssetType } from 'types/account.types';
import { Trim } from 'UI/Trim/Trim';

export interface AccountNamePropsType {
  address: string;
  assets?: AssetType;
  color?: 'muted' | 'secondary' | string;
  ['data-testid']?: string;
}

const AccountNameComponent = ({
  address,
  assets,
  color,
  globalStyles,
  ...rest // data-testid
}: AccountNamePropsType & WithStylesImportType) => {
  if (assets && assets.name) {
    const name = assets.name.replace(/\p{Emoji}/gu, '');
    const description = `${name} (${address})`;
    return (
      <span
        className={classNames(globalStyles?.textTruncate, {
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

export const AccountName = withStyles(AccountNameComponent, {});
