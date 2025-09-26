# NotificationsFeedManager

## Overview

`NotificationsFeedManager` is a singleton class responsible for managing the Notifications Feed UI in the MultiversX dApp SDK. It provides a side panel that displays both pending and historical transaction notifications for the user. The manager synchronizes with the store, updates the UI in real-time, and coordinates with the `ToastManager` to ensure only one notification system (toasts or feed) is visible at a time.

The Notifications Feed is typically initialized automatically via `initApp`, but can be accessed and controlled programmatically.

## API

### Import
```typescript
import { NotificationsFeedManager } from '@multiversx/sdk-dapp/out/managers/NotificationsFeedManager/NotificationsFeedManager';
```

### Singleton Access
```typescript
const notificationsFeedManager = NotificationsFeedManager.getInstance();
```

### Methods
- `openNotificationsFeed(): Promise<void>`
  - Opens the notifications feed side panel, hides toasts, and subscribes to store updates.
- `isNotificationsFeedOpen(): boolean`
  - Returns whether the notifications feed is currently open.

## Example Usage

A typical use case is to provide a button that opens the notifications feed:

```typescript
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationsFeedManager } from '@multiversx/sdk-dapp/out/managers/NotificationsFeedManager/NotificationsFeedManager';
import { Button } from 'components';

export const NotificationsButton = () => {
  const handleOpenNotificationsFeed = async () => {
    await NotificationsFeedManager.getInstance().openNotificationsFeed();
  };

  return (
    <Button
      onClick={handleOpenNotificationsFeed}
      className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 text-gray-600 hover:bg-slate-100 mx-0'
    >
      <FontAwesomeIcon icon={faBell} />
    </Button>
  );
};
```

## Events

The manager uses an event bus to communicate with the UI component. Key events include:
- `OPEN_NOTIFICATIONS_FEED` – Open the feed
- `CLOSE_NOTIFICATIONS_FEED` – Close the feed
- `CLEAR_NOTIFICATIONS_FEED_HISTORY` – Clear transaction history
- `PENDING_TRANSACTIONS_UPDATE` – Update pending transactions list
- `TRANSACTIONS_HISTORY_UPDATE` – Update historical transactions list

See `NotificationsFeedEventsEnum` for all event names.

## Data Model

The feed manages two main data arrays:
- `pendingTransactions`: List of currently pending transactions (toasts)
- `historicTransactions`: List of completed (historical) transactions

These are updated in real-time as the store changes.

## Integration Notes

- The Notifications Feed and Toast notifications are mutually exclusive: opening the feed hides toasts, and closing the feed restores them.
- The feed is implemented as a side panel web component (`MvxNotificationsFeed`).
- The manager is automatically initialized by `initApp`, but can be controlled directly if needed.
- All transaction data is sourced from the global store and kept in sync via subscriptions.
- To clear the transaction history, trigger the `CLEAR_NOTIFICATIONS_FEED_HISTORY` event or use the UI's clear button if available.

## Related
- [ToastManager](../ToastManager): Manages toast notifications and coordinates with the feed.
- [TransactionsHistoryController](../../controllers/TransactionsHistoryController/TransactionsHistoryController.ts): Used to fetch historical transaction data.
- [MvxNotificationsFeed](https://github.com/multiversx/mx-sdk-dapp-ui): The UI component rendered by the manager.
