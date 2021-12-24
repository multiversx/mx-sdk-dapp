import BigNumber from 'bignumber.js';
import { MultiEsdtTxType, TransactionTypesEnum } from 'types/transactions';
import { decodePart } from 'utils/decoders';
import { getAllStringOccurrences } from '../getAllStringOccurrences';

export default function parseMultiEsdtTransferData(data?: string) {
  const transactions: MultiEsdtTxType[] = [];
  let contractCallDataIndex = 0;
  try {
    if (
      data?.startsWith(TransactionTypesEnum.MultiESDTNFTTransfer) &&
      data?.includes('@')
    ) {
      const [, receiver, encodedTxCount, ...rest] = data?.split('@');
      if (receiver) {
        const txCount = new BigNumber(encodedTxCount, 16).toNumber();

        let itemIndex = 0;
        for (let txIndex = 0; txIndex < txCount; txIndex++) {
          const transaction: MultiEsdtTxType = {
            type: TransactionTypesEnum.nftTransaction,
            data: '',
            receiver
          };

          for (let index = 0; index < 3; index++) {
            switch (index) {
              case 0:
                transaction.token = decodePart(rest[itemIndex]);
                transaction.data = rest[itemIndex];
                break;
              case 1: {
                const encodedNonce =
                  rest[itemIndex] && rest[itemIndex].length
                    ? rest[itemIndex]
                    : '';
                if (encodedNonce) {
                  transaction.nonce = encodedNonce;
                } else {
                  transaction.type = TransactionTypesEnum.esdtTransaction;
                }
                transaction.data = `${transaction.data}@${rest[itemIndex]}`;
                break;
              }
              case 2:
                transaction.amount = new BigNumber(
                  rest[itemIndex],
                  16
                ).toString(10);
                transaction.data = `${transaction.data}@${rest[itemIndex]}`;
                break;
              default:
                break;
            }
            contractCallDataIndex = itemIndex + 1;
            itemIndex++;
          }
          transactions[txIndex] = transaction;
        }
        if (
          transactions.length !== txCount ||
          transactions.some(
            (tx) => getAllStringOccurrences(tx.data, '@').length !== 2
          ) ||
          transactions.some((tx) => tx.data.startsWith('@'))
        ) {
          return [];
        }
        if (rest[contractCallDataIndex]) {
          let scCallData = rest[contractCallDataIndex];
          for (let i = contractCallDataIndex + 1; i < rest.length; i++) {
            scCallData += '@' + rest[i];
          }
          transactions[txCount] = {
            type: TransactionTypesEnum.scCall,
            data: scCallData,
            receiver
          };
        }
      }
    }
  } catch (err) {
    return transactions;
  }
  return transactions;
}
