import { checkTransactionStatus } from './checkTransactionStatus';

export const createWebsocketHashResolver = () => {
  const inFlightHashes = new Set<string>();
  // received again while being checked: the check may predate the event
  const queuedHashes = new Set<string>();

  const resolve = async (hashes: string[]): Promise<string[]> => {
    const validHashes = hashes.filter(Boolean);

    validHashes
      .filter((hash) => inFlightHashes.has(hash))
      .forEach((hash) => queuedHashes.add(hash));

    const hashesToResolve = validHashes.filter(
      (hash) => !inFlightHashes.has(hash)
    );

    if (hashesToResolve.length === 0) {
      return [];
    }

    hashesToResolve.forEach((hash) => inFlightHashes.add(hash));
    let requeuedHashes: string[] = [];

    try {
      await checkTransactionStatus({ hashes: hashesToResolve });
    } finally {
      hashesToResolve.forEach((hash) => inFlightHashes.delete(hash));
      requeuedHashes = hashesToResolve.filter((hash) =>
        queuedHashes.delete(hash)
      );
    }

    if (requeuedHashes.length > 0) {
      await resolve(requeuedHashes);
    }

    return hashesToResolve;
  };

  return { resolve };
};
