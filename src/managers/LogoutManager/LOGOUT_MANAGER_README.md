# LogoutManager

The `LogoutManager` is a singleton class in the MultiversX Front-End SDK that manages automatic logout and session expiration warnings for users authenticated with native auth tokens. It ensures users are securely logged out when their authentication token expires and provides customizable warning toasts before logout.

## Purpose

- **Automatic Logout:** Ensures users are logged out when their native auth token expires, maintaining security.
- **Session Expiration Warning:** Notifies users with a toast before their session expires, giving them time to take action.
- **Integration with Toasts:** Uses the SDK's `ToastManager` to display warning and logout notifications.
- **Customizable Behavior:** Developers can configure warning times and can programmatically stop the auto-logout logic if needed.

## How It Works

- When a user logs in with native auth, the `LogoutManager` is initialized (typically via `initApp` or after login).
- It checks the native auth token's expiration and schedules:
  - A warning toast before expiration (configurable).
  - The actual logout when the token expires.
- If the token is already expired, it logs the user out immediately.
- If the user logs in again, you can stop the auto-logout logic (e.g., if you want to handle session management yourself).

## API

### `LogoutManager.getInstance()`

Returns the singleton instance of the `LogoutManager`.

### `init()`

Initializes the manager. Schedules warning and logout if the user is logged in with a valid native auth token.

### `stop()`

Stops all scheduled warnings and logout actions. Use this if you want to disable the automatic logout logic (e.g., after a successful login or if you want to manage session expiration yourself).

## Configuration

You can configure the warning time before logout via the `nativeAuth` config in `initApp`:

```typescript
const config: InitAppType = {
  // ...
  nativeAuth: {
    expirySeconds: 30, // Token expires after 30 seconds
    tokenExpirationToastWarningSeconds: 10 // Show warning 10 seconds before logout
  }
}
```

## Example Usage

### Automatic Integration (Recommended)

When using `initApp`, the `LogoutManager` is automatically initialized if native auth is enabled and the user is logged in:

```typescript
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';

initApp(config).then(() => {
  // Your app logic
});
```

### Stopping Automatic Logout

If you want to stop the automatic logout (e.g., after a successful login), call:

```typescript
import { LogoutManager } from '@multiversx/sdk-dapp/out/managers/LogoutManager/LogoutManager';

loginHandler: () => {
  navigate('/dashboard');
  // Stop automatic logout upon native auth expiration
  LogoutManager.getInstance().stop();
},
```

### Manual Initialization

You can manually initialize the `LogoutManager` if needed:

```typescript
import { LogoutManager } from '@multiversx/sdk-dapp/out/managers/LogoutManager/LogoutManager';

LogoutManager.getInstance().init();
```

## Toast Notifications

- **Session Expiration Warning:**  
  A toast with a warning icon and message like "Your session will expire in X minutes!" is shown before logout (timing is configurable).
- **Session Expired:**  
  A toast with a warning icon and message "Your session has expired!" is shown when the token expires and logout occurs.

## Integration Points

- **`initApp`:**  
  The SDK automatically calls `LogoutManager.getInstance().init()` after login if native auth is enabled.
- **`DappProvider`:**  
  The SDK calls `LogoutManager.getInstance().init()` after a successful login.
- **Toasts:**  
  Uses `ToastManager` to display session expiration and logout notifications.

## Internal Logic

- Uses the store to check login and token state.
- Schedules timeouts for warning and logout based on token expiration.
- Prevents auto-logout for webview logins.
- Cleans up all timeouts on `stop()`.

## Best Practices

- Use the automatic integration unless you have a specific need to manage session expiration yourself.
- Always call `stop()` if you want to prevent the SDK from logging out the user automatically after login.

---