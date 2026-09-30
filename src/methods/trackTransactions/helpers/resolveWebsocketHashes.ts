import {
  checkTransactionStatus,
  CheckTransactionStatusPropsType
} from 'methods/trackTransactions/helpers/checkTransactionStatus';

type StatusCheckType = (
  props: CheckTransactionStatusPropsType,
  onStart: () => void
) => Promise<void>;

const checkNow: StatusCheckType = (props, onStart) => {
  onStart();
  return checkTransactionStatus(props);
};

export const createWebsocketHashResolver = (
  check: StatusCheckType = checkNow
) => {
  const waitingHashes = new Set<string>();
  const inFlightHashes = new Set<string>();
  const queuedHashes = new Set<string>();

  const resolve = async (hashes: string[]): Promise<string[]> => {
    const validHashes = hashes.filter(
      (hash) => Boolean(hash) && !waitingHashes.has(hash)
    );

    validHashes
      .filter((hash) => inFlightHashes.has(hash))
      .forEach((hash) => queuedHashes.add(hash));

    const hashesToResolve = validHashes.filter(
      (hash) => !inFlightHashes.has(hash)
    );

    if (hashesToResolve.length === 0) {
      return [];
    }

    hashesToResolve.forEach((hash) => waitingHashes.add(hash));
    let requeuedHashes: string[] = [];

    try {
      await check({ hashes: hashesToResolve }, () =>
        hashesToResolve.forEach((hash) => {
          waitingHashes.delete(hash);
          inFlightHashes.add(hash);
        })
      );
    } finally {
      hashesToResolve.forEach((hash) => {
        waitingHashes.delete(hash);
        inFlightHashes.delete(hash);
      });
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
