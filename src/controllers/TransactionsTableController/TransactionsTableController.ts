import { DECIMALS } from 'lib/sdkDappUtils';
import {
  ServerTransactionType,
  TransactionDirectionEnum
} from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { getInterpretedTransaction } from 'utils/transactions/getInterpretedTransaction';
import { getTransactionValue } from 'utils/transactions/getInterpretedTransaction/getTransactionValue/getTransactionValue';
import { getLockedAccountName } from 'utils/transactions/getInterpretedTransaction/helpers/getLockedAccountName';
import { getShardText } from 'utils/transactions/getInterpretedTransaction/helpers/getShardText';
import { isContract } from 'utils/validation/isContract';
import {
  TransactionsTableRowType,
  TransactionValueType
} from './transactionsTableController.types';
import { FormatAmountController } from '../FormatAmountController';

interface TransactionsTableProcessTransactionsParamsType {
  address: string;
  egldLabel: string;
  explorerAddress: string;
  transactions: ServerTransactionType[];
}

export class TransactionsTableController {
  public static async processTransactions({
    address,
    egldLabel,
    explorerAddress,
    transactions
  }: TransactionsTableProcessTransactionsParamsType): Promise<
    TransactionsTableRowType[]
  > {
    const interpretedTransactions = transactions.map((transaction) =>
      getInterpretedTransaction({
        address,
        explorerAddress,
        transaction
      })
    );

    const transactionRows = await Promise.all(
      interpretedTransactions.map(async (transaction) => {
        const receiverName = transaction.receiverAssets?.name.replace(
          /\p{Emoji}/gu,
          ''
        );

        const senderName = transaction.senderAssets?.name.replace(
          /\p{Emoji}/gu,
          ''
        );

        const { senderLockedAccount, receiverLockedAccount } =
          await getLockedAccountName({
            receiver: transaction.receiver,
            sender: transaction.sender,
            tokenId: transaction.tokenIdentifier
          });

        const { egldValueData, tokenValueData, nftValueData } =
          getTransactionValue({
            transaction
          });

        const hideBadgeForMetaESDT =
          nftValueData?.token.type === NftEnumType.MetaESDT;

        const badge = hideBadgeForMetaESDT
          ? undefined
          : nftValueData?.badgeText;

        const formattedAmount = FormatAmountController.getData({
          input:
            egldValueData?.value ??
            tokenValueData?.value ??
            nftValueData?.value ??
            '',
          decimals:
            egldValueData?.decimals ??
            tokenValueData?.decimals ??
            nftValueData?.decimals ??
            DECIMALS,
          digits: 2
        });

        const transactionValue: TransactionValueType = {
          badge: badge ?? undefined,
          collection:
            tokenValueData?.token.collection ?? nftValueData?.token.collection,
          egldLabel: egldValueData ? egldLabel : '',
          link:
            tokenValueData?.tokenExplorerLink ??
            nftValueData?.tokenExplorerLink,
          linkText:
            tokenValueData?.tokenLinkText ?? nftValueData?.tokenLinkText,
          name: tokenValueData?.token.name ?? nftValueData?.token.name,
          showFormattedAmount: Boolean(
            egldValueData ||
              tokenValueData?.tokenFormattedAmount ||
              nftValueData?.tokenFormattedAmount
          ),
          svgUrl: tokenValueData?.token.svgUrl ?? nftValueData?.token.svgUrl,
          ticker: tokenValueData?.token.ticker ?? nftValueData?.token.ticker,
          titleText: tokenValueData?.titleText ?? nftValueData?.titleText,
          valueDecimal: formattedAmount.valueDecimal,
          valueInteger: formattedAmount.valueInteger
        };

        const receiverShard = getShardText(transaction.receiverShard);
        const senderShard = getShardText(transaction.senderShard);

        const transactionRow: TransactionsTableRowType = {
          age: transaction.transactionDetails.age,
          direction: transaction.transactionDetails.direction,
          method: transaction.transactionDetails.method,
          iconInfo: transaction.transactionDetails.iconInfo,
          link: transaction.links.transactionLink ?? '',
          txHash: transaction.txHash,
          receiver: {
            address: transaction.receiver,
            name: receiverName ?? '',
            description: `${receiverName || transaction.receiver} (${
              transaction.receiver
            })`,
            isContract: isContract(transaction.receiver),
            isTokenLocked: Boolean(receiverLockedAccount),
            link: transaction.links.receiverLink ?? '',
            shard: receiverShard,
            shardLink: transaction.links.receiverLink,
            showLink:
              transaction.transactionDetails.direction !==
              TransactionDirectionEnum.IN
          },
          sender: {
            address: transaction.sender,
            name: senderName ?? '',
            description: `${senderName || transaction.sender} (${
              transaction.sender
            })`,
            isContract: isContract(transaction.sender),
            isTokenLocked: Boolean(senderLockedAccount),
            link: transaction.links.senderLink ?? '',
            shard: senderShard,
            shardLink: transaction.links.senderShardLink,
            showLink:
              transaction.transactionDetails.direction !==
              TransactionDirectionEnum.OUT
          },
          value: transactionValue
        };

        return transactionRow;
      })
    );

    return transactionRows;
  }
}
