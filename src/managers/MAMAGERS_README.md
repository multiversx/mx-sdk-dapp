# Managers Overview

This document provides a high-level overview of the main managers available in the MultiversX dApp SDK. Managers are singleton classes that encapsulate complex logic and UI flows, making it easy to integrate advanced features into your dApp with minimal setup. Each manager is responsible for a specific area of functionality, such as login panels, notifications, session/logout handling, or transaction management.

Below you will find a summary of each key manager, their primary use cases, and links to their detailed documentation.

---

## UnlockPanelManager

**Purpose:**
- Manages the login side panel UI, presenting all supported wallet providers and handling login flows.
- Allows custom logic for login and panel close events.
- Can be used in any JavaScript/TypeScript framework.

**Typical Usage:**
- Initialize with custom handlers for login and panel close.
- Open the unlock panel when login is required.

[Read the full UnlockPanelManager documentation →](./UnlockPanelManager/UNLOCK_PANEL_MANAGER_README.md)

---

## NotificationsFeedManager

**Purpose:**
- Manages the Notifications Feed UI, displaying pending and historical transaction notifications in a side panel.
- Synchronizes with the store and coordinates with the ToastManager to ensure a seamless notification experience.

**Typical Usage:**
- Access the singleton instance and open the notifications feed programmatically.
- Integrate with UI components (e.g., notification bell button).

[Read the full NotificationsFeedManager documentation →](./NotificationsFeedManager/NOTIFICATIONS_FEED_MANAGER_README.md)

---

## LogoutManager

**Purpose:**
- Handles automatic logout and session expiration warnings for users authenticated with native auth tokens.
- Ensures secure logout on token expiry and provides customizable warning toasts.

**Typical Usage:**
- Automatically initialized via `initApp` if native auth is enabled.
- Can be manually stopped or initialized for custom session management.

[Read the full LogoutManager documentation →](./LogoutManager/LOGOUT_MANAGER_README.md)

---

## TransactionManager

**Purpose:**
- Responsible for sending, tracking, and managing the lifecycle of transactions.
- Provides a high-level API for handling single and batch transactions, tracking their status, and integrating with UI feedback (toasts, notifications).

**Typical Usage:**
- Use helper functions to send and track transactions in one step.
- Register global or per-session callbacks for transaction success/failure.
- Inspect transaction status via the store.

[Read the full TransactionManager documentation →](./TransactionManager/TRANSACTIONS_MANAGER_README.md)

---

## See Also
- [ProviderFactory](../providers/ProviderFactory.ts): For programmatic login and provider management.
- [ToastManager](./internal/ToastManager/): For toast notification management.
- [Store actions and selectors](../store/): For advanced state management and inspection.
