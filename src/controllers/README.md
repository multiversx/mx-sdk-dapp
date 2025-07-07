# Controllers Documentation

## Overview
This folder contains controllers for the @multiversx/sdk-dapp-ui package. Controllers provide business logic for UI elements that are not bound to the store, handling data processing and formatting for display components.

## Structure
The controllers are organized into logical modules:
- **FormatAmountController**: Handles amount formatting and validation for display
- **TransactionsTableController**: Processes transaction data for table display
- **TransactionsHistoryController**: Manages historical transaction data retrieval

## FormatAmountController

### `controllers/FormatAmountController/FormatAmountController.ts`
**Purpose**: Provides data formatting and validation for amount display components.

**Main Functions**:
- `getData`: Processes input data and returns formatted amount information

**Parameters**:
- `input`: The amount string to format
- `decimals`: Number of decimal places (default: 18)
- `digits`: Number of digits to display (default: 2)
- `egldLabel`: Label for EGLD token (e.g., "EGLD")
- `token`: Custom token label

**Returns**: `FormatedAmountType` object containing:
- `isValid`: Boolean indicating if the input is valid
- `label`: Formatted token label
- `valueInteger`: Integer part of the amount
- `valueDecimal`: Decimal part of the amount with proper formatting

**Usage Example**:
```tsx
import { MvxFormatAmount } from '@multiversx/sdk-dapp-ui/react';
import { MvxFormatAmountPropsType } from '@multiversx/sdk-dapp-ui/types';
export { DECIMALS, DIGITS } from '@multiversx/sdk-dapp-utils/out/constants';
import { FormatAmountController } from '@multiversx/sdk-dapp/out/controllers/FormatAmountController';
export { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';


interface IFormatAmountProps
  extends Partial<MvxFormatAmountPropsType> {
  value: string;
  className?: string;
}

export const FormatAmount = (props: IFormatAmountProps) => {
  const {
    network: { egldLabel }
  } = useGetNetworkConfig();

  const { isValid, valueDecimal, valueInteger, label } =
    FormatAmountController.getData({
      digits: DIGITS,
      decimals: DECIMALS,
      egldLabel,
      ...props,
      input: props.value
    });

  return (
    <MvxFormatAmount
      class={props.className}
      dataTestId={props['data-testid']}
      isValid={isValid}
      label={label}
      showLabel={props.showLabel}
      valueDecimal={valueDecimal}
      valueInteger={valueInteger}
    />
  );
};
```

**Dependencies**: 
- Uses `stringIsInteger`, `stringIsFloat`, `formatAmount` from `lib/sdkDappUtils`
- Handles edge cases for invalid or empty input
- Automatically pads decimal parts to match the specified digits

**Note**: This controller is exported from the main controllers index.ts.

### `controllers/FormatAmountController/types.ts`
**Purpose**: Defines TypeScript interfaces for the FormatAmountController.

**Main Types**:
- `FormatAmountControllerPropsType`: Extends `FormatAmountPropsType` with optional `egldLabel` and `token` properties
- `FormatedAmountType`: Defines the structure of formatted amount data


## TransactionsTableController

### `controllers/TransactionsTableController/TransactionsTableController.ts`
**Purpose**: Processes raw transaction data into a format suitable for table display components.

**Main Functions**:
- `processTransactions`: Transforms server transaction data into table-ready format

**Parameters**:
- `address`: The user's address for determining transaction direction
- `egldLabel`: Label for EGLD token (e.g., "EGLD")
- `explorerAddress`: Base URL for the blockchain explorer
- `transactions`: Array of `ServerTransactionType` objects to process

**Returns**: Promise resolving to an array of `TransactionsRowType` objects

**Usage Example**:
```typescript
import { TransactionsTableController } from 'controllers/TransactionsTableController/TransactionsTableController';
import { useEffect, useState } from 'react';
import type { MvxTransactionsTable as MvxTransactionsTablePropsType } from '@multiversx/sdk-dapp-ui/web-components/mvx-transactions-table';
import type { ServerTransactionType } from '@multiversx/sdk-dapp/out/types/serverTransactions.types';
import {
  MvxTransactionsTable,
} from '@multiversx/sdk-dapp-ui/react';
import type { TransactionsRowType } from '@multiversx/sdk-dapp/out/controllers/TransactionsTableController/transactionsTableController.types';
import { TransactionsTableController } from '@multiversx/sdk-dapp/out/controllers/TransactionsTableController';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';

interface TransactionsTablePropsType {
  transactions?: ServerTransactionType[];
}

export const TransactionsTable = ({
  transactions = []
}: TransactionsTablePropsType) => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [processedTransaction, setProcessedTransactions] = useState<
    TransactionsRowType[]
  >([]);

  useEffect(() => {
    processTransactions();
  }, []);

  const processTransactions = async () => {
    const transactionsData =
      await TransactionsTableController.processTransactions({
        address,
        egldLabel: network.egldLabel,
        explorerAddress: network.explorerAddress,
        transactions
      });

    setProcessedTransactions(transactionsData);
  };

  return <MvxTransactionsTable transactions={processedTransaction} />;
};
```

**Key Features**:
- **Transaction Interpretation**: Uses `getInterpretedTransaction` to process raw transaction data
- **Account Information**: Extracts and formats sender/receiver information including names, addresses, and contract status
- **Value Formatting**: Processes transaction values using `FormatAmountController` for consistent display
- **Shard Information**: Includes shard details for cross-shard transactions
- **Locked Account Detection**: Identifies and marks locked accounts
- **Token/NFT Support**: Handles various token types including MetaESDT tokens
- **Link Generation**: Creates explorer links for transactions, accounts, and tokens

**Dependencies**: 
- Uses `getInterpretedTransaction` from `utils/transactions/getInterpretedTransaction`
- Uses `getTransactionValue` for value processing
- Uses `getLockedAccountName` for locked account detection
- Uses `FormatAmountController` for amount formatting
- Uses `isContract` for contract address validation
- Uses `getShardText` for shard information formatting

**Note**: This controller is NOT exported from the main controllers index.ts.

### `TransactionsTableController/transactionsTableController.types.ts`
**Purpose**: Defines TypeScript interfaces for the TransactionsTableController.

**Main Types**:
- `TransactionsRowType`: Complete transaction row data structure
- `TransactionAccountType`: Sender/receiver account information
- `TransactionValueType`: Transaction value and token information
