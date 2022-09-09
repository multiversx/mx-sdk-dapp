import {
  InterpretedTransactionType,
  TransactionDirectionEnum
} from 'types/serverTransactions.types';
import {
  ServerTransactionType,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { getInterpretedTransaction } from '../getInterpretedTransaction';

import { explorerUrlBuilder } from '../helpers/explorerUrlBuilder';

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
        links: {
          senderLink: `${explorerAddress}${explorerUrlBuilder.accountDetails(
            transaction.sender
          )}`,
          receiverLink: `${explorerAddress}${explorerUrlBuilder.accountDetails(
            transaction.receiver
          )}`,
          receiverShardLink: `${explorerAddress}${explorerUrlBuilder.receiverShard(
            transaction.receiverShard
          )}`,
          senderShardLink: `${explorerAddress}${explorerUrlBuilder.senderShard(
            transaction.senderShard
          )}`,
          transactionLink: `${explorerAddress}${explorerUrlBuilder.transactionDetails(
            transaction.txHash
          )}`
        },
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
          links: {
            senderLink: `${networkAddress}${explorerUrlBuilder.accountDetails(
              transactions[0].sender
            )}`,
            receiverLink: `${networkAddress}${explorerUrlBuilder.accountDetails(
              transactions[0].receiver
            )}`,
            receiverShardLink: `${networkAddress}${explorerUrlBuilder.receiverShard(
              transactions[0].receiverShard
            )}`,
            senderShardLink: `${networkAddress}${explorerUrlBuilder.senderShard(
              transactions[0].senderShard
            )}`,
            transactionLink: `${networkAddress}${explorerUrlBuilder.transactionDetails(
              transactions[0].txHash
            )}`
          },
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
          links: {
            senderLink: `${networkAddress}${explorerUrlBuilder.accountDetails(
              transactions[1].sender
            )}`,
            receiverLink: `${networkAddress}${explorerUrlBuilder.accountDetails(
              transactions[1].receiver
            )}`,
            receiverShardLink: `${networkAddress}${explorerUrlBuilder.receiverShard(
              transactions[1].receiverShard
            )}`,
            senderShardLink: `${networkAddress}${explorerUrlBuilder.senderShard(
              transactions[1].senderShard
            )}`,
            transactionLink: `${networkAddress}${explorerUrlBuilder.transactionDetails(
              transactions[1].txHash
            )}`
          },
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
          explorerAddress
        })
      );

      expect(result).toEqual(output);
    });
  });
});
