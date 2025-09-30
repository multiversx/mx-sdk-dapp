import axios, { AxiosError } from 'axios';
import { BATCH_TRANSACTIONS_ID_SEPARATOR } from 'constants/transactions.constants';
import { Transaction } from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import { TransactionTrackingConfigType } from 'methods/initApp/initApp.types';
import { addTransactionToast } from 'store/actions/toasts/toastsActions';
import { createTransactionsSession } from 'store/actions/transactions/transactionsActions';
import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { BatchTransactionsResponseType } from 'types/serverTransactions.types';
import { SignedTransactionType } from 'types/transactions.types';
import { isGuardianTx } from 'utils/transactions/isGuardianTx';
import { getToastDuration } from './helpers/getToastDuration';
import { getTransactionsSessionStatus } from './helpers/getTransactionsStatus';
import { isBatchTransaction } from './helpers/isBatchTransaction';
import { registerCallbacks } from './helpers/sessionCallbacks';
import { TransactionManagerTrackOptionsType } from './TransactionManager.types';

export class TransactionManager {
  private static instance: TransactionManager | null = null;

  public static getInstance(): TransactionManager {
    if (!TransactionManager.instance) {
      TransactionManager.instance = new TransactionManager();
    }
    return TransactionManager.instance;
  }

  /**
   * Set callbacks to be executed when the transaction session is successful or fails.
   * It is analogous to the `onSuccess` and `onFail` callbacks set in the `initApp` method,
   * as a way to override the global callbacks
   * @param onSuccess - The callback to run when the transaction session is successful.
   * @param onFail - The callback to run when the transaction session fails.
   * @example
   * ```ts
   * TransactionManager.setCallbacks({
   *   onSuccess: (sessionId) => {
   *     console.log('Transaction session successful', sessionId);
   *   },
   * });
   */
  public setCallbacks = ({
    onSuccess,
    onFail
  }: TransactionTrackingConfigType) => {
    registerCallbacks({ onSuccess, onFail });
  };

  public send = async (
    signedTransactions: Transaction[] | Transaction[][]
  ): Promise<SignedTransactionType[] | SignedTransactionType[][]> => {
    if (signedTransactions.length === 0) {
      throw new Error('No transactions to send');
    }

    try {
      if (!isBatchTransaction(signedTransactions)) {
        const flatTransactions =
          await this.sendSignedTransactions(signedTransactions);

        return flatTransactions;
      }

      const sentTransactions =
        await this.sendSignedBatchTransactions(signedTransactions);

      if (!sentTransactions.data || sentTransactions.data.error) {
        throw new Error(
          sentTransactions.data?.error ?? 'Failed to send transactions'
        );
      }

      const groupedTransactions = sentTransactions.data.transactions;

      return groupedTransactions;
    } catch (error) {
      const responseData = <{ message: string }>(
        (error as AxiosError).response?.data
      );
      throw responseData?.message ?? (error as Error).message;
    }
  };

  /**
   * Track the status of a transaction session.
   * @param sentTransactions - The transactions to track.
   * @param options - The options for the transaction session.
   * @returns The session id.
   * @example
   * ```ts
   * const sessionId = await txManager.track(sentTransactions, {
   *   transactionsDisplayInfo: {
   *     errorMessage: 'Failed adding stake',
   *     successMessage: 'Stake successfully added',
   *     processingMessage: 'Staking in progress'
   *   },
   *   onSuccess: async(sessionId) => {
   *     console.log('Session successful', sessionId);
   *   },
   *   onFail: async(sessionId) => {
   *     console.log('Session failed', sessionId);
   *   }
   *   sessionInformation: {
   *     stakeAmount: '1000000000000000000000000'
   *   }
   * });
   * ```
   */
  public track = async (
    sentTransactions: SignedTransactionType[] | SignedTransactionType[][],
    options: TransactionManagerTrackOptionsType = { disableToasts: false }
  ): Promise<string> => {
    console.log('props', { sentTransactions, options });

    const flatTransactions = this.sequentialToFlatArray(sentTransactions).map(
      (transaction) => ({
        ...transaction,
        status: transaction.status ?? TransactionServerStatusesEnum.pending
      })
    );

    const status = getTransactionsSessionStatus(flatTransactions);

    const sessionId = createTransactionsSession({
      transactions: flatTransactions,
      transactionsDisplayInfo: options.transactionsDisplayInfo,
      status: status ?? TransactionBatchStatusesEnum.sent,
      sessionInformation: options.sessionInformation
    });

    if (options.disableToasts === true) {
      return sessionId;
    }

    if (options.onSuccess) {
      registerCallbacks({ onSuccess: options.onSuccess, sessionId });
    }

    if (options.onFail) {
      registerCallbacks({ onFail: options.onFail, sessionId });
    }

    const totalDuration = getToastDuration(sentTransactions);
    addTransactionToast({
      toastId: sessionId,
      totalDuration
    });

    return sessionId;
  };

  private readonly sendSignedTransactions = async (
    signedTransactions: Transaction[]
  ): Promise<SignedTransactionType[]> => {
    const { apiAddress, apiTimeout } = networkSelector(getState());

    const mergedTransactions = await Promise.all(
      signedTransactions.map(async (transaction) => {
        const response = await axios.post(
          `${apiAddress}/transactions`,
          transaction.toPlainObject(),
          { timeout: Number(apiTimeout) }
        );

        const txHash = response.data.txHash;

        return {
          ...transaction.toPlainObject(),
          ...response.data,
          status: TransactionServerStatusesEnum.pending,
          hash: txHash
        };
      })
    );

    return mergedTransactions;
  };

  private readonly sendSignedBatchTransactions = async (
    signedTransactions: Transaction[][]
  ) => {
    const { address } = getAccount();
    const { apiAddress, apiTimeout } = networkSelector(getState());

    if (!address) {
      return {
        error:
          'Invalid address provided. You need to be logged in to send transactions'
      };
    }

    const batchId = this.buildBatchId(address);

    const plainTransactions = signedTransactions.map((group) =>
      group.map((tx) => tx.toPlainObject())
    );

    const payload = {
      transactions: plainTransactions,
      id: batchId
    };

    const { data } = await axios.post<BatchTransactionsResponseType>(
      `${apiAddress}/batch`,
      payload,
      {
        timeout: Number(apiTimeout)
      }
    );

    const parsedTransactions = data.transactions.map((group) =>
      group.map((tx) => {
        const parsedTx: SignedTransactionType = {
          ...tx,
          status: TransactionServerStatusesEnum.pending,
          hash: tx.hash
        };

        // Remove when the protocol supports usernames for guardian transactions
        if (isGuardianTx({ data: parsedTx.data })) {
          delete parsedTx.senderUsername;
          delete parsedTx.receiverUsername;
        }

        return parsedTx;
      })
    );

    return {
      data: {
        ...data,
        transactions: parsedTransactions
      }
    };
  };

  private readonly buildBatchId = (address: string) => {
    const sessionId = Date.now().toString();
    return `${sessionId}${BATCH_TRANSACTIONS_ID_SEPARATOR}${address}`;
  };
  private readonly sequentialToFlatArray = (
    transactions: SignedTransactionType[] | SignedTransactionType[][] = []
  ) =>
    this.getIsSequential(transactions)
      ? transactions.flat()
      : (transactions as SignedTransactionType[]);

  private readonly getIsSequential = (
    transactions?: SignedTransactionType[] | SignedTransactionType[][]
  ) => transactions?.every((transaction) => Array.isArray(transaction));
}
