import {
  CrossWindowProviderResponseEnums,
  ReplyWithPostMessagePayloadType
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { getTargetOrigin } from './getTargetOrigin';

export const webviewProviderEventHandler =
  <T extends CrossWindowProviderResponseEnums>(
    action: T,
    resolve: (value: {
      type: T;
      payload: ReplyWithPostMessagePayloadType<T>;
    }) => void
  ) =>
  (
    event: MessageEvent<{
      type: T;
      payload: ReplyWithPostMessagePayloadType<T>;
    }>
  ) => {
    const { type, payload } = event.data;

    if (event.origin != getTargetOrigin()) {
      console.error('origin not accepted', {
        eventOrigin: event.origin
      });
      return;
    }

    console.log('webviewProviderEventHandler - type: ', type);

    const isCurrentAction =
      action === type ||
      type === CrossWindowProviderResponseEnums.cancelResponse;

    if (!isCurrentAction) {
      console.log(
        'webviewProviderEventHandler - !isCurrentAction: ',
        isCurrentAction
      );
      return;
    }

    window.removeEventListener(
      'message',
      webviewProviderEventHandler(action, resolve)
    );
    resolve({ type, payload });
  };
