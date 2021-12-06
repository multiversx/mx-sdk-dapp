import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { TransactionHash } from '@elrondnetwork/erdjs';
import {
  faCheck,
  faTimes,
  faHourglass
} from '@fortawesome/free-solid-svg-icons';
import useLastTxStatus from './useFetchTxStatus';
import StatusTxDetails from './StatusTxDetails';
import PageState from 'UI/PageState';

export interface TransactionStatusType {
  txHash: TransactionHash;
  callbackRoute: string;
  handleClose: () => void;
}

type StatusDataType = 'success' | 'failed' | 'pending';

const statusData: Record<
  StatusDataType,
  {
    icon: typeof faCheck;
    title: string;
  }
> = {
  success: {
    icon: faCheck,
    title: 'Success'
  },
  failed: {
    icon: faTimes,
    title: 'Request failed'
  },
  pending: {
    icon: faHourglass,
    title: 'Processing request'
  }
};

const TransactionStatus = ({
  txHash,
  callbackRoute,
  handleClose
}: TransactionStatusType) => {
  const history = useHistory();
  const lastTxStatus = useLastTxStatus(txHash);
  let currentStatus: StatusDataType = 'pending';
  currentStatus = !lastTxStatus.isPending() ? 'failed' : currentStatus;
  currentStatus = lastTxStatus.isSuccessful() ? 'success' : currentStatus;

  const { title, icon } = statusData[currentStatus];

  React.useEffect(() => {
    if (!lastTxStatus.isPending()) {
      setTimeout(() => {
        handleClose();
        history.push(
          `${callbackRoute}?status=${lastTxStatus.status.toString()}&txHash=${txHash}`
        );
      }, 1000);
    }
  }, [lastTxStatus]);

  const resolvedBgClass = lastTxStatus.isSuccessful()
    ? 'bg-success'
    : 'bg-danger';

  return (
    <React.Fragment>
      <PageState
        icon={icon}
        iconBgClass={`text-white ${
          lastTxStatus.isPending() ? 'bg-warning' : resolvedBgClass
        }`}
        iconClass={
          lastTxStatus.isPending() ? 'text-white slow-spin fa-spin' : ''
        }
        iconSize='3x'
        title={title}
        description={
          <React.Fragment>
            {txHash && <StatusTxDetails txHash={txHash.toString()} />}
            <div className='px-4 pt-4'>
              <button
                id='closeButton'
                className='btn btn-primary mx-2'
                disabled
              >
                Close
              </button>
            </div>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};

export default TransactionStatus;
