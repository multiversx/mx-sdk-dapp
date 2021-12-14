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

const SignWithWalletConnectModal = ({
  show,
  handleClose,
  error,
  sessionId,
  setError,
  transactions,
  callbackRoute,
}: SignModalType) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    dapp: { provider },
  } = useDappContext();

  const [signedTransactions, setSignedTransactions] =
    React.useState<Record<number, Transaction>>();

  const description =
    transactions && transactions.length > 1
      ? "Check your phone to sign the transactions"
      : "Check your phone to sign the transaction";

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    history.push(callbackRoute);
  };

  React.useEffect(() => {
    if (transactions && transactions.length) {
      provider
        .init()
        .then((initialised: boolean) => {
          if (!initialised) {
            return;
          }
          provider
            .signTransactions(transactions)
            .then((txs: Transaction[]) => {
              setSignedTransactions(txs);
            })
            .catch(() => {
              handleClose();
            });
        })
        .catch((e: any) => {
          setError(e.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  React.useEffect(() => {
    const signingDisabled =
      !signedTransactions ||
      (signedTransactions &&
        Object.keys(signedTransactions).length !== transactions.length);

    if (!signingDisabled && signedTransactions) {
      dispatch(
        updateSignStatus({
          [sessionId]: {
            status: transactionStatuses.signed,
            transactions: Object.values(signedTransactions).map((tx) =>
              tx.toPlainObject(),
            ),
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
        title="Confirm on Maiar"
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

export default SignWithWalletConnectModal;
