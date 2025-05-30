import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import { getPersistedTokenDetails } from 'apiCalls/tokens/getPersistedTokenDetails';
import { MULTI_TRANSFER_EGLD_TOKEN } from 'constants/mvx.constants';
import { safeWindow } from 'constants/window.constants';
import { DECIMALS, DIGITS, formatAmount } from 'lib/sdkDappUtils';
import {
  FungibleTransactionType,
  ISignTransactionsPanelCommonData
} from 'managers/internal/SignTransactionsStateManager/types';
import { getExplorerAddress } from 'methods/network/getExplorerAddress';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { NetworkType } from 'types/network.types';
import { NftEnumType } from 'types/tokens.types';
import {
  MultiSignTransactionType,
  TransactionDataTokenType
} from 'types/transactions.types';
import { decodeBase64 } from 'utils/decoders/base64Utils';
import { capitalize } from 'utils/operations/capitalize';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { getExplorerLink } from 'utils/transactions/getExplorerLink';
import { getFeeData } from '../getFeeData';
import { getAllDecodedFormats } from './helpers/decodeDataField';
import { getExtractTransactionsInfo } from './helpers/getExtractTransactionsInfo';
import { getHighlight } from './helpers/getHighlight';
import { getPpuOptions } from './helpers/getPpuOptions';
import { getRecommendedGasPrice } from './helpers/getRecommendedGasPrice';
import { getScCall } from './helpers/getScCall';
import { getTokenType } from './helpers/getTokenType';
import { formatWithDot } from 'utils/formats/formatWithDot';

export type GetCommonDataPropsType = {
  allTransactions: MultiSignTransactionType[];
  currentScreenIndex: number;
  price?: number;
  network: NetworkType;
  signedIndexes: number[];
  egldLabel: string;
  address: string;
  shard?: number;
  username?: string;
  parsedTransactionsByDataField: Record<string, TransactionDataTokenType>;
  gasPriceData: {
    initialGasPrice: number;
    ppu: ISignTransactionsPanelCommonData['ppu'];
  };
};

export async function getCommonData({
  allTransactions,
  currentScreenIndex,
  egldLabel,
  network,
  gasPriceData,
  price,
  address,
  username,
  shard,
  signedIndexes,
  parsedTransactionsByDataField
}: GetCommonDataPropsType) {
  const currentTransaction = allTransactions[currentScreenIndex];
  const sender = currentTransaction?.transaction?.sender.toString();
  const transaction = currentTransaction?.transaction;

  let tokenTransaction: {
    identifier?: string;
    amount: string;
    usdValue: string;
  } | null = null;

  let fungibleTransaction:
    | (FungibleTransactionType & {
        type: NftEnumType.NonFungibleESDT | NftEnumType.SemiFungibleESDT;
      })
    | null = null;

  const extractTransactionsInfo = getExtractTransactionsInfo({
    egldLabel,
    sender,
    apiAddress: network.apiAddress,
    address,
    parsedTransactionsByDataField
  });

  const plainTransaction = currentTransaction.transaction.toPlainObject();
  const txInfo = await extractTransactionsInfo(currentTransaction);

  const isEgld = !txInfo?.transactionTokenInfo?.tokenId;
  const { tokenId, nonce, amount = '' } = txInfo?.transactionTokenInfo ?? {};

  const isNftOrSft = tokenId && nonce && nonce.length > 0;
  const tokenIdForTokenDetails = isNftOrSft ? `${tokenId}-${nonce}` : tokenId;

  const tokenDetails = await getPersistedTokenDetails({
    tokenId: tokenIdForTokenDetails
  });

  const { esdtPrice, tokenDecimals, type, identifier, tokenImageUrl } =
    tokenDetails;

  const isNft =
    type === NftEnumType.SemiFungibleESDT ||
    type === NftEnumType.NonFungibleESDT;

  if (isNft) {
    fungibleTransaction = {
      type,
      identifier,
      amount,
      imageURL: tokenImageUrl
    };
  } else {
    const getFormattedAmount = ({ addCommas }: { addCommas: boolean }) =>
      formatAmount({
        input: isEgld
          ? currentTransaction.transaction.value.toString()
          : amount,
        decimals: isEgld ? Number(network.decimals) : tokenDecimals,
        digits: Number(network.digits),
        showLastNonZeroDecimal: false,
        addCommas
      });

    const formattedAmount = getFormattedAmount({ addCommas: true });
    const rawAmount = getFormattedAmount({ addCommas: false });
    const tokenPrice = Number(isEgld ? price : esdtPrice);
    const usdValue = getUsdValue({
      amount: rawAmount,
      usd: tokenPrice,
      addEqualSign: true
    });

    const esdtIdentifier =
      identifier === MULTI_TRANSFER_EGLD_TOKEN ? egldLabel : identifier;
    tokenTransaction = {
      identifier: esdtIdentifier ?? egldLabel,
      amount: formattedAmount,
      usdValue
    };
  }

  const { feeLimitFormatted, feeInFiatLimit } = getFeeData({
    transaction,
    price
  });

  const ppuOptions = getPpuOptions({
    shard,
    initialGasPrice: gasPriceData.initialGasPrice,
    transaction: plainTransaction,
    gasStationMetadata: network.gasStationMetadata
  });

  const gasPrice = getRecommendedGasPrice({
    transaction: plainTransaction,
    gasPriceData
  });

  const provider = getAccountProvider();
  const providerType = provider.getType();
  const providerName = capitalize(providerType as string);
  const transactionsCount = allTransactions.length;

  const currentIndexToSign =
    signedIndexes.length > 0 ? signedIndexes[signedIndexes.length - 1] + 1 : 0;

  const data = decodeBase64(
    currentTransaction.transaction.data.toString() ?? ''
  );

  const highlight = getHighlight(txInfo?.transactionTokenInfo);
  const decodedData = getAllDecodedFormats({ data, identifier, highlight });
  const explorerAddress = getExplorerAddress();
  const explorerLink = getExplorerLink({
    to: `/${ACCOUNTS_ENDPOINT}/${address}`,
    explorerAddress
  });

  const needsSigning =
    transactionsCount === 1 ||
    (txInfo?.needsSigning && !signedIndexes.includes(currentScreenIndex));

  const formattedGasPrice = formatAmount({
    input: gasPrice.toString(),
    decimals: DECIMALS,
    addCommas: true,
    digits: DIGITS
  });

  const commonData: ISignTransactionsPanelCommonData = {
    receiver: plainTransaction.receiver.toString(),
    data: decodeBase64(currentTransaction.transaction.data.toString() ?? ''),
    decodedData,
    gasPrice: formattedGasPrice,
    gasLimit: formatWithDot(plainTransaction.gasLimit),
    explorerLink,
    ppu: gasPriceData.ppu,
    ppuOptions,
    egldLabel,
    tokenType: getTokenType(type),
    feeLimit: feeLimitFormatted,
    feeInFiatLimit,
    transactionsCount,
    currentIndex: currentScreenIndex,
    currentIndexToSign,
    highlight,
    scCall: getScCall(txInfo?.transactionTokenInfo),
    needsSigning,
    isEditable: txInfo?.needsSigning,
    providerName,
    address,
    username,
    origin: safeWindow.location.origin
  };

  return { commonData, tokenTransaction, fungibleTransaction };
}
