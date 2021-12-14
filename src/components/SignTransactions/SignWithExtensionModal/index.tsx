import * as React from "react";
import { useContext as useDappContext } from "@elrondnetwork/dapp";
import { Transaction } from "@elrondnetwork/erdjs";
import { faHourglass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PageState from "components/PageState";
import { transactionStatuses } from "helpers/constants";
import { updateSignStatus } from "redux/slices/transactionsSlice";
import { HandleCloseType } from "../helpers";

export interface SignModalType {
  show: boolean;
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  sessionId: string;
  transactions: Transaction[];
  setError: (value: React.SetStateAction<string>) => void;
  callbackRoute: string;
}

const SignWithExtensionModal = ({
  show,
  handleClose,
  error,
  sessionId,
  setError,
  transactions,
  callbackRoute,
}: SignModalType) => {
  const history = useHistory();
  const {
    dapp: { provider },
  } = useDappContext();
  const dispatch = useDispatch();

  const [signedTransactions, setSignedTransactions] =
    React.useState<Transaction[]>();

  const description =
    transactions && transactions.length > 1
      ? "Check your Elrond Wallet Extension to sign the transactions"
      : "Check your Elrond Wallet Extension to sign the transaction";

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    history.push(callbackRoute);
  };

  React.useEffect(() => {
    if (transactions?.length > 0) {
      provider
        .signTransactions(transactions)
        .then((signedTxs: Transaction[]) => {
          setSignedTransactions(signedTxs);
        })
        .catch((e: any) => {
          console.error(e);
          setError(e.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  React.useEffect(() => {
    const signingDisabled =
      !signedTransactions ||
      (signedTransactions && signedTransactions.length !== transactions.length);

    if (!signingDisabled && signedTransactions) {
      dispatch(
        updateSignStatus({
          [sessionId]: {
            status: transactionStatuses.signed,
            transactions: signedTransactions.map((tx) => tx.toPlainObject()),
          },
        }),
      );
      setSignedTransactions(undefined);
      handleClose({ updateBatchStatus: false });
      history.push(callbackRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedTransactions, transactions]);

  return (
    <Modal
      show={show}
      backdrop="static"
      onHide={handleClose}
      className="modal-container"
      animation={false}
      centered
    >
      <PageState
        icon={error ? faTimes : faHourglass}
        iconClass="text-white"
        iconBgClass={error ? "bg-danger" : "bg-warning"}
        iconSize="3x"
        title="Confirm on Elrond Wallet Extension"
        description={description}
        action={
          <a
            href="/"
            id="closeButton"
            data-testid="closeButton"
            onClick={close}
            className="btn btn-close-link mt-2"
          >
            Close
          </a>
        }
      />
    </Modal>
  );
};

export default SignWithExtensionModal;
