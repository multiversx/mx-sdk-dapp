import BigNumber from 'bignumber.js';

import { getEconomics } from 'apiCalls/economics/getEconomics';
import { formatAmount } from 'lib/sdkDappUtils';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { ProviderErrorsEnum } from 'types';
import { fetchAccount } from 'utils/account/fetchAccount';
import { getUsdValue } from 'utils/operations/getUsdValue';

import {
  IUpdateAccountsList,
  UpdateAccountObjectType
} from './updateAccountsList.types';
import { ILedgerAccount } from '../../types/ledger.types';

/**
 * Updates the list of accounts and fetches their balances.
 *
 * This function performs the following steps:
 * 1. Checks if the manager and provider are initialized; if not, throws an error.
 * 2. Retrieves the starting index for pagination and the current list of accounts.
 * 3. Checks if there is already data for the current page to avoid unnecessary fetching.
 * 4. If no data is present, it fetches the accounts from the wallet provider.
 * 5. Updates the state manager with the new account data and their balances.
 * 6. Handles errors by reverting to existing accounts and logging the error.
 */
export const updateAccountsList = async ({
  manager,
  provider
}: IUpdateAccountsList) => {
  if (!manager || !provider) {
    throw new Error(ProviderErrorsEnum.notInitialized);
  }

  const { network } = getNetworkConfig();
  const startIndex = manager.getAccountScreenData()?.startIndex || 0;
  const allAccounts = manager.getAllAccounts();
  const economics = await getEconomics({ baseURL: network.apiAddress });

  const filterByStartIndexRange = (account: ILedgerAccount) =>
    account.index >= startIndex &&
    account.index < startIndex + manager.addressesPerPage;

  const allAccountsObject = allAccounts.reduce(
    (accountsObject: UpdateAccountObjectType, account) =>
      Object.assign(accountsObject, { [account.index]: account }),
    {}
  );

  const currentAccounts = allAccounts.filter(filterByStartIndexRange);
  const isStartIndexInAccounts = Boolean(allAccountsObject[startIndex]);

  manager.updateAccountScreen({
    isLoading: !isStartIndexInAccounts
  });

  if (currentAccounts.length > 0) {
    manager.updateAccountScreen({ accounts: currentAccounts });
    return;
  }

  try {
    const accountsArray = await provider.getAccounts(
      startIndex,
      manager.addressesPerPage
    );

    const accountsWithBalance = accountsArray.map(
      (address, accountIindex): ILedgerAccount => ({
        address,
        balance: '...',
        index: accountIindex + startIndex
      })
    );

    const newAllAccounts = [...allAccounts, ...accountsWithBalance];
    const balancePromises = accountsArray.map((address) =>
      fetchAccount({ address, baseURL: network.apiAddress })
    );

    const balances = await Promise.all(balancePromises);
    const newAllAccountsObject = newAllAccounts.reduce(
      (accountsObject: UpdateAccountObjectType, account) =>
        Object.assign(accountsObject, { [account.address]: account }),

      {}
    );

    balances.forEach((account) => {
      if (!account || !economics || !economics.price) {
        return;
      }

      const balanceBigNumber = new BigNumber(account.balance);
      const formattedBalance = balanceBigNumber
        .dividedBy(BigNumber(10).pow(18))
        .toFormat(4)
        .toString();

      if (balanceBigNumber.isNaN()) {
        return;
      }

      const usdValue = getUsdValue({
        amount: formatAmount({ input: account.balance }),
        usd: economics?.price
      });

      newAllAccountsObject[account.address].balance = formattedBalance;
      newAllAccountsObject[account.address].usdValue = usdValue;
    });

    const newAllAccountsArray = Object.values(newAllAccountsObject).sort(
      (alpha, beta) => alpha.index - beta.index
    );

    const accountsScreenArray = newAllAccountsArray.filter(
      filterByStartIndexRange
    );

    manager.updateAllAccounts(newAllAccountsArray);
    manager.updateAccountScreen({
      accounts: accountsScreenArray,
      isLoading: false
    });
  } catch (error) {
    console.error('Failed to fetch accounts:', error);
  }
};
