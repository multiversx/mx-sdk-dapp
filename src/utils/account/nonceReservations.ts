const RESERVATION_LIFETIME_MS = 10 * 60 * 1000;

type NonceReservationType = {
  address: string;
  nonce: number;
  expiresAt: number;
};

let reservations: NonceReservationType[] = [];

const removeExpiredReservations = () => {
  const now = Date.now();
  reservations = reservations.filter(({ expiresAt }) => expiresAt > now);
};

export const releaseNonces = (address: string, nonces: number[]) => {
  reservations = reservations.filter(
    (reservation) =>
      reservation.address !== address || !nonces.includes(reservation.nonce)
  );
};

/**
 * Holds nonces of transactions that were signed but are not tracked yet, so that
 * another signing does not reuse them. Held nonces expire on their own if the
 * transactions are never sent.
 */
export const reserveNonces = (address: string, nonces: number[]) => {
  const expiresAt = Date.now() + RESERVATION_LIFETIME_MS;

  releaseNonces(address, nonces);
  reservations.push(...nonces.map((nonce) => ({ address, nonce, expiresAt })));
};

export const clearNonceReservations = () => {
  reservations = [];
};

/**
 * @returns the nonce following the highest one held for the address, or 0
 */
export const getNextReservedNonce = (address?: string) => {
  removeExpiredReservations();

  return reservations.reduce(
    (next, reservation) =>
      reservation.address === address
        ? Math.max(next, reservation.nonce + 1)
        : next,
    0
  );
};

export const releaseTransactionNonces = (
  transactions: { sender: string; nonce: number }[]
) => {
  transactions.forEach(({ sender, nonce }) =>
    releaseNonces(sender, [Number(nonce)])
  );
};
