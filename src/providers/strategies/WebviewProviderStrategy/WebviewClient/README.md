#### Iframe-to-Iframe Authentication via WebviewClient

The `WebviewClient` enables seamless authentication and message signing across **nested iframes** in a dApp architecture.

This is especially useful in scenarios where:

- Your main dApp (the **parent iframe**) is already authenticated.
- You embed other dApp modules or micro-frontends via **child iframes**.
- The child iframes need **authenticated access** or **message signing**, but shouldn't re-trigger login flows.

---

### 🧠 How It Works

1. The **parent dApp** logs in with the MultiversX Web Wallet using Native Auth.
2. The **child iframe** is embedded into the parent dApp.
3. When the child iframe needs to authenticate a request:
   - It sends a `LOGIN_REQUEST` using `postMessage` in which it generates a nativeAuth and sends it to be signed
   - If sign is success then login is finished
   - If sign is cancelled it will perform onLoginCancelled

```ts
### Usage example
import { WebviewClient } from '@multiversx/sdk-dapp/out/providers/strategies/WebviewProviderStrategy/WebviewClient';

const webviewClient = new WebviewClient({
  // Perform action when login is cancelled
  onLoginCancelled: async () => {
    setApp(null)
  }
});

webviewClient.startListening();

// Optional: Register a custom event handler
webviewClient.registerEvent('dAppcustomEvent', (event) => {
  console.log('Received data:', event.data.payload);
});

<iframe
  title="dApp"
  id="dAppFrame"
  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
  src={"https://devnet.template-dapp.multiversx.com/"}
/>
```
