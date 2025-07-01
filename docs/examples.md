# Examples

This document provides comprehensive examples and common use cases for the MultiversX SDK dApp. Each example includes complete, working code that you can use as a starting point for your own dApp.

## Complete dApp Setup

### Basic React dApp

```typescript
// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
import type { InitAppType } from '@multiversx/sdk-dapp/out/methods/initApp/initApp.types';

import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { TransactionPage } from './pages/TransactionPage';

const App = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const config: InitAppType = {
      storage: { 
        getStorageCallback: () => localStorage 
      },
      dAppConfig: {
        environment: EnvironmentsEnum.devnet,
        nativeAuth: true,
        transactionTracking: {
          successfulToastLifetime: 5000,
          onSuccess: async (sessionId) => {
            console.log('Transaction successful:', sessionId);
          },
          onFail: async (sessionId) => {
            console.log('Transaction failed:', sessionId);
          }
        }
      }
    };

    initApp(config).then(() => {
      setIsInitialized(true);
    }).catch((error) => {
      console.error('Failed to initialize app:', error);
    });
  }, []);

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Initializing dApp...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
```

### Home Page with Wallet Connection

```typescript
// pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';

export const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useGetIsLoggedIn();

  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: ({ type, anchor }) => {
      console.log('Logged in with:', type);
      navigate('/dashboard');
    },
    onClose: () => {
      console.log('Login panel closed');
    }
  });

  const handleConnect = () => {
    unlockPanelManager.openUnlockPanel();
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MultiversX dApp
          </h1>
          <p className="text-lg text-gray-600">
            Connect your wallet to get started
          </p>
        </div>

        <div className="space-y-4">
          {!isLoggedIn ? (
            <button
              onClick={handleConnect}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={handleGoToDashboard}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
```

### Dashboard with Account Information

```typescript
// pages/DashboardPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';
import { formatAmount } from '@multiversx/sdk-dapp/out/utils/operations/formatAmount';
import { shortenAddress } from '@multiversx/sdk-dapp/out/utils/operations/shortenAddress';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();
  const isLoggedIn = useGetIsLoggedIn();
  const { loginMethod } = useGetLoginInfo();
  const [refreshing, setRefreshing] = useState(false);

  if (!isLoggedIn) {
    navigate('/');
    return null;
  }

  const handleLogout = async () => {
    try {
      const provider = getAccountProvider();
      await provider.logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleRefreshAccount = async () => {
    setRefreshing(true);
    try {
      await refreshAccount();
    } catch (error) {
      console.error('Failed to refresh account:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const formattedBalance = formatAmount({
    input: account.balance,
    decimals: network.decimals,
    digits: 4
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                MultiversX dApp
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/transactions')}
                className="text-gray-700 hover:text-gray-900"
              >
                Transactions
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Account Info Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Account Information
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                    <dd className="text-sm text-gray-900 font-mono">
                      {shortenAddress(account.address, 8)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Balance</dt>
                    <dd className="text-sm text-gray-900">
                      {formattedBalance} {network.egldLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Nonce</dt>
                    <dd className="text-sm text-gray-900">{account.nonce}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Shard</dt>
                    <dd className="text-sm text-gray-900">{account.shard}</dd>
                  </div>
                </dl>
                <button
                  onClick={handleRefreshAccount}
                  disabled={refreshing}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {refreshing ? 'Refreshing...' : 'Refresh Account'}
                </button>
              </div>
            </div>

            {/* Network Info Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Network Information
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Network</dt>
                    <dd className="text-sm text-gray-900">{network.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Chain ID</dt>
                    <dd className="text-sm text-gray-900">{network.chainId}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Currency</dt>
                    <dd className="text-sm text-gray-900">{network.egldLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Provider</dt>
                    <dd className="text-sm text-gray-900 capitalize">{loginMethod}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => navigate('/transactions')}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                  >
                    Send Transaction
                  </button>
                  <button
                    onClick={() => window.open(`${network.explorerAddress}/accounts/${account.address}`, '_blank')}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                  >
                    View on Explorer
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(account.address)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                  >
                    Copy Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

## Transaction Examples

### Simple EGLD Transfer

```typescript
// components/EGLDTransfer.tsx
import React, { useState } from 'react';
import { Address, Transaction, TransactionPayload } from '@multiversx/sdk-core';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';
import { parseAmount } from '@multiversx/sdk-dapp/out/utils/operations/parseAmount';
import { isValidAddress } from '@multiversx/sdk-dapp/out/utils/validation/isValidAddress';
import { GAS_PRICE, GAS_LIMIT } from '@multiversx/sdk-dapp/out/constants/mvx.constants';

export const EGLDTransfer = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate inputs
      if (!isValidAddress(recipient)) {
        throw new Error('Invalid recipient address');
      }

      if (!amount || parseFloat(amount) <= 0) {
        throw new Error('Invalid amount');
      }

      // Refresh account to get latest nonce
      await refreshAccount();

      // Create transaction
      const transaction = new Transaction({
        value: BigInt(parseAmount(amount, network.decimals)),
        data: new TransactionPayload(message),
        receiver: Address.newFromBech32(recipient),
        gasLimit: BigInt(GAS_LIMIT),
        gasPrice: BigInt(GAS_PRICE),
        chainID: network.chainId,
        nonce: BigInt(account.nonce),
        sender: Address.newFromBech32(account.address),
        version: 1
      });

      // Sign transaction
      const provider = getAccountProvider();
      const signedTransactions = await provider.signTransactions([transaction]);

      // Send and track transaction
      const txManager = TransactionManager.getInstance();
      const sentTransactions = await txManager.send(signedTransactions);
      
      const sessionId = await txManager.track(sentTransactions, {
        transactionsDisplayInfo: {
          processingMessage: 'Sending EGLD...',
          errorMessage: 'Transfer failed',
          successMessage: 'Transfer completed successfully!'
        }
      });

      console.log('Transaction session ID:', sessionId);
      
      // Reset form
      setRecipient('');
      setAmount('');
      setMessage('');
      
    } catch (error: any) {
      setError(error.message || 'Transaction failed');
      console.error('Transaction error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        Send EGLD
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Recipient Address
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="erd1..."
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount ({network.egldLabel})
          </label>
          <input
            type="number"
            step="0.000000000000000001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message (Optional)
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello MultiversX!"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Transaction'}
        </button>
      </form>
    </div>
  );
};
```

### Smart Contract Interaction

```typescript
// components/SmartContractCall.tsx
import React, { useState } from 'react';
import { Address, Transaction, TransactionPayload } from '@multiversx/sdk-core';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';
import { GAS_PRICE } from '@multiversx/sdk-dapp/out/constants/mvx.constants';

export const SmartContractCall = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [contractAddress, setContractAddress] = useState('');
  const [functionName, setFunctionName] = useState('');
  const [args, setArgs] = useState(['']);
  const [gasLimit, setGasLimit] = useState('5000000');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addArgument = () => {
    setArgs([...args, '']);
  };

  const updateArgument = (index: number, value: string) => {
    const newArgs = [...args];
    newArgs[index] = value;
    setArgs(newArgs);
  };

  const removeArgument = (index: number) => {
    setArgs(args.filter((_, i) => i !== index));
  };

  const buildTransactionData = () => {
    let data = functionName;
    
    args.forEach(arg => {
      if (arg.trim()) {
        // Convert string argument to hex
        const hexArg = Buffer.from(arg.trim()).toString('hex');
        data += `@${hexArg}`;
      }
    });
    
    return data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!contractAddress || !functionName) {
        throw new Error('Contract address and function name are required');
      }

      await refreshAccount();

      const transactionData = buildTransactionData();
      
      const transaction = new Transaction({
        value: BigInt(0),
        data: new TransactionPayload(transactionData),
        receiver: Address.newFromBech32(contractAddress),
        gasLimit: BigInt(gasLimit),
        gasPrice: BigInt(GAS_PRICE),
        chainID: network.chainId,
        nonce: BigInt(account.nonce),
        sender: Address.newFromBech32(account.address),
        version: 1
      });

      const provider = getAccountProvider();
      const signedTransactions = await provider.signTransactions([transaction]);

      const txManager = TransactionManager.getInstance();
      const sentTransactions = await txManager.send(signedTransactions);
      
      const sessionId = await txManager.track(sentTransactions, {
        transactionsDisplayInfo: {
          processingMessage: 'Calling smart contract...',
          errorMessage: 'Smart contract call failed',
          successMessage: 'Smart contract call completed!'
        }
      });

      console.log('Smart contract call session ID:', sessionId);
      
    } catch (error: any) {
      setError(error.message || 'Smart contract call failed');
      console.error('Smart contract call error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        Smart Contract Call
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contract Address
          </label>
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="erd1qqqqqqqqqqqqqpgq..."
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Function Name
          </label>
          <input
            type="text"
            value={functionName}
            onChange={(e) => setFunctionName(e.target.value)}
            placeholder="myFunction"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Arguments
          </label>
          {args.map((arg, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={arg}
                onChange={(e) => updateArgument(index, e.target.value)}
                placeholder={`Argument ${index + 1}`}
                className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeArgument(index)}
                className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addArgument}
            className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Add Argument
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gas Limit
          </label>
          <input
            type="number"
            value={gasLimit}
            onChange={(e) => setGasLimit(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Calling Contract...' : 'Call Contract'}
        </button>
      </form>
    </div>
  );
};
```

## Transaction Monitoring

### Transaction Status Component

```typescript
// components/TransactionStatus.tsx
import React from 'react';
import { useGetTransactionSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetTransactionSessions';
import { useGetPendingTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetPendingTransactions';
import { useGetSuccessfulTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetSuccessfulTransactions';
import { useGetFailedTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetFailedTransactions';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { formatAmount } from '@multiversx/sdk-dapp/out/utils/operations/formatAmount';
import { shortenAddress } from '@multiversx/sdk-dapp/out/utils/operations/shortenAddress';

export const TransactionStatus = () => {
  const sessions = useGetTransactionSessions();
  const pendingTxs = useGetPendingTransactions();
  const successfulTxs = useGetSuccessfulTransactions();
  const failedTxs = useGetFailedTransactions();
  const { network } = useGetNetworkConfig();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const allTransactions = [
    ...pendingTxs.map(tx => ({ ...tx, category: 'pending' })),
    ...successfulTxs.map(tx => ({ ...tx, category: 'successful' })),
    ...failedTxs.map(tx => ({ ...tx, category: 'failed' }))
  ].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Transaction Status
        </h3>
        <div className="mt-2 flex space-x-4 text-sm">
          <span className="text-yellow-600">
            Pending: {pendingTxs.length}
          </span>
          <span className="text-green-600">
            Successful: {successfulTxs.length}
          </span>
          <span className="text-red-600">
            Failed: {failedTxs.length}
          </span>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {allTransactions.length === 0 ? (
          <div className="px-6 py-4 text-center text-gray-500">
            No transactions found
          </div>
        ) : (
          allTransactions.slice(0, 10).map((tx, index) => (
            <div key={`${tx.hash}-${index}`} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>
                      {tx.status}
                    </span>
                    <span className="text-sm font-medium text-gray-900 font-mono">
                      {shortenAddress(tx.hash, 8)}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <span>
                      From: {shortenAddress(tx.sender)}
                    </span>
                    <span>
                      To: {shortenAddress(tx.receiver)}
                    </span>
                    <span>
                      {formatAmount({
                        input: tx.value,
                        decimals: network.decimals,
                        digits: 4
                      })} {network.egldLabel}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => window.open(`${network.explorerAddress}/transactions/${tx.hash}`, '_blank')}
                    className="text-blue-600 hover:text-blue-900 text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
```

## Custom Hooks Examples

### useAccountBalance Hook

```typescript
// hooks/useAccountBalance.ts
import { useMemo } from 'react';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { formatAmount } from '@multiversx/sdk-dapp/out/utils/operations/formatAmount';

export const useAccountBalance = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();

  const balanceData = useMemo(() => {
    const rawBalance = account.balance;
    const formattedBalance = formatAmount({
      input: rawBalance,
      decimals: network.decimals,
      digits: 4
    });

    const balanceInEgld = parseFloat(rawBalance) / Math.pow(10, network.decimals);

    return {
      raw: rawBalance,
      formatted: formattedBalance,
      egld: balanceInEgld,
      symbol: network.egldLabel,
      hasBalance: balanceInEgld > 0
    };
  }, [account.balance, network.decimals, network.egldLabel]);

  return balanceData;
};
```

### useTransactionTracker Hook

```typescript
// hooks/useTransactionTracker.ts
import { useState, useEffect } from 'react';
import { useGetTransactionSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetTransactionSessions';

export const useTransactionTracker = (sessionId?: string) => {
  const sessions = useGetTransactionSessions();
  const [isTracking, setIsTracking] = useState(false);

  const session = sessionId ? sessions[sessionId] : null;

  useEffect(() => {
    if (session) {
      const isPending = session.status === 'pending' || session.status === 'sent';
      setIsTracking(isPending);
    }
  }, [session]);

  const trackingData = {
    session,
    isTracking,
    isCompleted: session && ['success', 'failed', 'invalid'].includes(session.status),
    isSuccessful: session?.status === 'success',
    isFailed: session && ['failed', 'invalid'].includes(session.status),
    transactions: session?.transactions || [],
    errorMessage: session?.errorMessage
  };

  return trackingData;
};
```

## Error Handling Examples

### Global Error Boundary

```typescript
// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              {this.state.error?.message || 'An unexpected error occurred'}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Testing Examples

### Component Testing with Jest

```typescript
// __tests__/Dashboard.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';

// Mock the SDK hooks
jest.mock('@multiversx/sdk-dapp/out/react/account/useGetAccount', () => ({
  useGetAccount: () => ({
    address: 'erd1test123...',
    balance: '1000000000000000000',
    nonce: 42,
    shard: 1
  })
}));

jest.mock('@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig', () => ({
  useGetNetworkConfig: () => ({
    network: {
      name: 'Devnet',
      chainId: 'D',
      egldLabel: 'xEGLD',
      decimals: 18,
      explorerAddress: 'https://devnet-explorer.multiversx.com'
    }
  })
}));

jest.mock('@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn', () => ({
  useGetIsLoggedIn: () => true
}));

jest.mock('@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo', () => ({
  useGetLoginInfo: () => ({
    loginMethod: 'extension'
  })
}));

const renderDashboard = () => {
  return render(
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  );
};

describe('DashboardPage', () => {
  test('renders account information', async () => {
    renderDashboard();
    
    expect(screen.getByText('Account Information')).toBeInTheDocument();
    expect(screen.getByText('1.0000 xEGLD')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  test('renders network information', async () => {
    renderDashboard();
    
    expect(screen.getByText('Network Information')).toBeInTheDocument();
    expect(screen.getByText('Devnet')).toBeInTheDocument();
    expect(screen.getByText('extension')).toBeInTheDocument();
  });

  test('renders quick actions', async () => {
    renderDashboard();
    
    expect(screen.getByText('Send Transaction')).toBeInTheDocument();
    expect(screen.getByText('View on Explorer')).toBeInTheDocument();
    expect(screen.getByText('Copy Address')).toBeInTheDocument();
  });
});
```

This comprehensive examples documentation provides real-world, production-ready code that developers can use as a starting point for their own MultiversX dApps. Each example includes proper error handling, loading states, and follows React best practices.