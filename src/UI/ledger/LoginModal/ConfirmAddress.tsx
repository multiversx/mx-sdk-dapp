import React from 'react';
import { useSelector } from 'redux/DappProviderContext';
import { ledgerAccountSelector } from 'redux/selectors';

const ConfirmAddress = ({
  token,
  noBorder
}: {
  token?: string;
  noBorder?: boolean;
}) => {
  const ledgerAccount = useSelector(ledgerAccountSelector);

  return (
    <div className='m-auto'>
      <div className={`card my-4 text-center ${noBorder ? 'border-0' : ''}`}>
        <div className='card-body p-4 mx-lg-4'>
          <h4 className='mb-4'>Confirm Ledger Address</h4>
          <p>For security, please confirm that your address: </p>
          <p className='lead border rounded p-2'>
            {ledgerAccount ? ledgerAccount.address : ''}
          </p>
          {token && (
            <React.Fragment>
              <p>and Auth Token</p>
              <p className='lead border rounded p-2'>{`${token}{}`}</p>
            </React.Fragment>
          )}
          <p className='m-0'>
            {token
              ? 'are the one shown on your Ledger device screen now.'
              : 'is the one shown on your Ledger device screen now.'}
          </p>

          <p>Select Approve on your device to confirm.</p>
          <p>
            Or, if it does not match, close this page and{' '}
            <a
              href='https://help.elrond.com/en/'
              {...{
                target: '_blank'
              }}
            >
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAddress;
