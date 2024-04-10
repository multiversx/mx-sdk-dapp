import {
  CrossWindowProviderResponseEnums,
  ReplyWithPostMessagePayloadType
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { getSafeDocument } from './getSafeDocument';
import { getSafeWindow } from './getSafeWindow';
import { getTargetOrigin } from './getTargetOrigin';
import { isMobileWebview } from './isMobileWebview';

export type WebviewProviderEventDataType<
  T extends CrossWindowProviderResponseEnums
> = {
  type: T;
  payload: ReplyWithPostMessagePayloadType<T>;
};

export const webviewProviderEventHandler =
  <T extends CrossWindowProviderResponseEnums>(
    action: T,
    resolve: (value: WebviewProviderEventDataType<T>) => void
  ) =>
  (event: MessageEvent<WebviewProviderEventDataType<T> | string>) => {
    let eventData = event.data;

    try {
      eventData =
        isMobileWebview() && typeof eventData === 'string'
          ? JSON.parse(eventData)
          : eventData;
    } catch (err) {
      console.error('error parsing eventData', eventData);
    }

    const { type, payload } = eventData as {
      type: T;
      payload: ReplyWithPostMessagePayloadType<T>;
    };

    if (event.origin != getTargetOrigin()) {
      console.error('origin not accepted', {
        eventOrigin: event.origin
      });
      return;
    }

    const isCurrentAction =
      action === type ||
      type === CrossWindowProviderResponseEnums.cancelResponse;

    if (!isCurrentAction) {
      return;
    }

    getSafeWindow().removeEventListener?.(
      'message',
      webviewProviderEventHandler(action, resolve)
    );
    getSafeDocument().removeEventListener?.(
      'message',
      webviewProviderEventHandler(action, resolve)
    );

    resolve({ type, payload });
  };
