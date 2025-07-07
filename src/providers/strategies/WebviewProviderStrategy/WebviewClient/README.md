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

### 🧠 Usecases

- User logs into Hub dApp using a wallet provider (e.g extension)
- User selects a Template dApp from a list displayed in the Hub dApp UI
- Hub dApp constructs the URL for the selected Template dApp and embeds it in an iframe
- Template dApp is mounted in the iframe within the Hub dApp.
- Inside the iframe, the Template dApp's sdk-dapp detects the iframe context and attempts to log in via the Webview Provider
- The sdk-dapp in the Template dApp:
  - Builds a Native Auth loginToken.
  - Sends a LOGIN_REQUEST via the Webview Provider to the parent (Hub dApp).
- In the Hub dApp:
  - the WebviewClient (within sdk-dapp) receives the LOGIN_REQUEST.
  - it initiates a sign message request using the original provider (e.g extension) with the loginToken.
  - once signed, it responds with a LOGIN_RESPONSE, including the user's address and signature.
- The Template dApp receives the LOGIN_RESPONSE from the parent and completes the login process.
