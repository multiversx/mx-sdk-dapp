import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { UITransactionType } from 'helpers/types';
import { getTransactionMethod } from 'helpers';

const TransactionMethod = ({ transaction }: { transaction: UITransactionType }) => {
  const TxMethodText = (
    <span className="badge badge-secondary badge-pill font-weight-light">
      <div className="transaction-function-badge text-truncate text-capitalize">
        {getTransactionMethod(transaction)}
      </div>
    </span>
  );
  return transaction.action?.description ? (
    <OverlayTrigger
      placement="top"
      delay={{ show: 0, hide: 400 }}
      overlay={(props: any) => (
        <Tooltip {...props} show={props.show.toString()}>
          {transaction.action?.description}
        </Tooltip>
      )}
    >
      {TxMethodText}
    </OverlayTrigger>
  ) : (
    TxMethodText
  );
};

export default TransactionMethod;
