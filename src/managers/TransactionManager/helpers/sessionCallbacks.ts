const sessionCallbacksMap: Record<string, SessionCallbacksType> = {};

const genericCallbacksMap: SessionCallbacksType = {};

// set by initApp; setCallbacks and session callbacks take precedence
const defaultCallbacksMap: SessionCallbacksType = {};

const settledSessionIds = new Set<string>();

export type SessionCallbacksType = {
  onSuccess?: (sessionId: string) => Promise<void>;
  onFail?: (sessionId: string) => Promise<void>;
};

export const getCallbacks = (sessionId?: string): SessionCallbacksType => {
  const globalCallbacks = { ...defaultCallbacksMap, ...genericCallbacksMap };

  if (sessionId != null && sessionId in sessionCallbacksMap) {
    return { ...globalCallbacks, ...sessionCallbacksMap[sessionId] };
  }
  return globalCallbacks;
};

export const takeCallbacks = (
  sessionId: string
): SessionCallbacksType | null => {
  if (settledSessionIds.has(sessionId)) {
    return null;
  }

  settledSessionIds.add(sessionId);
  const callbacks = getCallbacks(sessionId);
  delete sessionCallbacksMap[sessionId];

  return callbacks;
};

const setCallbacks = (
  map: SessionCallbacksType,
  { onSuccess, onFail }: SessionCallbacksType
) => {
  if (onSuccess != null) {
    map.onSuccess = onSuccess;
  }
  if (onFail != null) {
    map.onFail = onFail;
  }
};

export const registerCallbacks = ({
  onSuccess,
  onFail,
  sessionId
}: SessionCallbacksType & { sessionId?: string }) => {
  let map = genericCallbacksMap;

  if (sessionId != null) {
    sessionCallbacksMap[sessionId] = sessionCallbacksMap[sessionId] ?? {};
    map = sessionCallbacksMap[sessionId];
  }

  setCallbacks(map, { onSuccess, onFail });
};

export const registerDefaultCallbacks = (callbacks: SessionCallbacksType) =>
  setCallbacks(defaultCallbacksMap, callbacks);
