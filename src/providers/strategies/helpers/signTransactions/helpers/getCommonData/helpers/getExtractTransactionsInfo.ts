import { getAccountFromApi } from 'apiCalls/account/getAccountFromApi';
import { getScamAddressData } from 'apiCalls/account/getScamAddressData';
import { getEffectiveReceiver } from 'providers/strategies/helpers/signTransactions/helpers/getCommonData/helpers/getEffectiveReceiver';
import { SigningErrorsEnum } from 'types/enums.types';

import {
  MultiSignTransactionType,
  TransactionDataTokenType
} from 'types/transactions.types';
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
    const dataField = Buffer.from(transaction.data ?? []).toString();
    const transactionTokenInfo = getTxInfoByDataField({
      data: dataField,
      multiTransactionData: multiTxData,
      parsedTransactionsByDataField
    });

    const { tokenId } = transactionTokenInfo;
    const receiver = getEffectiveReceiver(transaction);

    if (sender && sender !== address) {
      const isValidSender = checkIsValidSender(senderAccount, address);

      if (!isValidSender) {
        console.error(SigningErrorsEnum.senderDifferentThanLoggedInAddress);
        throw new Error(SigningErrorsEnum.senderDifferentThanLoggedInAddress);
      }
    }

    const notSender = address !== receiver;
    const verified = receiver in verifiedAddresses;

    if (receiver && notSender && !verified) {
      try {
        const data = await getScamAddressData({
          addressToVerify: receiver,
          baseURL: apiAddress
        });
        verifiedAddresses = {
          ...verifiedAddresses,
          ...(data?.scamInfo ? { [receiver]: data.scamInfo } : {})
        };
      } catch (error) {
        console.error('Failed checking the receiver address', error);
      }
    }

    const isTokenTransaction = Boolean(
      tokenId && isTokenTransfer({ tokenId, egldLabel })
    );

    return {
      transaction,
      receiver,
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
