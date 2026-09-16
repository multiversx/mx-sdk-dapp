export const createHandshakeSession = (): string => {
  const cryptoRef = globalThis.crypto;

  if (typeof cryptoRef?.randomUUID === 'function') {
    return cryptoRef.randomUUID();
  }

  if (typeof cryptoRef?.getRandomValues === 'function') {
    const bytes = cryptoRef.getRandomValues(new Uint8Array(16));

    return Array.from(bytes)
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  throw new Error(
    'WebviewClient: no secure randomness source available for the handshake session'
  );
};
