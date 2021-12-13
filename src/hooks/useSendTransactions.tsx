import { operations, validation } from '@elrondnetwork/dapp-utils';
import { Transaction } from '@elrondnetwork/erdjs';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import BigNumber from 'bignumber.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTransactionsToSign, setNotificationModal } from 'redux/slices';
import { gasPerDataByte, gasPriceModifier } from '../constants';
import { accountBalanceSelector } from '../redux/selectors';

const defaultMinGasLimit = 50000000;
function calcTotalFee(transactions: Transaction[], minGasLimit: number) {
  let totalFee = new BigNumber(0);

  transactions.forEach((tx) => {
    const fee = operations.calculateFeeLimit({
      gasPerDataByte,
      gasPriceModifier,
      minGasLimit: String(minGasLimit),
      gasLimit: tx.getGasLimit().valueOf().toString(),
      gasPrice: tx.getGasPrice().valueOf().toString(),
      data: tx.getData().toString(),
      chainId: tx.getChainID().valueOf()
    });
    totalFee = totalFee.plus(new BigNumber(fee));
  });

  return totalFee;
}

export default function useSendTransactions() {
  const dispatch = useDispatch();
  const accountBalance = useSelector(accountBalanceSelector);

  return (
    transactionPayload: Transaction[] | Transaction,
    minGasLimit = defaultMinGasLimit
  ) => {
    //this will make sure that we can send single transactions to be signed
    const transactions = Array.isArray(transactionPayload)
      ? transactionPayload
      : [transactionPayload];
    const bNtotalFee = calcTotalFee(transactions, minGasLimit);
    const bNbalance = new BigNumber(
      validation.stringIsFloat(accountBalance) ? accountBalance : '0'
    );

    if (bNbalance.minus(bNtotalFee).isGreaterThan(0)) {
      const sessionId = Date.now().toString();

      dispatch(
        setTransactionsToSign({
          transactions: transactions.map((tx) => tx.toPlainObject()),
          sessionId,
          callbackRoute: window.location.pathname
        })
      );
    } else {
      dispatch(
        setNotificationModal({
          title: 'Insufficient EGLD funds',
          description:
            'Current EGLD balance cannot cover the transaction fees.',
          icon: faExclamationTriangle,
          iconClassName: 'text-warning'
        })
      );
    }
  };
}
