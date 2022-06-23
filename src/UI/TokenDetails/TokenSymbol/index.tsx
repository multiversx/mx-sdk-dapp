import React from 'react';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Simple = ({ children }: { children: React.ReactNode }) => (
  <div className='token-symbol'>{children}</div>
);

export const Combined = ({
  small,
  children
}: {
  small: boolean | undefined;
  children: React.ReactNode;
}) => (
  <div className={`token-symbol-combined ${small ? 'small' : ''}`}>
    {children}
  </div>
);

export const Wrapped = ({ children }: { children: React.ReactNode }) => (
  <div className='token-symbol-wrapped'>
    <div className='wrapped rounded-circle shadow'>
      <div className='locked-icon'>
        <FontAwesomeIcon icon={faDollarSign} size='sm' />
      </div>
      {children}
    </div>
  </div>
);
