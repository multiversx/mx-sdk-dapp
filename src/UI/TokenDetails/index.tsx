import React from 'react';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { getEgldLabel, wrapperClassName } from 'utils';
import { ReactComponent as EgldIcon } from '../../assets/icons/EGLD.svg';
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
  icon: React.ReactNode;
};

function getIcon(isEgldTransfer: boolean, tokenAvatar?: string) {
  if (tokenAvatar) {
    return <img className='token-symbol-custom-token' src={tokenAvatar} />;
  }
  return isEgldTransfer ? (
    <EgldIcon />
  ) : (
    <ReactFontawesome.FontAwesomeIcon icon={icons.faGem} />
  );
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
      <span className={wrapperClassName}>
        {props.combined ? (
          <Combined small={props.small}>
            <Component />
          </Combined>
        ) : (
          <Simple>
            <Component />
          </Simple>
        )}
      </span>
    );
  };
  render() {
    return null;
  }
}
