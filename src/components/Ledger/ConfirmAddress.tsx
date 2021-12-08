import * as React from 'react';
import { useSelector } from 'react-redux';
import { ledgerAccountSelector } from '../../redux/selectors';

const ConfirmAddress = () => {
  const ledgerAccount = useSelector(ledgerAccountSelector);

  return (
    <div className='m-auto'>
      <div className='card my-4 text-center'>
        <div className='card-body p-4 mx-lg-4'>
          <h4 className='mb-4'>Confirm Ledger Address</h4>
          <p>For security, please confirm that your address: </p>
          <p className='lead'>{ledgerAccount ? ledgerAccount.address : ''}</p>
          <p className='m-0'>
            is the one shown on your Ledger device screen now.{' '}
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
