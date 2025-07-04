import { safeWindow } from 'constants/index';
import { Address, Message, Transaction } from 'lib/sdkCore';
import {
  WindowProviderRequestEnums,
  WindowProviderResponseEnums,
  RequestMessageType,
  RequestPayloadType
} from 'lib/sdkWebWalletCrossWindowProvider';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { nativeAuth } from 'services/nativeAuth';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers';
import { accountSelector, loginInfoSelector } from 'store/selectors';
import { getStore } from 'store/store';

type MessageHandler = (event: MessageEvent) => void;

type MessageEventType = {
  event: MessageEvent<RequestMessageType>;
};

export class WebviewClient {
  private readonly handlers: Map<string, MessageHandler> = new Map();
  private readonly store = getStore();

  constructor() {
    this.handleMessage = this.handleMessage.bind(this);
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

  private async handleMessage(event: MessageEvent<RequestMessageType>) {
    const type = event.data?.type;

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
      default:
        break;
    }
  }

  private async getNativeAuthToken({
    origin,
    token
  }: {
    origin: string;
    token: string;
  }) {
    const nativeAuthClient = nativeAuth({
      origin
    });

    const { tokenLogin } = loginInfoSelector(this.store.getState());
    const { address } = accountSelector(this.store.getState());

    return nativeAuthClient.getToken({
      address,
      token,
      signature: Buffer.from(tokenLogin?.signature ?? '').toString('hex')
    });
  }

  private async login({
    event,
    payload
  }: MessageEventType & { payload: RequestPayloadType['LOGIN_REQUEST'] }) {
    const { token } = payload;

    if (!token) {
      return;
    }

    const nativeAuthToken = await this.getNativeAuthToken({
      origin: event.origin,
      token
    });
    const decodedToken = decodeNativeAuthToken(nativeAuthToken);

    if (!decodedToken) {
      return;
    }

    const { address, signature } = decodedToken;

    event.source?.postMessage(
      {
        type: WindowProviderResponseEnums.loginResponse,
        payload: {
          data: {
            address,
            accessToken: nativeAuthToken,
            signature
          }
        }
      },
      { targetOrigin: event.origin }
    );
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

    const messageToSign = new Message({
      address: new Address(address),
      data: new Uint8Array(Buffer.from(message))
    });

    const accountProvider = getAccountProvider();
    const signedMessage = await accountProvider.signMessage(messageToSign);

    event.source?.postMessage(
      {
        type: WindowProviderResponseEnums.signMessageResponse,
        payload: {
          data: {
            signature: Buffer.from(signedMessage?.signature ?? '').toString(
              'hex'
            ),
            status: 'signed'
          }
        }
      },
      { targetOrigin: event.origin }
    );
  }

  private async signTransactions({ event }: MessageEventType) {
    const accountProvider = getAccountProvider();
    const { payload } = event.data;

    if (!Array.isArray(payload)) {
      return;
    }

    const transactions = payload.map((plainTransactionObject) =>
      Transaction.newFromPlainObject(plainTransactionObject)
    );

    const signedTx = await accountProvider.signTransactions(transactions);
    event.source?.postMessage(
      {
        type: WindowProviderResponseEnums.signTransactionsResponse,
        payload: {
          data: signedTx.map((tx) => tx.toPlainObject())
        }
      },
      { targetOrigin: event.origin }
    );
  }
}
