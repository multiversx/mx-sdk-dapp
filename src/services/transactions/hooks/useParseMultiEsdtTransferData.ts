import { useState, useEffect } from 'react';
import parseMultiEsdtTransferData, {
  MultiEsdtTxType
} from 'utils/transactions/parseMultiEsdtTransferData';

interface UseParseMultiEsdtTransferDataPropsType {
  data: string;
}

interface UseParseMultiEsdtTransferDataReturnType {
  parsedTransactions: MultiEsdtTxType[];
}

export function useParseMultiEsdtTransferData({
  data
}: UseParseMultiEsdtTransferDataPropsType): UseParseMultiEsdtTransferDataReturnType {
  const [parsedTransactions, setParsedTransactions] = useState<
    MultiEsdtTxType[]
  >([]);

  useEffect(() => {
    const parsedData = parseMultiEsdtTransferData(data);
    setParsedTransactions(parsedData);
  }, [data]);

  return { parsedTransactions };
}
