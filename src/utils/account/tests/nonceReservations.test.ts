import {
  clearNonceReservations,
  getNextReservedNonce,
  releaseNonces,
  releaseTransactionNonces,
  reserveNonces
} from '../nonceReservations';

const address = 'erd1first';
const otherAddress = 'erd1second';

describe('nonceReservations', () => {
  beforeEach(() => {
    clearNonceReservations();
    jest.useRealTimers();
  });

  it('returns 0 when nothing is held', () => {
    expect(getNextReservedNonce(address)).toBe(0);
  });

  it('returns the nonce after the highest one held for the address', () => {
    reserveNonces(address, [7, 8]);
    reserveNonces(otherAddress, [20]);

    expect(getNextReservedNonce(address)).toBe(9);
    expect(getNextReservedNonce(otherAddress)).toBe(21);
  });

  it('counts a held nonce of zero', () => {
    reserveNonces(address, [0]);

    expect(getNextReservedNonce(address)).toBe(1);
  });

  it('releases nonces', () => {
    reserveNonces(address, [7, 8]);
    releaseNonces(address, [8]);

    expect(getNextReservedNonce(address)).toBe(8);

    releaseTransactionNonces([{ sender: address, nonce: 7 }]);

    expect(getNextReservedNonce(address)).toBe(0);
  });

  it('lets held nonces expire', () => {
    jest.useFakeTimers();
    reserveNonces(address, [7]);

    jest.advanceTimersByTime(10 * 60 * 1000 + 1);

    expect(getNextReservedNonce(address)).toBe(0);
  });
});
