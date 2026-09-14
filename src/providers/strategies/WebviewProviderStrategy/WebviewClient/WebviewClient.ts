import { safeWindow } from 'constants/window.constants';
import { Address, Message, Transaction } from 'lib/sdkCore';
import {
  WindowProviderRequestEnums,
  WindowProviderResponseEnums,
  RequestMessageType,
  RequestPayloadType
} from 'lib/sdkWebWalletCrossWindowProvider';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { accountSelector } from 'store/selectors/accountSelectors';
import { getStore } from 'store/store';
import {
  isLoginTokenMessage,
  isLoginTokenMessageForOrigin
} from './helpers/isLoginTokenMessageForOrigin';
import { normalizeAllowedOrigins } from './helpers/normalizeAllowedOrigins';

const LOGIN_TOKEN_ORIGIN_MISMATCH_ERROR =
  'Login token origin does not match the requesting origin';

type MessageHandler = (event: MessageEvent) => void;

type MessageEventType = {
  event: MessageEvent<MessageType>;
};

type MessageType =
  | RequestMessageType
  | { type: 'cancelAction'; payload: null }
  | {
      type: WindowProviderResponseEnums.cancelResponse;
      payload: null;
    };

export type WebviewClientPropsType = {
  onLoginCancelled: () => Promise<void>;
  allowedOrigins: string[];
};

export class WebviewClient {
  private readonly handlers: Map<string, MessageHandler> = new Map();
  private readonly store = getStore();
  private isLoginInitiated = false;
  private readonly handleLoginCancelled: () => Promise<void>;
  private readonly allowedOrigins: Set<string>;

  constructor({ onLoginCancelled, allowedOrigins }: WebviewClientPropsType) {
    this.handleMessage = this.handleMessage.bind(this);
    this.handleLoginCancelled = onLoginCancelled;
    this.allowedOrigins = normalizeAllowedOrigins(allowedOrigins);

    if (this.allowedOrigins.size === 0) {
      console.error(
        'WebviewClient: no valid allowedOrigins configured. All requests from embedded dApps will be ignored.'
      );
    }
  }

  public startListening() {
    safeWindow.addEventListener('message', this.handleMessage);
  }

  public stopListening() {
    safeWindow.removeEventListener('message', this.handleMessage);
  }

  public registerEvent(type: string, handler: MessageHandler) {
    this.handlers.set(type, handler);
  }

  public unregisterEvent(type: string) {
    this.handlers.delete(type);
  }

  private isTrustedSender(event: MessageEvent) {
    try {
      const source = event.source as Window | null;
      const isDirectChildFrame =
        Boolean(source) &&
        source !== safeWindow &&
        source?.parent === safeWindow;

      return isDirectChildFrame && this.allowedOrigins.has(event.origin);
    } catch {
      return false;
    }
  }

  private async handleMessage(event: MessageEvent<MessageType>) {
    const type = event.data?.type;

    const isWalletCancelMessage =
      type === WindowProviderResponseEnums.cancelResponse ||
      type === 'cancelAction';

    if (!isWalletCancelMessage && !this.isTrustedSender(event)) {
      const isKnownRequest =
        typeof type === 'string' &&
        (this.handlers.has(type) ||
          Object.values<string>(WindowProviderRequestEnums).includes(type));

      if (isKnownRequest) {
        console.warn(
          `WebviewClient: ignored "${type}" from untrusted origin "${event.origin}"`
        );
      }

      return;
    }

    if (typeof type === 'string' && this.handlers.has(type)) {
      const handler = this.handlers.get(type);
      return handler?.(event);
    }

    switch (type) {
      case WindowProviderRequestEnums.finalizeHandshakeRequest:
        this.handshake({ event });
        break;
      case WindowProviderRequestEnums.signMessageRequest:
        this.signMessage({ event, payload: event.data.payload });
        break;
      case WindowProviderRequestEnums.loginRequest:
        this.login({ event, payload: event.data.payload });
        break;
      case WindowProviderRequestEnums.signTransactionsRequest:
        this.signTransactions({ event });
        break;
      case WindowProviderResponseEnums.cancelResponse: // sent by web-wallet CrossWindow provider
      case 'cancelAction': // sent by Extension provider
        if (this.isLoginInitiated) {
          await this.handleLoginCancelled();
        }
        break;
      default:
        break;
    }
  }

  private async login({
    event,
    payload
  }: MessageEventType & { payload: RequestPayloadType['LOGIN_REQUEST'] }) {
    const loginToken = payload?.token;

    if (!loginToken) {
      return;
    }

    const { address } = accountSelector(this.store.getState());

    // Message format needed for token generation
    const message = `${address}${loginToken}`;

    if (
      !isLoginTokenMessageForOrigin({ address, message, origin: event.origin })
    ) {
      event.source?.postMessage(
        {
          type: WindowProviderResponseEnums.loginResponse,
          payload: { error: LOGIN_TOKEN_ORIGIN_MISMATCH_ERROR }
        },
        { targetOrigin: event.origin }
      );
      return;
    }

    this.isLoginInitiated = true;

    try {
      const provider = getAccountProvider();

      const messageToSign = new Message({
        address: new Address(address),
        data: new Uint8Array(Buffer.from(message))
      });

      const signedMessage = await provider.signMessage(messageToSign);
      const signature = signedMessage?.signature ?? '';

      event.source?.postMessage(
        {
          type: WindowProviderResponseEnums.loginResponse,
          payload: {
            data: {
              address,
              signature: Buffer.from(signature).toString('hex')
            }
          }
        },
        { targetOrigin: event.origin }
      );
    } catch {
      if (this.isLoginInitiated) {
        await this.handleLoginCancelled();
        event.source?.postMessage(
          {
            type: WindowProviderResponseEnums.cancelResponse,
            payload: null
          },
          { targetOrigin: event.origin }
        );
      }
    } finally {
      this.isLoginInitiated = false;
    }
  }

  private handshake({ event }: MessageEventType) {
    const handshakeSession = Date.now().toString();

    event.source?.postMessage(
      {
        type: WindowProviderResponseEnums.finalizeHandshakeResponse,
        payload: { data: handshakeSession }
      },
      { targetOrigin: event.origin }
    );
  }

  private async signMessage({
    event,
    payload
  }: MessageEventType & {
    payload: RequestPayloadType['SIGN_MESSAGE_REQUEST'];
  }) {
    const { address } = accountSelector(this.store.getState());
    const { message } = payload;

    if (
      isLoginTokenMessage(message) &&
      !isLoginTokenMessageForOrigin({ address, message, origin: event.origin })
    ) {
      event.source?.postMessage(
        {
          type: WindowProviderResponseEnums.signMessageResponse,
          payload: { error: LOGIN_TOKEN_ORIGIN_MISMATCH_ERROR }
        },
        { targetOrigin: event.origin }
      );
      return;
    }

    try {
      const messageToSign = new Message({
        address: new Address(address),
        data: new Uint8Array(Buffer.from(message))
      });

      const provider = getAccountProvider();
      const signedMessage = await provider.signMessage(messageToSign);
      const signature = signedMessage?.signature ?? '';

      event.source?.postMessage(
        {
          type: WindowProviderResponseEnums.signMessageResponse,
          payload: {
            data: {
              signature: Buffer.from(signature).toString('hex'),
              status: 'signed'
            }
          }
        },
        { targetOrigin: event.origin }
      );
    } catch {
      throw new Error('Could not sign message');
    }
  }

  private async signTransactions({ event }: MessageEventType) {
    const provider = getAccountProvider();
    const { payload } = event.data;

    if (!Array.isArray(payload)) {
      return;
    }

    try {
      const transactions = payload.map((plainTransactionObject) =>
        Transaction.newFromPlainObject(plainTransactionObject)
      );

      const signedTx = await provider.signTransactions(transactions);
      event.source?.postMessage(
        {
          type: WindowProviderResponseEnums.signTransactionsResponse,
          payload: {
            data: signedTx.map((tx) => tx.toPlainObject())
          }
        },
        { targetOrigin: event.origin }
      );
    } catch {
      throw new Error('Could not sign transactions');
    }
  }
}
