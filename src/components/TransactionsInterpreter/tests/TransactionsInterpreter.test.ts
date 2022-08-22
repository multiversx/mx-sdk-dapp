import { mainnetEgldLabel } from 'constants/network';
import {
  ExtendedTransactionType,
  TransactionDirection,
  TxActionsEnum,
  UITransactionType
} from '../helpers/types';
import urlBuilder from '../helpers/urlBuilder';
import {
  parseTransactions,
  processTransaction
} from '../TransactionsInterpreter';
import { transactionMock } from './extended-transaction-mock';

describe('transaction interpreter', () => {
  describe('processTransaction', () => {
    it('creates an extended model of the existing transaction, containing all the needed information necessary to build the UI without processing inside the components', () => {
      const networkAddress = 'https://testing.devnet.com';
      const transaction: UITransactionType = {
        ...transactionMock,
        tokenIdentifier: 'token-id'
      };
      const output: ExtendedTransactionType = {
        ...transaction,
        denomination: {
          denominatedValue: '12.340',
          fullDenominatedValue: '12.340'
        },
        links: {
          senderLink: `${networkAddress}${urlBuilder.accountDetails(
            transaction.sender
          )}`,
          receiverLink: `${networkAddress}${urlBuilder.accountDetails(
            transaction.receiver
          )}`,
          receiverShardLink: `${networkAddress}${urlBuilder.receiverShard(
            transaction.receiverShard
          )}`,
          senderShardLink: `${networkAddress}${urlBuilder.senderShard(
            transaction.senderShard
          )}`,
          transactionLink: `${networkAddress}${urlBuilder.transactionDetails(
            transaction.txHash
          )}`
        },
        tokenLabel: mainnetEgldLabel,
        transactionDetails: {
          transactionTokens: [
            transaction?.action?.arguments?.token,
            transaction?.action?.arguments?.token1,
            transaction?.action?.arguments?.token2,
            transaction?.action?.arguments?.transfers
          ].filter((x) => x != null),
          direction: TransactionDirection.OUT,
          isContract: false,
          method: TxActionsEnum.transfer
        }
      };

      const result = processTransaction({
        transaction,
        address: 'erd1-my-address-hash',
        denominationConfig: {
          egldLabel: mainnetEgldLabel,
          denomination: 2,
          decimals: 3,
          showLabel: true,
          token: 'egld',
          showLastNonZeroDecimal: true
        },
        networkAddress
      });

      expect(result).toEqual(output);
    });
  });

  describe('parseTransactions', () => {
    it('parse all the transactions and creates transactions extended models, containing all the needed information necessary to build the UI without processing inside the components', () => {
      const networkAddress = 'https://testing.devnet.com';
      const transactions: UITransactionType[] = [
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
      const output: ExtendedTransactionType[] = [
        {
          ...transactions[0],
          denomination: {
            denominatedValue: '12.340',
            fullDenominatedValue: '12.340'
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
          tokenLabel: mainnetEgldLabel,
          transactionDetails: {
            transactionTokens: [
              transactions[0]?.action?.arguments?.token,
              transactions[0]?.action?.arguments?.token1,
              transactions[0]?.action?.arguments?.token2,
              transactions[0]?.action?.arguments?.transfers
            ].filter((x) => x != null),
            direction: TransactionDirection.IN,
            isContract: false,
            method: TxActionsEnum.transfer
          }
        },
        {
          ...transactions[1],
          denomination: {
            denominatedValue: '12.340',
            fullDenominatedValue: '12.340'
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
          tokenLabel: mainnetEgldLabel,
          transactionDetails: {
            transactionTokens: [
              transactions[1]?.action?.arguments?.token,
              transactions[1]?.action?.arguments?.token1,
              transactions[1]?.action?.arguments?.token2,
              transactions[1]?.action?.arguments?.transfers
            ].filter((x) => x != null),
            direction: TransactionDirection.SELF,
            isContract: true,
            method: TxActionsEnum.transfer
          }
        }
      ];

      const result = parseTransactions(
        transactions,
        'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
        {
          networkAddress,
          denominationConfig: {
            egldLabel: mainnetEgldLabel,
            denomination: 2,
            decimals: 3,
            showLabel: true,
            token: 'egld',
            showLastNonZeroDecimal: true
          }
        }
      );

      expect(result).toEqual(output);
    });
  });
});
