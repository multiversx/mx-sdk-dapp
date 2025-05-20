import BigNumber from 'bignumber.js';
import { formatAmount } from 'lib/sdkDappUtils';
import { ZERO } from 'lib/sdkDappUtils';
import { NftEnumType } from 'types/tokens.types';
import { pluralize } from 'utils/operations/pluralize';

interface IGetTransactionActionTransferLabelParams {
  allTransferTypes: string[];
  transferType?: string;
  transactionTransfers: Record<string, string>[];
}

export const getTransactionActionTransferLabel = ({
  transactionTransfers,
  allTransferTypes,
  transferType
}: IGetTransactionActionTransferLabelParams) => {
  const [firstTransfer] = transactionTransfers;

  const allTransferTickers = transactionTransfers.map(
    (transfer): string => transfer.ticker
  );

  const allTransferredItemsAreTheSame = new Set(allTransferTypes).size === 1;
  const allTransferredTickersAreTheSame =
    new Set(allTransferTickers).size === 1;

  const totalSftBalances = transactionTransfers.map((transactionTransfer) =>
    formatAmount({
      input: String(transactionTransfer.value ?? ZERO),
      decimals: Number(transactionTransfer.decimals ?? ZERO)
    })
  );

  const cumulatedSftUnits = totalSftBalances.reduce(
    (cumulatedUnits, currentSft) => cumulatedUnits.plus(currentSft),
    new BigNumber(transactionTransfers.length - 1)
  );

  if (!allTransferredItemsAreTheSame || !allTransferredTickersAreTheSame) {
    return 'Multiple Assets';
  }

  if (transferType === NftEnumType.SemiFungibleESDT) {
    return pluralize('SFT', cumulatedSftUnits.toNumber());
  }

  if (transferType === NftEnumType.NonFungibleESDT) {
    return pluralize('NFT', transactionTransfers.length);
  }

  return firstTransfer.ticker;
};
