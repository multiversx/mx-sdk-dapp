import { getAccountFromApi } from 'apiCalls/account/getAccountFromApi';
import { getScamAddressData } from 'apiCalls/account/getScamAddressData';
import { SigningErrorsEnum } from 'types/enums.types';

import {
  MultiSignTransactionType,
  TransactionDataTokenType
} from 'types/transactions.types';
import { decodeBase64 } from 'utils/decoders/base64Utils';
import { checkIsValidSender } from './checkIsValidSender';
import { getTxInfoByDataField } from './getTxInfoByDataField';
import { isTokenTransfer } from '../../isTokenTransfer';

interface VerifiedAddressesType {
  [address: string]: { type: string; info: string };
}
let verifiedAddresses: VerifiedAddressesType = {};

type ExtractTransactionsInfoType = {
  sender: string;
  address: string;
  apiAddress: string;
  egldLabel: string;
  parsedTransactionsByDataField: Record<string, TransactionDataTokenType>;
};

export function getExtractTransactionsInfo({
  egldLabel,
  apiAddress,
  sender,
  address,
  parsedTransactionsByDataField
}: ExtractTransactionsInfoType) {
  const extractTransactionsInfo = async (
    currentTx: MultiSignTransactionType
  ) => {
    if (currentTx == null) {
      return;
    }

    const senderAccount =
      !sender || sender === address
        ? null
        : await getAccountFromApi({
            address: sender,
            baseURL: apiAddress
          });

    const { transaction, multiTxData, transactionIndex } = currentTx;
    const dataField = decodeBase64(transaction.data.toString() ?? '');
    const transactionTokenInfo = getTxInfoByDataField({
      data: dataField,
      multiTransactionData: multiTxData,
      parsedTransactionsByDataField
    });

    const { tokenId } = transactionTokenInfo;
    const receiver = transaction.receiver.toBech32();

    if (sender && sender !== address) {
      const isValidSender = checkIsValidSender(senderAccount, address);

      if (!isValidSender) {
        console.error(SigningErrorsEnum.senderDifferentThanLoggedInAddress);
        throw SigningErrorsEnum.senderDifferentThanLoggedInAddress;
      }
    }

    const notSender = address !== receiver;
    const verified = receiver in verifiedAddresses;

    if (receiver && notSender && !verified) {
      const data = await getScamAddressData({
        addressToVerify: receiver,
        baseURL: apiAddress
      });
      verifiedAddresses = {
        ...verifiedAddresses,
        ...(data?.scamInfo ? { [receiver]: data.scamInfo } : {})
      };
    }

    const isTokenTransaction = Boolean(
      tokenId && isTokenTransfer({ tokenId, egldLabel })
    );

    return {
      transaction,
      receiverScamInfo: verifiedAddresses[receiver]?.info || null,
      transactionTokenInfo,
      isTokenTransaction,
      dataField,
      transactionIndex,
      needsSigning: currentTx.needsSigning
    };
  };
  return extractTransactionsInfo;
}
