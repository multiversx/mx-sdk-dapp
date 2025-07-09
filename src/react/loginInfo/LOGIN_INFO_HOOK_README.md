# useGetLoginInfo Hook

**File:** `src/react/loginInfo/useGetLoginInfo.ts`

### Description

`useGetLoginInfo` is a React hook that retrieves the current login information from the global store and provides reactive updates when the login state changes. It returns an object containing details about the user's login session, such as the provider type, login token, and whether the user is currently logged in.

This hook automatically re-renders the component when the login state changes, making it ideal for React applications that need to respond to authentication state changes. For non-React environments, a corresponding method (`getLoginInfo`) is available.

### Example Usage

#### Basic usage in a React component
```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const MyComponent = () => {
  const { isLoggedIn, providerType, loginToken } = useGetLoginInfo();

  if (!isLoggedIn) {
    return <div>Please log in to continue</div>;
  }

  return (
    <div>
      <p>Logged in with: {providerType}</p>
      <p>Token: {loginToken}</p>
    </div>
  );
};
```

#### Conditional rendering based on login state
```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const Dashboard = () => {
  const { isLoggedIn, providerType } = useGetLoginInfo();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome to your dashboard</h1>
          <p>Connected via: {providerType}</p>
          {/* Dashboard content */}
        </div>
      ) : (
        <div>
          <h1>Please connect your wallet</h1>
          {/* Login buttons */}
        </div>
      )}
    </div>
  );
};
```

## Summary

- `useGetLoginInfo` provides reactive access to the current login state and related information
- Use it in React components that need to respond to authentication state changes
