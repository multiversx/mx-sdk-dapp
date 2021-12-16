import * as React from "react";
import { faTimes, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyButton from "UI/CopyButton";
import ExplorerLink from "UI/ExplorerLink";
import Trim from "UI/Trim";
import {
  PlainTransactionStatus,
  TransactionToastTransactionsType,
} from "types/toasts";

const Icon = ({ status }: { status: PlainTransactionStatus }) => {
  switch (true) {
    case status.isPending:
      return (
        <FontAwesomeIcon
          icon={faSpinner}
          className="mr-1 text-secondary fa-spin slow-spin"
        />
      );
    case status.isSuccessful:
      return <FontAwesomeIcon icon={faCheck} className="mr-1 text-secondary" />;
    default:
      return <FontAwesomeIcon icon={faTimes} className="mr-1 text-secondary" />;
  }
};

const TxDetails = ({
  transactions,
  title,
}: {
  title?: React.ReactNode;
  transactions: TransactionToastTransactionsType[];
}) => {
  return (
    <React.Fragment>
      {title && <div className="mb-0">{title}</div>}
      <div className="mb-2 mt-1">
        {transactions.filter((t) => !t.status.isPending).length} /{" "}
        {transactions.length} transactions processed
      </div>
      {transactions.map(({ hash, status }) => (
        <div
          className="tx-description d-flex justify-content-start align-items-center"
          key={hash}
        >
          <Icon status={status} />
          <span
            className="text-nowrap trim-fs-sm mr-3"
            data-testid="toastTxHash"
            style={{ width: "10rem" }}
          >
            <Trim text={hash} />
          </span>
          <CopyButton text={hash} />
          {!status.isPending && (
            <ExplorerLink page={`transactions/${hash}`} className="ml-2" />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default TxDetails;
