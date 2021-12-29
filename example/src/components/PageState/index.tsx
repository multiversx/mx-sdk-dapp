import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pageState.css';
import { faInfoCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

const IconState = ({
  icon,
  className = '',
  iconSize = '3x'
}: {
  icon: any;
  className?: string; // text-white
  iconSize?: '2x' | '3x' | '5x';
}) => {
  return (
    <span
      className={`icon-state mx-auto ${className} ${
        iconSize === '2x' ? 'half' : ''
      }`}
    >
      <FontAwesomeIcon
        icon={icon}
        size={iconSize}
        className={className ? `${className} text-white` : 'text-primary'}
      />
    </span>
  );
};

interface BasicPageStateType {
  title?: string | React.ReactNode;
  className?: string;
  description?: string | React.ReactNode;
  action?: React.ReactNode;
  iconClassName?: string;
  dataTestId?: string;
}

interface PageStateWithIcon extends BasicPageStateType {
  icon: any;
  symbol?: never;
}
interface PageStateWithSymbol extends BasicPageStateType {
  icon?: never;
  symbol: React.ReactNode;
}

type PageStateType = PageStateWithIcon | PageStateWithSymbol;

const PageState = ({
  title,
  description,
  icon,
  action,
  symbol,
  className,
  iconClassName,
  dataTestId
}: PageStateType) => (
  <div
    className={`page-state text-center ${className ? className : ''}`}
    data-testid={dataTestId}
  >
    <div className='mb-spacer'>
      {symbol ? (
        <>{symbol}</>
      ) : (
        <IconState
          className={iconClassName}
          icon={icon ? icon : faInfoCircle}
        />
      )}
      <div className='mt-spacer'>
        {title && <p className='h4'>{title}</p>}
        {description && <>{description}</>}
      </div>
    </div>
    {action && (
      <div className='d-flex align-items-center flex-column mt-spacer'>
        {action}
      </div>
    )}
  </div>
);

export function Loader() {
  return (
    <PageState
      title='Loading...'
      symbol={
        <FontAwesomeIcon
          icon={faSpinner}
          size='5x'
          className='text-primary fa-spin fast-spin'
        />
      }
      className='m-auto'
    />
  );
}

export default PageState;
