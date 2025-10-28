import { getEconomics } from 'apiCalls/economics/getEconomics';
import { EMPTY_PPU } from 'constants/placeholders.constants';
import { Transaction } from 'lib/sdkCore';
import { DECIMALS, DIGITS, formatAmount } from 'lib/sdkDappUtils';
import { SignTransactionsStateManager } from 'managers/internal/SignTransactionsStateManager/SignTransactionsStateManager';
import {
  ISignTransactionsPanelCommonData,
  SignEventsEnum
} from 'managers/internal/SignTransactionsStateManager/types';
import { getAccountInfo } from 'methods/account/getAccountInfo';
import { getEgldLabel } from 'methods/network/getEgldLabel';
import { cancelCrossWindowAction } from 'providers/helpers/cancelCrossWindowAction';
import { IProvider } from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getCommonData } from './helpers/getCommonData/getCommonData';
import { getRecommendedGasPrice } from './helpers/getCommonData/helpers/getRecommendedGasPrice';
import { getFeeData } from './helpers/getFeeData';
import { getMultiEsdtTransferData } from './helpers/getMultiEsdtTransferData/getMultiEsdtTransferData';
import { guardTransactions as getGuardedTransactions } from './helpers/guardTransactions/guardTransactions';

type SignTransactionsParamsType = {
  transactions?: Transaction[];
  handleSign: IProvider['signTransactions'];
  guardTransactions?: typeof getGuardedTransactions;
};

export async function signTransactions({
  transactions = [],
  handleSign,
  guardTransactions = getGuardedTransactions
}: SignTransactionsParamsType): Promise<Transaction[]> {
  const {
    account: { address, shard, username }
  } = getAccountInfo();
  const network = networkSelector(getState());

  const egldLabel = getEgldLabel();

  const { allTransactions, parsedTransactionsByDataField } =
    getMultiEsdtTransferData(transactions);

  const signedIndexes: number[] = [];

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
            gasPriceData: manager.ppuMap[currentNonce],
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

    const onSetPpu = (
      ppu: ISignTransactionsPanelCommonData['ppu'] = EMPTY_PPU
    ) => {
      const currentTransaction = allTransactions[currentScreenIndex];
      const transaction = currentTransaction.transaction;
      const currentNonce = Number(transaction.nonce);

      manager.updateGasPriceMap({
        nonce: currentNonce,
        ppu
      });

      manager.updateCommonData({ ppu });

      const plainTransaction = transaction.toPlainObject();
      const newGasPrice = getRecommendedGasPrice({
        transaction: plainTransaction,
        gasPriceData: manager.ppuMap[currentNonce]
      });

      const newTransaction = Transaction.newFromPlainObject({
        ...plainTransaction,
        gasPrice: newGasPrice
      });

      const feeData = getFeeData({
        transaction: newTransaction,
        price
      });

      const formattedGasPrice = formatAmount({
        input: newGasPrice.toString(),
        decimals: DECIMALS,
        addCommas: true,
        digits: DIGITS
      });

      manager.updateCommonData({
        feeLimit: feeData.feeLimitFormatted,
        feeInFiatLimit: feeData.feeInFiatLimit,
        gasPrice: formattedGasPrice,
        ppu
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
        gasPriceData: manager.ppuMap[currentNonce],
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

      const newGasPrice = getRecommendedGasPrice({
        transaction: plainTransaction,
        gasPriceData: manager.ppuMap[txNonce]
      });

      const transactionToSign = Transaction.newFromPlainObject({
        ...plainTransaction,
        gasPrice: newGasPrice
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
          const optionallyGuardedTransactions =
            await guardTransactions(signedTransactions);
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
      [SignEventsEnum.SET_PPU, onSetPpu]
    ]);

    function setupEventListeners() {
      for (const [event, handler] of eventHandlersMap) {
        manager.subscribeToEventBus(event, handler);
      }
    }

    setupEventListeners();
    await updateScreen();
  });
}
