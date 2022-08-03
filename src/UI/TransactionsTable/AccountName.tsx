import * as React from 'react';
import { Trim } from '../Trim';
import { AssetType } from 'components/TransactionsInterpreter/helpers/types';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

export const AccountName = ({
  address,
  assets,
  dataTestId,
  color
}: {
  address: string;
  assets?: AssetType;
  dataTestId?: string;
  color?: 'muted' | 'secondary';
}) => {
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
