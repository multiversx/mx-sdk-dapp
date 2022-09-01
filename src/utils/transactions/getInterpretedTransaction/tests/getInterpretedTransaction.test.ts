import { MAINNET_EGLD_LABEL } from 'constants/network';
import {
  InterpretedTransactionType,
  TransactionDirectionEnum
} from 'types/serverTransactions.types';
import {
  ServerTransactionType,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { getInterpretedTransaction } from '../getInterpretedTransaction';

import { urlBuilder } from '../helpers/urlBuilder';

import { transactionMock } from './extended-transaction-mock';

const explorerAddress = 'https://testing.devnet.com';

describe('transaction interpreter', () => {
  describe('interpretServerTransaction', () => {
    it('creates an extended model of the existing transaction, containing all the needed information necessary to build the UI without processing inside the components', () => {
      const transaction: ServerTransactionType = {
        ...transactionMock,
        tokenIdentifier: 'token-id'
      };
      const output: InterpretedTransactionType = {
        ...transaction,
        amountInfo: {
          formattedValue: '12.340',
          fullFormattedValue: '12.340'
        },
        links: {
          senderLink: `${explorerAddress}${urlBuilder.accountDetails(
            transaction.sender
          )}`,
          receiverLink: `${explorerAddress}${urlBuilder.accountDetails(
            transaction.receiver
          )}`,
          receiverShardLink: `${explorerAddress}${urlBuilder.receiverShard(
            transaction.receiverShard
          )}`,
          senderShardLink: `${explorerAddress}${urlBuilder.senderShard(
            transaction.senderShard
          )}`,
          transactionLink: `${explorerAddress}${urlBuilder.transactionDetails(
            transaction.txHash
          )}`
        },
        tokenLabel: MAINNET_EGLD_LABEL,
        transactionDetails: {
          transactionTokens: [
            transaction?.action?.arguments?.token,
            transaction?.action?.arguments?.token1,
            transaction?.action?.arguments?.token2,
            transaction?.action?.arguments?.transfers
          ].filter((x) => x != null),
          direction: TransactionDirectionEnum.OUT,
          isContract: false,
          method: TransactionActionsEnum.transfer
        }
      };

      const result = getInterpretedTransaction({
        transaction,
        address: 'erd1-my-address-hash',
        amountFormatConfig: {
          egldLabel: MAINNET_EGLD_LABEL,
          decimals: 2,
          digits: 3,
          showLabel: true,
          token: 'egld',
          showLastNonZeroDecimal: true
        },
        explorerAddress
      });

      expect(result).toEqual(output);
    });
  });

  describe('interpretServerTransactions', () => {
    it('parse all the transactions and creates transactions extended models, containing all the needed information necessary to build the UI without processing inside the components', () => {
      const networkAddress = 'https://testing.devnet.com';
      const transactions: ServerTransactionType[] = [
        {
          ...transactionMock,
          tokenIdentifier: 'token-id'
        },
        {
          ...transactionMock,
          tokenIdentifier: 'token-id-2',
          // SC address. Use to set the isContract field
          sender:
            'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
          // Use the same with the account address to have SELF transfer
          receiver:
            'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
          senderShard: 2,
          receiverShard: 3
        }
      ];
      const output: InterpretedTransactionType[] = [
        {
          ...transactions[0],
          amountInfo: {
            formattedValue: '12.340',
            fullFormattedValue: '12.340'
          },
          links: {
            senderLink: `${networkAddress}${urlBuilder.accountDetails(
              transactions[0].sender
            )}`,
            receiverLink: `${networkAddress}${urlBuilder.accountDetails(
              transactions[0].receiver
            )}`,
            receiverShardLink: `${networkAddress}${urlBuilder.receiverShard(
              transactions[0].receiverShard
            )}`,
            senderShardLink: `${networkAddress}${urlBuilder.senderShard(
              transactions[0].senderShard
            )}`,
            transactionLink: `${networkAddress}${urlBuilder.transactionDetails(
              transactions[0].txHash
            )}`
          },
          tokenLabel: MAINNET_EGLD_LABEL,
          transactionDetails: {
            transactionTokens: [
              transactions[0]?.action?.arguments?.token,
              transactions[0]?.action?.arguments?.token1,
              transactions[0]?.action?.arguments?.token2,
              transactions[0]?.action?.arguments?.transfers
            ].filter((x) => x != null),
            direction: TransactionDirectionEnum.IN,
            isContract: false,
            method: TransactionActionsEnum.transfer
          }
        },
        {
          ...transactions[1],
          amountInfo: {
            formattedValue: '12.340',
            fullFormattedValue: '12.340'
          },
          links: {
            senderLink: `${networkAddress}${urlBuilder.accountDetails(
              transactions[1].sender
            )}`,
            receiverLink: `${networkAddress}${urlBuilder.accountDetails(
              transactions[1].receiver
            )}`,
            receiverShardLink: `${networkAddress}${urlBuilder.receiverShard(
              transactions[1].receiverShard
            )}`,
            senderShardLink: `${networkAddress}${urlBuilder.senderShard(
              transactions[1].senderShard
            )}`,
            transactionLink: `${networkAddress}${urlBuilder.transactionDetails(
              transactions[1].txHash
            )}`
          },
          tokenLabel: MAINNET_EGLD_LABEL,
          transactionDetails: {
            transactionTokens: [
              transactions[1]?.action?.arguments?.token,
              transactions[1]?.action?.arguments?.token1,
              transactions[1]?.action?.arguments?.token2,
              transactions[1]?.action?.arguments?.transfers
            ].filter((x) => x != null),
            direction: TransactionDirectionEnum.SELF,
            isContract: true,
            method: TransactionActionsEnum.transfer
          }
        }
      ];

      const result = transactions.map((transaction) =>
        getInterpretedTransaction({
          transaction,
          address:
            'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
          amountFormatConfig: {
            egldLabel: MAINNET_EGLD_LABEL,
            decimals: 2,
            digits: 3,
            showLabel: true,
            token: 'egld',
            showLastNonZeroDecimal: true
          },
          explorerAddress
        })
      );

      expect(result).toEqual(output);
    });
  });
});
