import {
  WindowProviderRequestEnums,
  WindowProviderResponseEnums
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/enums';
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

    expect(isInitialized).toBe(true);
    expect(provider.isInitialized()).toBe(true);
  });

  it('should initialize using handshake', async () => {
    // Set a timeout for this specific test to ensure it runs within 1 second
    jest.setTimeout(HANDSHAKE_TIMEOUT_RESPONSE);

    const getSafeWindow =
      require('@multiversx/sdk-webview-provider/out/helpers/getSafeWindow').getSafeWindow;

    getSafeWindow.mockReturnValue({
      parent: {
        postMessage: jest.fn()
      }
    });

    // Simulate a handshake response that resolves in less than 1 second
    mockSendPostMessage.mockResolvedValueOnce({
      type: WindowProviderResponseEnums.finalizeHandshakeResponse,
      payload: { data: Date.now().toString() }
    });

    // Start time measurement to ensure the process completes under 1 second
    const startTime = Date.now();

    const isInitialized = await provider.init();

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(HANDSHAKE_TIMEOUT_RESPONSE);

    // Ensure that postMessage was called with the correct data
    expect(mockSendPostMessage).toHaveBeenCalledWith({
      type: WindowProviderRequestEnums.finalizeHandshakeRequest,
      payload: undefined
    });

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
