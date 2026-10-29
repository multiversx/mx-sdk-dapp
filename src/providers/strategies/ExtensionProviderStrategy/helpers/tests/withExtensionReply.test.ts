import {
  EXTENSION_REPLY_ERROR,
  withExtensionReply
} from '../withExtensionReply';

const listeners = new Set<(event: MessageEvent) => void>();

const dispatchReply = ({
  source = window as MessageEventSource | null,
  origin = window.location.origin,
  target = 'erdw-contentScript'
}: {
  source?: MessageEventSource | null;
  origin?: string;
  target?: string;
} = {}) => {
  const event = {
    data: { target, type: '', data: 'reply' },
    origin,
    source,
    isTrusted: true
  } as unknown as MessageEvent;

  listeners.forEach((listener) => listener(event));
};

beforeEach(() => {
  listeners.clear();
  jest
    .spyOn(window, 'addEventListener')
    .mockImplementation((type, listener) => {
      if (type === 'message') {
        listeners.add(listener as (event: MessageEvent) => void);
      }
    });
  jest
    .spyOn(window, 'removeEventListener')
    .mockImplementation((type, listener) => {
      if (type === 'message') {
        listeners.delete(listener as (event: MessageEvent) => void);
      }
    });
});

afterEach(() => {
  jest.restoreAllMocks();
});

const otherWindow = () => {
  const frame = document.createElement('iframe');
  document.body.appendChild(frame);
  return frame.contentWindow as MessageEventSource;
};

describe('withExtensionReply', () => {
  it('returns the result when the reply comes from the page', async () => {
    const onRefused = jest.fn();

    const result = await withExtensionReply({
      operation: async () => {
        dispatchReply();
        return 'ok';
      },
      onRefused
    });

    expect(result).toBe('ok');
    expect(onRefused).not.toHaveBeenCalled();
  });

  it.each([
    ['another window', () => ({ source: otherWindow() })],
    ['a missing source', () => ({ source: null })],
    ['another origin', () => ({ origin: 'https://other.example' })]
  ])(
    'refuses the result when the only reply comes from %s',
    async (_, getReply) => {
      const onRefused = jest.fn();

      await expect(
        withExtensionReply({
          operation: async () => {
            dispatchReply(getReply());
            return 'forged';
          },
          onRefused
        })
      ).rejects.toThrow(EXTENSION_REPLY_ERROR);

      expect(onRefused).toHaveBeenCalledTimes(1);
    }
  );

  it('keeps the result when the page also replied', async () => {
    const result = await withExtensionReply({
      operation: async () => {
        dispatchReply({ source: otherWindow() });
        dispatchReply();
        return 'ok';
      }
    });

    expect(result).toBe('ok');
  });

  it('ignores unrelated messages', async () => {
    const result = await withExtensionReply({
      operation: async () => {
        dispatchReply({ source: otherWindow(), target: 'other' });
        return 'ok';
      }
    });

    expect(result).toBe('ok');
  });

  it('stops listening once the operation settles', async () => {
    await withExtensionReply({ operation: async () => 'first' });

    const result = await withExtensionReply({
      operation: async () => 'second'
    });
    dispatchReply({ source: otherWindow() });

    expect(result).toBe('second');
  });
});
