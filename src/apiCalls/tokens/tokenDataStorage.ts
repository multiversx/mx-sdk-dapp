let memoryCache: Record<string, string> = {};

export let tokenDataStorage = {
  setItem: async <T>(key: string, tokenData: T) => {
    try {
      memoryCache[key] = JSON.stringify(tokenData);
    } catch (e) {
      console.error('tokenDataStorage unable to serialize', e);
    }
  },
  getItem: async (key: string) => {
    if (!memoryCache[key]) {
      return null;
    }
    try {
      return JSON.parse(memoryCache[key]);
    } catch (e) {
      console.error('tokenDataStorage unable to parse', e);
    }
  },
  clear: async () => {
    memoryCache = {};
  },
  removeItem: async (key: string) => {
    delete memoryCache[key];
  }
};

export const setTokenDataStorage = (
  tokenDataCacheStorage: typeof tokenDataStorage
) => {
  tokenDataStorage = tokenDataCacheStorage;
};
