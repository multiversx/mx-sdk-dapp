# UnlockPanelManager

The `UnlockPanelManager` is a singleton class that manages the login side panel UI for MultiversX dApps. It provides a simple way to present all supported wallet providers to the user and handle login flows, including custom providers.

---

## Key Features

- Presents a side panel UI with all (or a filtered set of) supported login providers.
- Handles login and post-login navigation or actions.
- Allows custom logic for login and panel close events.
- Can be used in any JavaScript/TypeScript framework.

---

## API

### Initialization

```typescript
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';

const unlockPanelManager = UnlockPanelManager.init({
  loginHandler: () => {
    // Called after login is performed
    navigate('/dashboard');
  },
  onClose: () => {
    // Called when the panel is closed without login
    navigate('/');
  },
  // allowedProviders: [ProviderTypeEnum.walletConnect, 'myCustomProvider'] // Optional: restrict or reorder providers
});
```

- **loginHandler**: Required. Either a callback (called after login) or a function that handles the login process (see advanced usage below).
- **onClose**: Optional. Called when the user closes the panel without logging in.
- **allowedProviders**: Optional. Array of provider types to show (default: all).

### Opening the Panel

```typescript
unlockPanelManager.openUnlockPanel();
```

---

## React Example

```typescript
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnlockPanelManager, useGetLoginInfo } from 'lib';
import { RouteNamesEnum } from 'localConstants';

export const Unlock = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useGetLoginInfo();

  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: () => {
      navigate(RouteNamesEnum.dashboard);
    },
    onClose: () => {
      navigate(RouteNamesEnum.home);
    }
  });

  const handleOpenUnlockPanel = () => {
    unlockPanelManager.openUnlockPanel();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(RouteNamesEnum.dashboard);
      return;
    }
    handleOpenUnlockPanel();
  }, [isLoggedIn]);

  return null;
};
```

---

## Advanced Usage

If you want to perform custom logic during login (e.g., using the provider instance), provide an async handler:

```typescript
const unlockPanelManager = UnlockPanelManager.init({
  loginHandler: async ({ type, anchor }) => {
    const provider = await ProviderFactory.create({ type, anchor });
    const { address } = await provider.login();
    navigate(`/dashboard?address=${address}`);
  }
});
```

---

## TypeScript Types

```typescript
type UnlockPanelManagerInitParamsType = {
  loginHandler: (() => void) | (({ type, anchor }: IProviderFactory) => Promise<void>);
  allowedProviders?: ProviderType[];
  onClose?: () => void;
};
```

---

## Notes

- The panel is a singleton; calling `init` multiple times will update the handlers.
- If you use `nativeAuth`, the SDK can auto-logout on token expiry and show a warning toast (see main README for details).
- You can filter or reorder providers with `allowedProviders`.
- The UI is controlled via the `@multiversx/sdk-dapp-ui` package.

---

## See Also

- [ProviderFactory](../providers/ProviderFactory.ts) for programmatic login.
- [LogoutManager](../LogoutManager/LogoutManager.ts) for handling logout and native auth expiry.
- [README.md](../../README.md) for more usage patterns and configuration.
