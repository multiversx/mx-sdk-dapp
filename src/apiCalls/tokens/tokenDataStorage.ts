export const TOKEN_CACHE_MAX_ENTRIES = 500;

let memoryCache = new Map<string, string>();

export const tokenDataStorage = {
  setItem: async <T>(key: string, tokenData: T) => {
    try {
      const serialized = JSON.stringify(tokenData);

      memoryCache.delete(key);
      memoryCache.set(key, serialized);

      while (memoryCache.size > TOKEN_CACHE_MAX_ENTRIES) {
        const oldestKey = memoryCache.keys().next().value;

        if (oldestKey === undefined) {
          break;
        }

        memoryCache.delete(oldestKey);
      }
    } catch (e) {
      console.error('tokenDataStorage unable to serialize', e);
    }
  },
  getItem: async (key: string) => {
    const cached = memoryCache.get(key);

    if (!cached) {
      return null;
    }

    try {
      const parsed = JSON.parse(cached);

      memoryCache.delete(key);
      memoryCache.set(key, cached);

      return parsed;
    } catch (e) {
      console.error('tokenDataStorage unable to parse', e);
      memoryCache.delete(key);
      return null;
    }
  },
  clear: async () => {
    memoryCache = new Map<string, string>();
  }
};
