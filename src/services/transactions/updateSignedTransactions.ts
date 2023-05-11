import {
  updateSignedTransactions,
  moveTransactionsToSignedState,
  UpdateSignedTransactionsPayloadType,
  updateSignedTransactionStatus,
  UpdateSignedTransactionStatusPayloadType,
  MoveTransactionsToSignedStatePayloadType,
  SetCustomTransactionInformationPayloadType,
  setCustomTransactionInformation,
  setTransactionsDisplayInfo,
  SetTransactionsInfoPayloadType
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';

export function setTransactionsToSignedState(
  payload: MoveTransactionsToSignedStatePayloadType
) {
  store.dispatch(moveTransactionsToSignedState(payload));
}

export function updateSignedTransactionsState(
  payload: UpdateSignedTransactionsPayloadType
) {
  store.dispatch(updateSignedTransactions(payload));
}

export function updateSignedTransactionStatusState(
  payload: UpdateSignedTransactionStatusPayloadType
) {
  store.dispatch(updateSignedTransactionStatus(payload));
}

export function setCustomTransactionInformationState(
  payload: SetCustomTransactionInformationPayloadType
) {
  store.dispatch(setCustomTransactionInformation(payload));
}

export function setTransactionsDisplayInfoState(
  payload: SetTransactionsInfoPayloadType
) {
  store.dispatch(setTransactionsDisplayInfo(payload));
}
