import { useEffect, useState } from 'react';

import { getAccountFromApi } from 'apiCalls';
import { AccountType } from 'types';
import { isContract } from 'utils';

export const useGetAccountFromApi = (address?: string | null) => {
  const [account, setAccount] = useState<AccountType | null>();

  useEffect(() => {
    const fetchAccountApi = async (address: string) => {
      try {
        const accountFromApi = await getAccountFromApi(address);

        setAccount(accountFromApi);
      } catch (error) {
        console.error(error);
        setAccount(null);
      }
    };

    if (address && isContract(address)) {
      setAccount(null);
      return;
    }

    if (address && !account) {
      fetchAccountApi(address);
    }
  }, [address, account]);

  return {
    loading: account === undefined,
    error: account === null,
    account
  };
};
