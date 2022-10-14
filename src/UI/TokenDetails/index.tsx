import React, { Component } from 'react';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EgldIcon from 'assets/icons/EGLD.svg';
import { getEgldLabel } from 'utils/network/getEgldLabel';

import { WithClassnameType } from '../types';
import { Combined, Simple } from './TokenSymbol';

import styles from './tokenDetailsStyles.scss';

const getIdentifierWithoutNonce = (identifier: string) => {
  const tokenParts = identifier.split('-');

  return identifier.includes('-')
    ? `${tokenParts[0]}-${tokenParts[1]}`
    : identifier;
};

export interface TokenIconPropsType {
  token: string;
  combined?: boolean | undefined;
  small?: boolean | undefined;
  tokenAvatar?: string;
}

export interface TokenIconType extends TokenIconPropsType {
  symbol: string;
  label: string;
  icon: () => JSX.Element;
}

function getIcon(isEgldTransfer: boolean, tokenAvatar?: string) {
  if (tokenAvatar) {
    return <img className={styles.tokenSymbolCustomToken} src={tokenAvatar} />;
  }
  return isEgldTransfer ? <EgldIcon /> : <FontAwesomeIcon icon={faDiamond} />;
}

const getDetails = (token: string, tokenAvatar?: string): TokenIconType => {
  const egldLabel = getEgldLabel();
  const isEgldTransfer = token === egldLabel;

  return {
    token,
    symbol: token ? token.split('-')[0] : '',
    label: token,
    // eslint-disable-next-line react/display-name
    icon: () => getIcon(isEgldTransfer, tokenAvatar)
  };
};

export class TokenDetails extends Component {
  static Token = (props: TokenIconPropsType) => <>{props.token}</>;
  static Symbol = (props: TokenIconPropsType) => (
    <>
      {
        getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar)
          .symbol
      }
    </>
  );
  static Label = (props: TokenIconPropsType) => (
    <>
      {
        getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar)
          .label
      }
    </>
  );
  static Icon = (props: TokenIconPropsType & WithClassnameType) => {
    const Component: any =
      process.env.NODE_ENV !== 'test'
        ? getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar)
            .icon
        : () => null;

    return (
      <div className={props.className ?? 'dapp-token-details-icon'}>
        {props.combined ? (
          <Combined small={props.small}>
            <Component />
          </Combined>
        ) : (
          <Simple>
            <Component />
          </Simple>
        )}
      </div>
    );
  };
  render() {
    return null;
  }
}
