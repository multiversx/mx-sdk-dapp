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
  });

  it('should initialize using ReactNativeWebView', async () => {
    // Mock the window object to simulate ReactNativeWebView
    const mockPostMessage = jest.fn();
    const getSafeWindow =
      require('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow').getSafeWindow;

    // Mocking `ReactNativeWebView`
    getSafeWindow.mockReturnValue({
      ReactNativeWebView: {
        postMessage: mockPostMessage
      }
    });

    // Call init method which should use ReactNativeWebView for initialization
    const isInitialized = await provider.init();

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
