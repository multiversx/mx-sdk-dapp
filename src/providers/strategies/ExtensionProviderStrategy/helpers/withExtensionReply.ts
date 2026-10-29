import { safeWindow } from 'constants/window.constants';

const EXTENSION_REPLY_TARGET = 'erdw-contentScript';

export const EXTENSION_REPLY_ERROR = 'Unexpected response from the extension';

const isPageReply = (event: MessageEvent) =>
  event.isTrusted &&
  event.source === safeWindow &&
  event.origin === safeWindow.location?.origin;

export const withExtensionReply = async <T>({
  operation,
  onRefused
}: {
  operation: () => Promise<T>;
  onRefused?: () => void;
}): Promise<T> => {
  let hasPageReply = false;
  let hasOtherReply = false;

  const listener = (event: MessageEvent) => {
    if (event.data?.target !== EXTENSION_REPLY_TARGET) {
      return;
    }

    if (isPageReply(event)) {
      hasPageReply = true;
    } else {
      hasOtherReply = true;
    }
  };

  safeWindow.addEventListener?.('message', listener);

  try {
    const result = await operation();

    if (hasOtherReply && !hasPageReply) {
      onRefused?.();
      throw new Error(EXTENSION_REPLY_ERROR);
    }

    return result;
  } finally {
    safeWindow.removeEventListener?.('message', listener);
  }
};
