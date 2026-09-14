import { testAddress, testReceiver } from '__mocks__/accountConfig';
import { Address, Message, Transaction } from 'lib/sdkCore';
import {
  WindowProviderRequestEnums,
  WindowProviderResponseEnums
} from 'lib/sdkWebWalletCrossWindowProvider';
import { WebviewClient } from '../WebviewClient';

const mockSignMessage = jest.fn();
const mockSignTransactions = jest.fn();

jest.mock('providers/helpers/accountProvider', () => ({
  getAccountProvider: () => ({
    signMessage: mockSignMessage,
    signTransactions: mockSignTransactions
  })
}));

jest.mock('store/selectors/accountSelectors', () => ({
  accountSelector: () => ({
    address: jest.requireActual('__mocks__/accountConfig').testAddress
  })
}));

const CHILD_ORIGIN = 'https://child.example.com';
const OTHER_ORIGIN = 'https://other.example.com';
const BLOCK_HASH =
  'f2d0897d0ca185a884349b10842a9fe4c749472d75cee30e311a82de29acd52b';

const encodeBase64Url = (value: string) =>
  Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const createLoginToken = (origin: string) =>
  `${encodeBase64Url(origin)}.${BLOCK_HASH}.86400.${encodeBase64Url(
    JSON.stringify({ timestamp: 1677588786 })
  )}`;

type SourceType = { parent?: unknown; postMessage: jest.Mock } | null;

const createChildSource = (): SourceType => ({
  parent: window,
  postMessage: jest.fn()
});

const createEvent = ({
  type,
  payload,
  origin = CHILD_ORIGIN,
  source = createChildSource()
}: {
  type: string;
  payload?: unknown;
  origin?: string;
  source?: SourceType;
}) =>
  ({
    data: { type, payload },
    origin,
    source
  }) as unknown as MessageEvent;

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

const createPlainTransaction = () =>
  new Transaction({
    sender: Address.newFromBech32(testAddress),
    receiver: Address.newFromBech32(testReceiver),
    gasLimit: BigInt(50_000),
    chainID: 'D'
  }).toPlainObject();

const createClient = (allowedOrigins?: string[]) => {
  const onLoginCancelled = jest.fn().mockResolvedValue(undefined);
  const client = new WebviewClient({
    onLoginCancelled,
    allowedOrigins: allowedOrigins as string[]
  });

  const handleMessage = (messageEvent: MessageEvent) =>
    (
      client as unknown as {
        handleMessage: (event: MessageEvent) => Promise<void>;
      }
    ).handleMessage(messageEvent);

  return { client, onLoginCancelled, handleMessage };
};

const getRequests = () => [
  {
    type: WindowProviderRequestEnums.finalizeHandshakeRequest,
    payload: 'version'
  },
  {
    type: WindowProviderRequestEnums.loginRequest,
    payload: { token: createLoginToken(CHILD_ORIGIN) }
  },
  {
    type: WindowProviderRequestEnums.signMessageRequest,
    payload: { message: 'Hello world' }
  },
  {
    type: WindowProviderRequestEnums.signTransactionsRequest,
    payload: [createPlainTransaction()]
  }
];

describe('WebviewClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'warn').mockImplementation(() => null);
    jest.spyOn(console, 'error').mockImplementation(() => null);

    mockSignMessage.mockImplementation(
      async (message: Message) =>
        new Message({
          data: message.data,
          address: message.address,
          signature: new Uint8Array(Buffer.from('signature'))
        })
    );
    mockSignTransactions.mockImplementation(
      async (transactions: Transaction[]) => transactions
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('sender validation', () => {
    it.each([
      ['missing', undefined],
      ['empty', []],
      ['invalid', ['*']]
    ])(
      'ignores every request when allowedOrigins is %s',
      async (_, allowedOrigins) => {
        const { handleMessage } = createClient(allowedOrigins);

        for (const request of getRequests()) {
          const event = createEvent(request);
          await handleMessage(event);
          await flushPromises();

          expect(
            (event.source as unknown as { postMessage: jest.Mock }).postMessage
          ).not.toHaveBeenCalled();
        }

        expect(console.error).toHaveBeenCalled();
        expect(mockSignMessage).not.toHaveBeenCalled();
        expect(mockSignTransactions).not.toHaveBeenCalled();
      }
    );

    it('ignores requests from an origin that is not allowed', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);

      for (const request of getRequests()) {
        const event = createEvent({ ...request, origin: OTHER_ORIGIN });
        await handleMessage(event);
        await flushPromises();

        expect(
          (event.source as unknown as { postMessage: jest.Mock }).postMessage
        ).not.toHaveBeenCalled();
      }

      expect(mockSignMessage).not.toHaveBeenCalled();
      expect(mockSignTransactions).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledTimes(getRequests().length);
    });

    it('ignores custom events from an origin that is not allowed', async () => {
      const { client, handleMessage } = createClient([CHILD_ORIGIN]);
      const customHandler = jest.fn();
      client.registerEvent('dAppCustomEvent', customHandler);

      await handleMessage(
        createEvent({ type: 'dAppCustomEvent', origin: OTHER_ORIGIN })
      );
      expect(customHandler).not.toHaveBeenCalled();

      await handleMessage(createEvent({ type: 'dAppCustomEvent' }));
      expect(customHandler).toHaveBeenCalledTimes(1);
    });

    it.each([
      ['an opener or popup', { parent: {}, postMessage: jest.fn() }],
      ['the current window', window as unknown as SourceType],
      ['a missing source', null]
    ])('ignores allowed origin requests coming from %s', async (_, source) => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);

      await handleMessage(
        createEvent({
          type: WindowProviderRequestEnums.loginRequest,
          payload: { token: createLoginToken(CHILD_ORIGIN) },
          source
        })
      );
      await flushPromises();

      expect(mockSignMessage).not.toHaveBeenCalled();
    });

    it('does not warn for unrelated messages', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);

      await handleMessage(
        createEvent({ type: 'someExtensionMessage', origin: OTHER_ORIGIN })
      );

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('responds to the handshake of an allowed child frame', async () => {
      const { handleMessage } = createClient([`${CHILD_ORIGIN}/`]);
      const event = createEvent({
        type: WindowProviderRequestEnums.finalizeHandshakeRequest
      });

      await handleMessage(event);

      expect(
        (event.source as unknown as { postMessage: jest.Mock }).postMessage
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          type: WindowProviderResponseEnums.finalizeHandshakeResponse
        }),
        { targetOrigin: CHILD_ORIGIN }
      );
    });
  });

  describe('login', () => {
    it('signs a login token issued for the requesting origin', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);
      const token = createLoginToken(CHILD_ORIGIN);
      const event = createEvent({
        type: WindowProviderRequestEnums.loginRequest,
        payload: { token }
      });

      await handleMessage(event);
      await flushPromises();

      const [signedMessage] = mockSignMessage.mock.calls[0];
      expect(Buffer.from(signedMessage.data).toString()).toBe(
        `${testAddress}${token}`
      );
      expect(
        (event.source as unknown as { postMessage: jest.Mock }).postMessage
      ).toHaveBeenCalledWith(
        {
          type: WindowProviderResponseEnums.loginResponse,
          payload: {
            data: {
              address: testAddress,
              signature: Buffer.from('signature').toString('hex')
            }
          }
        },
        { targetOrigin: CHILD_ORIGIN }
      );
    });

    it('rejects a login token issued for another origin', async () => {
      const { handleMessage, onLoginCancelled } = createClient([CHILD_ORIGIN]);
      const event = createEvent({
        type: WindowProviderRequestEnums.loginRequest,
        payload: { token: createLoginToken(OTHER_ORIGIN) }
      });

      await handleMessage(event);
      await flushPromises();

      expect(mockSignMessage).not.toHaveBeenCalled();
      expect(
        (event.source as unknown as { postMessage: jest.Mock }).postMessage
      ).toHaveBeenCalledWith(
        {
          type: WindowProviderResponseEnums.loginResponse,
          payload: { error: expect.any(String) }
        },
        { targetOrigin: CHILD_ORIGIN }
      );

      // No login is in progress, so a cancel message must not trigger the callback
      await handleMessage(createEvent({ type: 'cancelAction', source: null }));
      expect(onLoginCancelled).not.toHaveBeenCalled();
    });

    it('rejects a login request without a native auth token', async () => {
      const { handleMessage, onLoginCancelled } = createClient([CHILD_ORIGIN]);

      await handleMessage(
        createEvent({
          type: WindowProviderRequestEnums.loginRequest,
          payload: { token: 'random-login-token' }
        })
      );
      await flushPromises();

      expect(mockSignMessage).not.toHaveBeenCalled();

      await handleMessage(createEvent({ type: 'cancelAction', source: null }));
      expect(onLoginCancelled).not.toHaveBeenCalled();
    });

    it('handles wallet cancel messages while a login is pending', async () => {
      const { handleMessage, onLoginCancelled } = createClient([CHILD_ORIGIN]);
      mockSignMessage.mockImplementation(() => new Promise(() => null));

      await handleMessage(
        createEvent({
          type: WindowProviderRequestEnums.loginRequest,
          payload: { token: createLoginToken(CHILD_ORIGIN) }
        })
      );

      await handleMessage(
        createEvent({
          type: WindowProviderResponseEnums.cancelResponse,
          origin: 'https://devnet-wallet.multiversx.com',
          source: null
        })
      );

      expect(onLoginCancelled).toHaveBeenCalledTimes(1);
    });
  });

  describe('signMessage', () => {
    it('signs a regular message', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);
      const event = createEvent({
        type: WindowProviderRequestEnums.signMessageRequest,
        payload: { message: 'Hello world' }
      });

      await handleMessage(event);
      await flushPromises();

      expect(mockSignMessage).toHaveBeenCalledTimes(1);
      expect(
        (event.source as unknown as { postMessage: jest.Mock }).postMessage
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          type: WindowProviderResponseEnums.signMessageResponse,
          payload: {
            data: {
              signature: Buffer.from('signature').toString('hex'),
              status: 'signed'
            }
          }
        }),
        { targetOrigin: CHILD_ORIGIN }
      );
    });

    it('rejects a login token pre-image issued for another origin', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);
      const event = createEvent({
        type: WindowProviderRequestEnums.signMessageRequest,
        payload: {
          message: `${testAddress}${createLoginToken(OTHER_ORIGIN)}`
        }
      });

      await handleMessage(event);
      await flushPromises();

      expect(mockSignMessage).not.toHaveBeenCalled();
      expect(
        (event.source as unknown as { postMessage: jest.Mock }).postMessage
      ).toHaveBeenCalledWith(
        {
          type: WindowProviderResponseEnums.signMessageResponse,
          payload: { error: expect.any(String) }
        },
        { targetOrigin: CHILD_ORIGIN }
      );
    });

    it('signs a login token pre-image issued for the requesting origin', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);

      await handleMessage(
        createEvent({
          type: WindowProviderRequestEnums.signMessageRequest,
          payload: {
            message: `${testAddress}${createLoginToken(CHILD_ORIGIN)}`
          }
        })
      );
      await flushPromises();

      expect(mockSignMessage).toHaveBeenCalledTimes(1);
    });
  });

  describe('signTransactions', () => {
    it('signs transactions requested by an allowed child frame', async () => {
      const { handleMessage } = createClient([CHILD_ORIGIN]);
      const event = createEvent({
        type: WindowProviderRequestEnums.signTransactionsRequest,
        payload: [createPlainTransaction()]
      });

      await handleMessage(event);
      await flushPromises();

      expect(mockSignTransactions).toHaveBeenCalledTimes(1);
      expect(
        (event.source as unknown as { postMessage: jest.Mock }).postMessage
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          type: WindowProviderResponseEnums.signTransactionsResponse
        }),
        { targetOrigin: CHILD_ORIGIN }
      );
    });
  });
});
