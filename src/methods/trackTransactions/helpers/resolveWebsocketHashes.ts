import { checkTransactionStatus } from './checkTransactionStatus';

export const createWebsocketHashResolver = () => {
  const inFlightHashes = new Set<string>();

  const resolve = async (hashes: string[]): Promise<string[]> => {
    const hashesToResolve = hashes.filter(
      (hash) => Boolean(hash) && !inFlightHashes.has(hash)
    );

    if (hashesToResolve.length === 0) {
      return [];
    }

    hashesToResolve.forEach((hash) => inFlightHashes.add(hash));

    try {
      await checkTransactionStatus({ hashes: hashesToResolve });
    } finally {
      hashesToResolve.forEach((hash) => inFlightHashes.delete(hash));
    }

    return hashesToResolve;
  };

  return { resolve };
};
