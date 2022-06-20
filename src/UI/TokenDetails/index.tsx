import React from 'react';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EgldIcon from 'assets/icons/EGLD.svg';
import { getEgldLabel } from 'utils';
import { Simple, Combined } from './TokenSymbol';

const getIdentifierWithoutNonce = (identifier: string) => {
  const tokenParts = identifier.split('-');
  return identifier.includes('-')
    ? `${tokenParts[0]}-${tokenParts[1]}`
    : identifier;
};

type TokenIconProps = {
  token: string;
  combined?: boolean | undefined;
  small?: boolean | undefined;
  tokenAvatar?: string;
};
type TokenIconType = TokenIconProps & {
  symbol: string;
  label: string;
  icon: () => JSX.Element;
};

function getIcon(isEgldTransfer: boolean, tokenAvatar?: string) {
  if (tokenAvatar) {
    return <img className='token-symbol-custom-token' src={tokenAvatar} />;
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

export default class TokenDetails extends React.Component {
  static Token = (props: TokenIconProps) => (
    <React.Fragment>{props.token}</React.Fragment>
  );
  static Symbol = (props: TokenIconProps) => (
    <React.Fragment>
      {
        getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar)
          .symbol
      }
    </React.Fragment>
  );
  static Label = (props: TokenIconProps) => (
    <React.Fragment>
      {
        getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar)
          .label
      }
    </React.Fragment>
  );
  static Icon = (props: TokenIconProps) => {
    const Component: any =
      process.env.NODE_ENV !== 'test'
        ? getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar)
            .icon
        : () => null;

    return (
      <div>
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
