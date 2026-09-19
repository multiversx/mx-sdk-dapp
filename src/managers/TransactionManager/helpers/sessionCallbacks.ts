const sessionCallbacksMap: Record<string, SessionCallbacksType> = {};

const genericCallbacksMap: SessionCallbacksType = {};

const settledSessionIds = new Set<string>();

export type SessionCallbacksType = {
  onSuccess?: (sessionId: string) => Promise<void>;
  onFail?: (sessionId: string) => Promise<void>;
};

export const getCallbacks = (sessionId?: string): SessionCallbacksType => {
  if (sessionId != null && sessionId in sessionCallbacksMap) {
    return { ...genericCallbacksMap, ...sessionCallbacksMap[sessionId] };
  }
  return { ...genericCallbacksMap };
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

  if (onSuccess != null) {
    map.onSuccess = onSuccess;
  }
  if (onFail != null) {
    map.onFail = onFail;
  }
};
