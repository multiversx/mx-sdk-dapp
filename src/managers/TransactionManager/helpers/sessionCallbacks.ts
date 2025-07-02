export const sessionCallbacksMap: SessionCallbacksType = {};

type SessionCallbacksType = {
  onSuccess?: (sessionId: string) => Promise<void>;
  onFail?: (sessionId: string) => Promise<void>;
};

export const registerSessionCallbacks = ({
  onSuccess,
  onFail
}: SessionCallbacksType) => {
  if (onSuccess != null) {
    sessionCallbacksMap.onSuccess = onSuccess;
  }
  if (onFail != null) {
    sessionCallbacksMap.onFail = onFail;
  }
};
