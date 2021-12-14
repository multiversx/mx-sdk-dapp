import * as React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { explorerAddressSelector } from '../../../../redux/selectors';

const StatusTxDetails = ({ txHash }: { txHash: string }) => {
  const explorerAddress = useSelector(explorerAddressSelector);
  return (
    <React.Fragment>
      <div className='mt-4'>Transaction hash:</div>{' '}
      <span data-testid='txHash' className='text-break-all'>
        {txHash}
      </span>
      <a
        href={`${explorerAddress}transactions/${txHash}`}
        {...{
          target: '_blank'
        }}
        className='ml-2'
      >
        <FontAwesomeIcon icon={faSearch} className='text-muted' />
      </a>
    </React.Fragment>
  );
};

export default StatusTxDetails;
