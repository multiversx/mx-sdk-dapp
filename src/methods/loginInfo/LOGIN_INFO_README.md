# loginInfo Methods

## Overview

The `loginInfo` methods provide access to the current login state and related information for the user in a dApp built with the MultiversX SDK. These methods are essential for determining the user's authentication status, the provider used for login, and other session-related details.

The primary method in this module is `getLoginInfo`.

---

## `getLoginInfo`

**File:** `src/methods/loginInfo/getLoginInfo.ts`

### Description

`getLoginInfo` is a utility function that retrieves the current login information from the global store. It returns an object containing details about the user's login session, such as the provider type, login token, and whether the user is currently logged in.

This function is useful for non-React environments or when you need to access login information outside of React components. For React applications, a corresponding hook (`useGetLoginInfo`) is available.

### Signature

```typescript
export const getLoginInfo = (state = getState()) => {
  return {
    ...loginInfoSelector(state),
    isLoggedIn: isLoggedInSelector(state)
  };
};
```

#### Parameters
- `state` (optional): The current application state. If not provided, it defaults to the latest state from the store.

#### Returns
An object with the following properties:
- All properties returned by `loginInfoSelector` (e.g., `loginToken`, `providerType`, etc.)
- `isLoggedIn`: A boolean indicating if the user is currently logged in.

### Example Usage

#### Direct usage in a non-React context
```typescript
import { getLoginInfo } from '@multiversx/sdk-dapp/out/methods/loginInfo/getLoginInfo';

const loginInfo = getLoginInfo();
console.log(loginInfo.isLoggedIn); // true or false
console.log(loginInfo.providerType); // e.g., 'extension', 'walletconnect', etc.
```

#### In a React context (see also `/react/loginInfo/useGetLoginInfo`)
```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const { isLoggedIn, providerType } = useGetLoginInfo();
```

### When to Use
- To check if a user is logged in before performing actions that require authentication.
- To access the current login provider or token for custom logic.
- In frameworks or environments where React hooks are not available.

### Related
- [useGetLoginInfo (React hook)](../../react/loginInfo/useGetLoginInfo.ts)
- [loginInfoSelector](../../store/selectors/loginInfoSelectors.ts)
- [isLoggedInSelector](../../store/selectors/accountSelectors.ts)

---

## Integration in dApp Workflow

`getLoginInfo` is typically used after initializing the dApp with `initApp`. It allows you to:
- Display user-specific UI based on login state
- Handle login/logout flows
- Access provider-specific session data

For more details on authentication and provider interaction, see the [main README.md](../../../README.md#2-provider-interaction).

---

## Summary
- `getLoginInfo` provides a simple way to access the current login state and related information from the store.
- Use it in non-React environments or where direct access to the store is needed.
- For React, prefer the `useGetLoginInfo` hook for reactive updates.
