import * as React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "context";

const StatusTxDetails = ({ txHash }: { txHash: string }) => {
  const { explorerAddress } = useContext();
  return (
    <React.Fragment>
      <div className="mt-4">Transaction hash:</div>{" "}
      <span data-testid="txHash" className="text-break-all">
        {txHash}
      </span>
      <a
        href={`${explorerAddress}transactions/${txHash}`}
        {...{
          target: "_blank",
        }}
        className="ml-2"
      >
        <FontAwesomeIcon icon={faSearch} className="text-muted" />
      </a>
    </React.Fragment>
  );
};

export default StatusTxDetails;
