export function getTransactionLink(
  explorerAddress: string,
  transactionHash: string
) {
  return `${explorerAddress}/transactions/${transactionHash}`;
}
