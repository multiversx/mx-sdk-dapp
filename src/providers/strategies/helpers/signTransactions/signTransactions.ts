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
  const { address, shard, username } = getAccount();
  const network = networkSelector(getState());
  const providerConfig = providerSettingsSelector(getState());

  const egldLabel = getEgldLabel();

  const { allTransactions, parsedTransactionsByDataField } =
    getMultiEsdtTransferData(transactions);

  const signedIndexes: number[] = [];

  console.log({
    providerConfig,
    options
  });

  if (providerConfig?.isSigningUiEnabled === false) {
    // Mark signing as in progress so idle state manager doesn't interfere
    setIsSidePanelOpen(true);

    try {
      const signedTransactions: Transaction[] = [];

      for (const item of allTransactions) {
        const signedTxs = await handleSign([item.transaction]);
        if (signedTxs && signedTxs.length > 0) {
          signedTransactions.push(signedTxs[0]);
        }
      }

      const optionallyGuardedTransactions =
        await guardTransactions(signedTransactions);

      return optionallyGuardedTransactions;
    } finally {
      setIsSidePanelOpen(false);
    }
  }

  const manager = SignTransactionsStateManager.getInstance();
  await manager.openUI();

  if (!manager) {
    throw new Error('Unable to establish connection with sign screens');
  }

  const handleCancel = async () => {
    await cancelCrossWindowAction();
    manager.closeUI();
  };

  manager.subscribeToEventBus(SignEventsEnum.CLOSE, handleCancel);

  return new Promise<Transaction[]>(async (resolve, reject) => {
    const signedTransactions: Transaction[] = [];
    const economics = await getEconomics({ baseURL: network.apiAddress });

    manager.notifyDataUpdate();

    manager.initializeGasPriceMap(allTransactions.map((tx) => tx.transaction));
    const price = economics?.price;

    let currentScreenIndex = 0;

    const updateScreen = async () => {
      const currentTransaction = allTransactions[currentScreenIndex];
      const transaction = currentTransaction?.transaction;

      const currentNonce = Number(transaction.nonce);

      try {
        manager.updateIsLoading(true);

        const { commonData, tokenTransaction, fungibleTransaction } =
          await getCommonData({
            allTransactions,
            currentScreenIndex,
            egldLabel,
            network,
            gasPriceData: manager.getGasPriceOptionMap[currentNonce],
            price,
            address,
            username,
            shard,
            signedIndexes,
            parsedTransactionsByDataField
          });

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
        updateScreen();
      }
    };

    const onSetGasPriceOption = (gasPriceOption: number = GAS_PRICE) => {
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
    };

    const onCancel = async () => {
      reject(new Error('Transaction signing cancelled by user'));
      await cancelCrossWindowAction();
      manager.closeUI();
    };

    const onNext = () => {
      if (currentScreenIndex < manager.transactionsCount - 1) {
        currentScreenIndex++;
        updateScreen();
      }
    };

    const onSign = async () => {
      const currentTransaction = allTransactions[currentScreenIndex];
      const transaction = currentTransaction.transaction;
      const currentNonce = Number(transaction.nonce);

      const { commonData } = await getCommonData({
        allTransactions,
        currentScreenIndex,
        egldLabel,
        network,
        gasPriceData: manager.getGasPriceOptionMap[currentNonce],
        price,
        address,
        username,
        shard,
        signedIndexes,
        parsedTransactionsByDataField
      });

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

      try {
        const signedTxs = await handleSign([transactionToSign]);
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

        if (isLastScreen && areAllTransactionsSigned) {
          const finalizedTransactions =
            (await options?.callback?.(signedTransactions)) ||
            signedTransactions;

          const optionallyGuardedTransactions = await guardTransactions(
            finalizedTransactions
          );
          manager.closeUI();
          return resolve(optionallyGuardedTransactions);
        }

        onNext();
      } catch (error) {
        manager.closeUI();
        reject(error);
      }
    };

    const eventHandlersMap = new Map([
      [SignEventsEnum.NEXT, onNext],
      [SignEventsEnum.CONFIRM, onSign],
      [SignEventsEnum.CLOSE, onCancel],
      [SignEventsEnum.BACK, onBack],
      [SignEventsEnum.SET_GAS_PRICE_OPTION, onSetGasPriceOption]
    ]);

    function setupEventListeners() {
      for (const [event, handler] of eventHandlersMap) {
        manager.subscribeToEventBus(event, handler);
      }
    }

    manager.clearEventHandlers([
      SignEventsEnum.NEXT,
      SignEventsEnum.CONFIRM,
      SignEventsEnum.CLOSE,
      SignEventsEnum.BACK,
      SignEventsEnum.SET_GAS_PRICE_OPTION
    ]);

    setupEventListeners();
    await updateScreen();
  });
}
