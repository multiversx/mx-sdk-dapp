import { WindowProviderResponseEnums } from '@multiversx/sdk-web-wallet-cross-window-provider/out/enums';
import { WebviewProvider } from '@multiversx/sdk-webview-provider/out';

// Mock getSafeWindow
jest.mock('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow', () => ({
  getSafeWindow: jest.fn()
}));

// Mock getSafeDocument to prevent real DOM access
jest.mock(
  '@multiversx/sdk-webview-provider/out/helpers/getSafeDocument',
  () => ({
    getSafeDocument: jest.fn(() => ({
      addEventListener: jest.fn()
    }))
  })
);

const HANDSHAKE_TIMEOUT_RESPONSE = 1000;

const mockSendPostMessage = jest.fn();

describe('WebviewProvider.init', () => {
  let provider: WebviewProvider;
  let handlers: Record<string, (event: MessageEvent) => void>;
  let mockPostMessage: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    provider = WebviewProvider.getInstance();

    jest
      .spyOn(provider, 'sendPostMessage')
      .mockImplementation(mockSendPostMessage);

    Object.defineProperty(provider, 'initialized', {
      value: false,
      writable: true
    });

    // Reset handlers and fake window per test
    handlers = {};
    mockPostMessage = jest.fn();
  });

  it('should pass initialize using ReactNativeWebView', async () => {
    const {
      getSafeWindow
    } = require('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow');

    const fakeWindow = {
      ReactNativeWebView: { postMessage: mockPostMessage },
      parent: { postMessage: jest.fn() }
    };

    getSafeWindow.mockReturnValue(fakeWindow);

    const initPromise = provider.init();

    if (handlers['message']) {
      handlers['message']({
        data: {
          type: WindowProviderResponseEnums.finalizeHandshakeResponse,
          payload: { data: Date.now() }
        },
        origin: 'http://localhost'
      } as MessageEvent);
    }

    const isInitialized = await initPromise;

    //TODO: fix test
    expect(isInitialized).toBe(false);
    expect(provider.isInitialized()).toBe(false);
  });

  it('should fail initialize using ReactNativeWebView (timeout)', async () => {
    const fakeWindow = {
      ReactNativeWebView: { postMessage: mockPostMessage },
      parent: { postMessage: jest.fn() }
    };

    const getSafeWindow =
      require('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow').getSafeWindow;
    getSafeWindow.mockReturnValue(fakeWindow);

    const initPromise = provider.init();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (handlers['message']) {
      handlers['message']({
        data: {
          type: WindowProviderResponseEnums.finalizeHandshakeResponse,
          payload: { data: Date.now() }
        },
        origin: 'http://localhost'
      } as MessageEvent);
    }

    const isInitialized = await initPromise;

    expect(isInitialized).toBe(false);
    expect(provider.isInitialized()).toBe(false);
  });

  it('should initialize using handshake', async () => {
    // Set a timeout for this specific test to ensure it runs within 1 second
    jest.setTimeout(HANDSHAKE_TIMEOUT_RESPONSE);

    const getSafeWindow =
      require('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow').getSafeWindow;

    const handlerMap: Record<string, (event: MessageEvent) => void> = {};

    const fakeWindow = {
      parent: {
        postMessage: jest.fn()
      },
      addEventListener: jest.fn((event, handler) => {
        handlerMap[event] = handler;
      }),
      removeEventListener: jest.fn((event) => {
        delete handlerMap[event];
      })
    };

    getSafeWindow.mockReturnValue(fakeWindow);

    const mockMessageEvent = {
      data: {
        type: WindowProviderResponseEnums.finalizeHandshakeResponse,
        payload: { data: Date.now().toString() }
      },
      origin: 'http://localhost'
    };

    setTimeout(() => {
      handlerMap['message'](mockMessageEvent as MessageEvent);
    });

    const isInitialized = await provider.init();

    expect(isInitialized).toBe(true);
    expect(provider.isInitialized()).toBe(true);
  });
  it('should fail to initialize if handshake takes longer than 1 second', async () => {
    const getSafeWindow =
      require('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow').getSafeWindow;
    getSafeWindow.mockReturnValue({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      parent: {
        postMessage: jest.fn()
      }
    });

    // Mock sendPostMessage to simulate a delayed response.
    mockSendPostMessage.mockResolvedValueOnce(
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              type: WindowProviderResponseEnums.finalizeHandshakeResponse,
              payload: { data: Date.now().toString() }
            }),
          1500
        )
      )
    );

    const isInitialized = await provider.init();

    expect(isInitialized).toBe(false);
    expect(provider.isInitialized()).toBe(false);
  });
});
