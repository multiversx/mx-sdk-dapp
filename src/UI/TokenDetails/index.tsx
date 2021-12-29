import * as React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
};
type TokenIconType = TokenIconProps & {
  symbol: string;
  label: string;
  icon: React.ReactNode;
};

const getDetails = (token: string): TokenIconType => {
  return {
    token,
    symbol: token ? token.split('-')[0] : '',
    label: token,
    // eslint-disable-next-line react/display-name
    icon: () => <FontAwesomeIcon icon={faStar} />
  };
};

export default class TokenDetails extends React.Component {
  static Token = (props: TokenIconProps) => (
    <React.Fragment>{props.token}</React.Fragment>
  );
  static Symbol = (props: TokenIconProps) => (
    <React.Fragment>
      {getDetails(getIdentifierWithoutNonce(props.token)).symbol}
    </React.Fragment>
  );
  static Label = (props: TokenIconProps) => (
    <React.Fragment>
      {getDetails(getIdentifierWithoutNonce(props.token)).label}
    </React.Fragment>
  );
  static Icon = (props: TokenIconProps) => {
    const Component: any =
      process.env.NODE_ENV !== 'test'
        ? getDetails(getIdentifierWithoutNonce(props.token)).icon
        : () => null;

    return (
      <React.Fragment>
        {props.combined ? (
          <Combined small={props.small}>
            <Component />
          </Combined>
        ) : (
          <Simple>
            <Component />
          </Simple>
        )}
      </React.Fragment>
    );
  };
  render() {
    return null;
  }
}
