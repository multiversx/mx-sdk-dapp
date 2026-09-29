import { getEconomics } from 'apiCalls/economics/getEconomics';
import { GAS_PRICE } from 'constants/mvx.constants';
import { Transaction } from 'lib/sdkCore';
import { DECIMALS, DIGITS, formatAmount } from 'lib/sdkDappUtils';
import { SignTransactionsStateManager } from 'managers/internal/SignTransactionsStateManager/SignTransactionsStateManager';
import { SignEventsEnum } from 'managers/internal/SignTransactionsStateManager/types';
import { getAccount } from 'methods/account/getAccount';
import { getEgldLabel } from 'methods/network/getEgldLabel';
import { SignTransactionsOptionsType } from 'providers/DappProvider/helpers/signTransactions/signTransactionsWithProvider';
import { cancelCrossWindowAction } from 'providers/helpers/cancelCrossWindowAction';
import { finalizeSignedTransactions } from 'providers/strategies/helpers/signTransactions/helpers/finalizeSignedTransactions';
import { IProvider } from 'providers/types/providerFactory.types';
import { setIsSidePanelOpen } from 'store/actions/ui/uiActions';
import { providerSettingsSelector } from 'store/selectors/configSelectors';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getCommonData } from './helpers/getCommonData/getCommonData';
import { getFeeData } from './helpers/getFeeData';
import { getMultiEsdtTransferData } from './helpers/getMultiEsdtTransferData/getMultiEsdtTransferData';
import { guardTransactions as getGuardedTransactions } from './helpers/guardTransactions/guardTransactions';

type SignTransactionsParamsType = {
  transactions?: Transaction[];
  handleSign: IProvider['signTransactions'];
  guardTransactions?: typeof getGuardedTransactions;
  options?: SignTransactionsOptionsType;
};

export async function signTransactions({
  transactions = [],
  handleSign,
  guardTransactions = getGuardedTransactions,
  options
}: SignTransactionsParamsType): Promise<Transaction[]> {
  if (transactions.length === 0) {
    return [];
  }

  const { address, shard, username } = getAccount();
  const network = networkSelector(getState());
  const providerConfig = providerSettingsSelector(getState());

  if (providerConfig?.isSigningUiEnabled === false) {
    // Mark signing as in progress so idle state manager doesn't interfere
    setIsSidePanelOpen(true);

    try {
      const signedTransactions: Transaction[] = [];

      for (const transaction of transactions) {
        const [signedTransaction] = (await handleSign([transaction])) ?? [];

        if (signedTransaction) {
          signedTransactions.push(signedTransaction);
        }
      }

      return await finalizeSignedTransactions({
        signedTransactions,
        options,
        guardTransactions
      });
    } finally {
      setIsSidePanelOpen(false);
    }
  }

  const egldLabel = getEgldLabel();

  const { allTransactions, parsedTransactionsByDataField } =
    getMultiEsdtTransferData(transactions);

  const signedIndexes: number[] = [];

  const manager = SignTransactionsStateManager.getInstance();
  await manager.openUI();

  return new Promise<Transaction[]>((resolve, reject) => {
    const signedTransactions: Transaction[] = [];
    let price: number | undefined;
    let currentScreenIndex = 0;
    let isSettled = false;

    const fail = (error: unknown) => {
      if (isSettled) {
        return;
      }

      isSettled = true;
      manager.closeUI();
      reject(error);
    };

    const getScreenCommonData = () => {
      const { transaction } = allTransactions[currentScreenIndex];

      return getCommonData({
        allTransactions,
        currentScreenIndex,
        egldLabel,
        network,
        gasPriceData: manager.getGasPriceOptionMap[Number(transaction.nonce)],
        price,
        address,
        username,
        shard,
        signedIndexes,
        parsedTransactionsByDataField
      });
    };

    const updateScreen = async () => {
      try {
        manager.updateIsLoading(true);

        const { commonData, tokenTransaction, fungibleTransaction } =
          await getScreenCommonData();

        if (tokenTransaction) {
          manager.updateTokenTransaction(tokenTransaction);
        }

        if (fungibleTransaction) {
          manager.updateNonFungibleTransaction(
            fungibleTransaction.type,
            fungibleTransaction
          );
        }

        manager.updateCommonData(commonData);
      } catch (error) {
        console.error(
          `Error fetching common data for transaction at index ${currentScreenIndex}:`,
          error
        );

        throw error;
      } finally {
        manager.updateIsLoading(false);
      }
    };

    const onBack = () => {
      if (currentScreenIndex > 0) {
        currentScreenIndex--;
        updateScreen().catch(fail);
      }
    };

    const onSetGasPriceOption = (gasPriceOption: number = GAS_PRICE) => {
      try {
        const currentTransaction = allTransactions[currentScreenIndex];
        const transaction = currentTransaction.transaction;
        const currentNonce = Number(transaction.nonce);

        manager.updateGasPriceMap({
          nonce: currentNonce,
          gasPriceOption
        });

        const plainTransaction = transaction.toPlainObject();

        const newTransaction = Transaction.newFromPlainObject({
          ...plainTransaction,
          gasPrice: gasPriceOption
        });

        const feeData = getFeeData({
          transaction: newTransaction,
          price
        });

        const formattedGasPrice = formatAmount({
          input: gasPriceOption.toString(),
          decimals: DECIMALS,
          addCommas: true,
          digits: DIGITS
        });

        manager.updateCommonData({
          feeLimit: feeData.feeLimitFormatted,
          feeInFiatLimit: feeData.feeInFiatLimit,
          gasPrice: formattedGasPrice,
          gasPriceOption
        });
      } catch (error) {
        fail(error);
      }
    };

    const onCancel = async () => {
      if (isSettled) {
        return;
      }

      isSettled = true;
      reject(new Error('Transaction signing cancelled by user'));

      try {
        await cancelCrossWindowAction();
      } finally {
        manager.closeUI();
      }
    };

    const onNext = () => {
      if (currentScreenIndex < manager.transactionsCount - 1) {
        currentScreenIndex++;
        updateScreen().catch(fail);
      }
    };

    const sign = async () => {
      const currentTransaction = allTransactions[currentScreenIndex];
      const transaction = currentTransaction.transaction;

      const { commonData } = await getScreenCommonData();

      if (!commonData.needsSigning) {
        signedIndexes.push(currentScreenIndex);
        return onNext();
      }

      const plainTransaction = transaction.toPlainObject();
      const txNonce = plainTransaction.nonce;

      const { gasPriceOption } = manager.getGasPriceOptionMap[txNonce];

      const transactionToSign = Transaction.newFromPlainObject({
        ...plainTransaction,
        gasPrice: gasPriceOption
      });

      const signedTxs = await handleSign([transactionToSign]);

      // cancelled while the provider was signing
      if (isSettled) {
        return;
      }

      if (signedTxs) {
        signedIndexes.push(currentScreenIndex);
        signedTransactions.push(signedTxs[0]);
      }

      const isLastScreen = currentScreenIndex === allTransactions.length - 1;
      const allSignableTransactions = allTransactions.filter(
        (tx) => tx.needsSigning
      );

      const areAllTransactionsSigned =
        signedTransactions.length === allSignableTransactions.length;

      if (!isLastScreen || !areAllTransactionsSigned) {
        return onNext();
      }

      const finalizedTransactions = await finalizeSignedTransactions({
        signedTransactions,
        options,
        guardTransactions
      });

      if (isSettled) {
        return;
      }

      isSettled = true;
      manager.closeUI();
      resolve(finalizedTransactions);
    };

    const onSign = () => {
      sign().catch(fail);
    };

    // the panel can be closed before the first screen is ready
    manager.subscribeToEventBus(SignEventsEnum.CLOSE, onCancel);

    const eventHandlersMap = new Map<SignEventsEnum, (...args: any[]) => void>([
      [SignEventsEnum.NEXT, onNext],
      [SignEventsEnum.CONFIRM, onSign],
      [SignEventsEnum.CLOSE, onCancel],
      [SignEventsEnum.BACK, onBack],
      [SignEventsEnum.SET_GAS_PRICE_OPTION, onSetGasPriceOption]
    ]);

    const run = async () => {
      const economics = await getEconomics({ baseURL: network.apiAddress });
      price = economics?.price;

      manager.notifyDataUpdate();
      manager.initializeGasPriceMap(
        allTransactions.map((tx) => tx.transaction)
      );

      manager.clearEventHandlers([
        SignEventsEnum.NEXT,
        SignEventsEnum.CONFIRM,
        SignEventsEnum.CLOSE,
        SignEventsEnum.BACK,
        SignEventsEnum.SET_GAS_PRICE_OPTION
      ]);

      for (const [event, handler] of eventHandlersMap) {
        manager.subscribeToEventBus(event, handler);
      }

      await updateScreen();
    };

    run().catch(fail);
  });
}
